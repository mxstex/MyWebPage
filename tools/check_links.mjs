#!/usr/bin/env node
// Link checker for the static site. No dependencies; Node 18+.
//
//   node tools/check_links.mjs                  internal links only, offline
//   node tools/check_links.mjs --external       also request every external URL
//   node tools/check_links.mjs --external --timeout=5000 --verbose
//
// Collects every href / src / srcset / poster and CSS url() from the published HTML pages and
// stylesheets, plus the links and image paths that main.js renders from assets/js/content.js
// (SITE, T, DATA; "links.<key>" references are resolved against SITE.links). Internal targets
// must be files that GitHub Pages will serve: the checker compares against `git ls-files`
// (tracked or untracked, never ignored), so a git-ignored file or a wrong letter case is broken
// even though Windows would open it. Fragments (#id) must name an id in the target page.
// External URLs are listed and, only with --external, requested with a short timeout (one retry,
// for Cloud Run cold starts); YouTube videos are checked through oEmbed because a watch page
// answers 200 even for a removed video.
// Exits 1 when something is broken.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://mxstex.github.io/MyWebPage/"; // absolute links under it are internal
const CONTENT = "assets/js/content.js";
const LOCAL = "http://site.invalid/__site__/";
const SKIPPED_SCHEMES = /^(data|javascript|blob|about|tel):/i;
const WARN_STATUS = new Map([
  [999, "refuses automated requests (LinkedIn); check it in a browser"],
  [429, "rate limited; try again later"],
]);

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};
if (flag("help")) {
  console.log("usage: node tools/check_links.mjs [--external] [--timeout=MS] [--verbose]");
  process.exit(0);
}
const EXTERNAL = flag("external");
const VERBOSE = flag("verbose");
const TIMEOUT = Number(option("timeout", "8000"));

/* ---------- which files GitHub Pages serves ---------- */

function publishedFiles() {
  try {
    const out = execFileSync("git", ["ls-files", "-z", "--cached", "--others", "--exclude-standard"], {
      cwd: ROOT,
      encoding: "utf8",
    });
    return { exact: true, files: new Set(out.split("\0").filter((f) => f && existsSync(path.join(ROOT, f)))) };
  } catch {
    const files = new Set();
    const walk = (dir) => {
      for (const name of readdirSync(path.join(ROOT, dir))) {
        if (name === ".git" || name === "node_modules") continue;
        const rel = dir ? `${dir}/${name}` : name;
        if (statSync(path.join(ROOT, rel)).isDirectory()) walk(rel);
        else files.add(rel);
      }
    };
    walk("");
    return { exact: false, files };
  }
}

const { exact, files: PUBLISHED } = publishedFiles();
const read = (rel) => readFileSync(path.join(ROOT, rel), "utf8");

/* ---------- collecting references ---------- */

const refs = []; // { url, base, where }
const add = (url, base, where) => {
  const value = String(url).trim();
  if (value) refs.push({ url: value, base, where });
};
const lineOf = (text, index) => text.slice(0, index).split("\n").length;

function scanCss(text, base, file, offset = 0, whole = text) {
  for (const m of text.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)"'\s]+))\s*\)/g)) {
    add(m[1] ?? m[2] ?? m[3], base, `${file}:${lineOf(whole, offset + m.index)}`);
  }
}

function scanHtml(file) {
  const text = read(file).replace(/<!--[\s\S]*?-->/g, (c) => c.replace(/[^\n]/g, " "));
  for (const tag of text.matchAll(/<([a-zA-Z][\w-]*)\b([^>]*)>/g)) {
    const name = tag[1].toLowerCase();
    const attrs = {};
    for (const a of tag[2].matchAll(/([^\s=/"']+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>"']+))/g)) {
      attrs[a[1].toLowerCase()] = a[2] ?? a[3] ?? a[4];
    }
    const where = `${file}:${lineOf(text, tag.index)}`;
    // <link rel="preconnect"> names an origin, not a document; requesting it proves nothing.
    if (name === "link" && /\b(preconnect|dns-prefetch)\b/i.test(attrs.rel || "")) continue;
    for (const key of ["href", "src", "poster"]) if (key in attrs) add(attrs[key], file, where);
    if (attrs.srcset) for (const part of attrs.srcset.split(",")) add(part.trim().split(/\s+/)[0], file, where);
    if (attrs.style) scanCss(attrs.style, file, file, tag.index, text);
  }
  for (const block of text.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    scanCss(block[1], file, file, block.index, text);
  }
}

function scanContent() {
  if (!PUBLISHED.has(CONTENT)) return null;
  const sandbox = { window: {} };
  vm.runInNewContext(read(CONTENT), sandbox, { filename: CONTENT });
  const { SITE = {}, T = {}, DATA = {} } = sandbox.window;
  // A relative file path counts when it has a folder ("assets/img/x.webp") or sits under a link
  // property; a tag such as "Three.js" is neither.
  const LINK_KEYS = new Set(["url", "href", "src", "image", "icon", "cv", "poster", "cover", "thumb"]);
  const looksLikeLink = (s, key) =>
    /^(https?:\/\/|\/\/|mailto:|links\.[\w-]+$)/i.test(s) ||
    ((s.includes("/") || LINK_KEYS.has(key)) &&
      /^[\w.\/-]+\.(?:jpe?g|png|webp|gif|svg|ico|avif|pdf|html?|css|js|mjs|mp4|webm|mp3|ogg)(?:[?#].*)?$/i.test(s));
  const walk = (value, where, key = "") => {
    if (typeof value === "string") {
      // Strings that carry markup are scanned like HTML attributes.
      for (const m of value.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g)) add(m[1], "index.html", where);
      if (looksLikeLink(value, key)) add(value, "index.html", where);
    } else if (Array.isArray(value)) {
      value.forEach((v, i) => walk(v, `${where}[${i}]`, key));
    } else if (value && typeof value === "object") {
      for (const [k, v] of Object.entries(value)) walk(v, `${where}.${k}`, k);
    }
  };
  // SITE.links holds the targets of "links.<key>"; they are checked where they are used.
  walk({ ...SITE, links: undefined }, `${CONTENT} SITE`);
  walk(T, `${CONTENT} T`);
  walk(DATA, `${CONTENT} DATA`);
  // main.js turns SITE.videos ids into YouTube embeds.
  (SITE.videos || []).forEach((v, i) => {
    if (v && v.id) add(`https://www.youtube.com/watch?v=${v.id}`, "index.html", `${CONTENT} SITE.videos[${i}].id`);
  });
  return SITE.links || {};
}

const pages = [...PUBLISHED].filter((f) => /\.html?$/i.test(f)).sort();
const styles = [...PUBLISHED].filter((f) => /\.css$/i.test(f)).sort();
pages.forEach(scanHtml);
styles.forEach((f) => scanCss(read(f), f, f));
// Other scripts: only whole URL constants (const X = "https://...";), not string fragments.
for (const f of [...PUBLISHED].filter((f) => /\.m?js$/i.test(f) && f !== CONTENT && !f.startsWith("tools/"))) {
  const text = read(f);
  for (const m of text.matchAll(/\b(?:const|let|var)\s+\w+\s*=\s*["'](https?:\/\/[^"'\s]+)["']\s*;/g)) {
    add(m[1], f, `${f}:${lineOf(text, m.index)}`);
  }
}
const siteLinks = scanContent();

/* ---------- classifying and checking ---------- */

const broken = [];
const warnings = [];
const hidden = new Set();
const external = new Map(); // url -> [where]
let internalCount = 0;
let mailCount = 0;
let skippedCount = 0;
const idCache = new Map();

function idsOf(page) {
  if (!idCache.has(page)) {
    const ids = new Set();
    for (const m of read(page).matchAll(/\s(?:id|name)\s*=\s*["']([^"']+)["']/g)) ids.add(m[1]);
    idCache.set(page, ids);
  }
  return idCache.get(page);
}

function published(rel) {
  if (exact) return PUBLISHED.has(rel);
  return existsSync(path.join(ROOT, rel)) && statSync(path.join(ROOT, rel)).isFile();
}

function checkInternal(pathPart, fragment, base, where, original) {
  internalCount += 1;
  let rel = pathPart;
  if (rel === "" || rel.endsWith("/")) rel += "index.html";
  if (!published(rel)) {
    if (published(`${rel}/index.html`)) rel = `${rel}/index.html`;
    else {
      const other = [...PUBLISHED].find((f) => f.toLowerCase() === rel.toLowerCase());
      const hint = other
        ? ` (the file is ${other}; GitHub Pages is case-sensitive)`
        : existsSync(path.join(ROOT, rel))
          ? " (the file exists but is git-ignored, so it is not published)"
          : "";
      broken.push({ where, url: original, why: `missing file ${rel}${hint}` });
      return;
    }
  }
  if (fragment && /\.html?$/i.test(rel) && !idsOf(rel).has(fragment)) {
    broken.push({ where, url: original, why: `no id="${fragment}" in ${rel}` });
  }
}

for (const ref of refs) {
  let url = ref.url;
  if (url.startsWith("links.")) {
    const key = url.slice(6);
    if (!siteLinks || !(key in siteLinks)) {
      broken.push({ where: ref.where, url, why: "no such key in SITE.links" });
      continue;
    }
    if (!siteLinks[key]) {
      hidden.add(url); // an empty link hides its button (or shows "coming soon")
      continue;
    }
    url = siteLinks[key];
  }
  if (url === "#" || SKIPPED_SCHEMES.test(url)) {
    skippedCount += 1;
    continue;
  }
  if (/^mailto:/i.test(url)) {
    mailCount += 1;
    if (!/^mailto:[^@\s?]+@[^@\s?]+\.[^@\s?]+/i.test(url)) broken.push({ where: ref.where, url, why: "malformed address" });
    continue;
  }
  if (url.startsWith("//")) url = `https:${url}`;
  if (/^https?:\/\//i.test(url) && !url.toLowerCase().startsWith(SITE_URL.toLowerCase())) {
    if (!external.has(url)) external.set(url, []);
    external.get(url).push(ref.where);
    continue;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !/^https?:/i.test(url)) {
    warnings.push({ where: ref.where, url, why: "unknown scheme, not checked" });
    continue;
  }
  // Internal: a relative path, a root-relative path or an absolute URL of the site itself.
  const baseUrl = LOCAL + ref.base;
  const target = /^https?:/i.test(url)
    ? new URL(LOCAL + url.slice(SITE_URL.length))
    : url.startsWith("/")
      ? new URL(url, "http://site.invalid/")
      : new URL(url, baseUrl);
  if (!target.pathname.startsWith("/__site__/")) {
    broken.push({ where: ref.where, url: ref.url, why: "points outside the site folder (GitHub Pages serves it under /MyWebPage/)" });
    continue;
  }
  let pathPart;
  try {
    pathPart = decodeURIComponent(target.pathname.slice("/__site__/".length));
  } catch {
    broken.push({ where: ref.where, url: ref.url, why: "invalid percent-encoding" });
    continue;
  }
  const fragment = target.hash ? decodeURIComponent(target.hash.slice(1)) : "";
  checkInternal(pathPart, fragment, ref.base, ref.where, ref.url);
}

/* ---------- external requests (only with --external) ---------- */

async function request(url) {
  const headers = { "user-agent": "Mozilla/5.0 (compatible; MyWebPage link check)" };
  // GET, not HEAD: the NiceGUI games answer HEAD with 405. Only the headers are read.
  const get = async (target) => {
    const res = await fetch(target, { headers, redirect: "follow", signal: AbortSignal.timeout(TIMEOUT) });
    await res.body?.cancel();
    return res.status;
  };
  // A Cloud Run game scaled to zero can miss the first timeout while it starts; the first
  // request wakes it, so one retry tells a cold start from a dead link.
  const patient = async (target) => {
    try {
      return { status: await get(target), slow: false };
    } catch (error) {
      if (error.name !== "TimeoutError") throw error;
      return { status: await get(target), slow: true };
    }
  };
  const video = url.match(/^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([\w-]{11})/i);
  const target = video
    ? `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${video[1]}`)}`
    : url;
  const { status, slow } = await patient(target);
  let note = "";
  if (video && (status === 401 || status === 403)) note = "video is private or refuses embedding";
  else if (slow && status < 400) note = `answered only on the second try (cold start?)`;
  return { status, note };
}

async function checkExternal() {
  const queue = [...external.keys()];
  const workers = Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      const where = external.get(url)[0];
      try {
        const { status, note } = await request(url);
        if (WARN_STATUS.has(status)) warnings.push({ where, url, why: `HTTP ${status}: ${WARN_STATUS.get(status)}` });
        else if (note) warnings.push({ where, url, why: `HTTP ${status}: ${note}` });
        else if (status >= 400) broken.push({ where, url, why: `HTTP ${status}` });
        else if (VERBOSE) console.log(`  ok  ${status}  ${url}`);
      } catch (error) {
        const why = error.name === "TimeoutError" ? `no answer within ${TIMEOUT} ms, twice` : error.cause?.code || error.message;
        broken.push({ where, url, why });
      }
    }
  });
  await Promise.all(workers);
}

if (EXTERNAL) await checkExternal();

/* ---------- report ---------- */

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
console.log(
  `Link check: ${plural(pages.length, "page")} (${pages.join(", ")}), ${plural(styles.length, "stylesheet")}` +
    `${siteLinks ? `, ${CONTENT} data` : ""}${exact ? "" : " (no git: every file on disk counts as published)"}`,
);
console.log(
  `  ${plural(refs.length, "reference")}: ${internalCount} internal, ${external.size} unique external, ` +
    `${mailCount} mailto, ${skippedCount} skipped (data:, #, ...), ${hidden.size} hidden (empty SITE.links)`,
);
if (hidden.size) console.log(`  hidden: ${[...hidden].sort().join(", ")}`);
if (VERBOSE && !EXTERNAL) for (const url of [...external.keys()].sort()) console.log(`  external  ${url}`);
if (!EXTERNAL) console.log("  external links not requested (pass --external)");
for (const w of warnings) console.log(`WARN   ${w.where}  ${w.url}  - ${w.why}`);
for (const b of broken) console.log(`BROKEN ${b.where}  ${b.url}  - ${b.why}`);
console.log(broken.length ? `${plural(broken.length, "broken link")}` : "No broken links.");
process.exit(broken.length ? 1 : 0);
