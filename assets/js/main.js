/* =====================================================================
   main.js - language switch, background picker, rendering of data-driven
   sections, hero scene animation, gallery lightbox, lazy YouTube embeds.
   Depends on content.js (SITE, T, DATA).
   ===================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE, T = window.T, DATA = window.DATA;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let lang = "en";
  const tr = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] != null ? v[lang] : (v.en || "")) : (v == null ? "" : v);
  const resolveUrl = (u) => (u && u.indexOf("links.") === 0) ? (SITE.links[u.slice(6)] || "") : (u || "");
  const isExternal = (u) => /^https?:\/\//.test(u);
  const linkAttrs = (u) => isExternal(u) ? ' target="_blank" rel="noopener"' : "";

  /* ---------------- language ---------------- */
  function detectLang() {
    try { const s = localStorage.getItem("lang"); if (s === "en" || s === "cs") return s; } catch (e) {}
    const n = (navigator.language || "en").toLowerCase();
    return (n.indexOf("cs") === 0 || n.indexOf("sk") === 0) ? "cs" : "en";
  }

  function applyI18n() {
    const dict = T[lang];
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    const md = $('meta[name="description"]'); if (md) md.setAttribute("content", dict["meta.description"]);
    $$("[data-i18n]").forEach((el) => { const k = el.getAttribute("data-i18n"); if (dict[k] != null) el.textContent = dict[k]; });
    $$("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
        const i = pair.indexOf(":"); const attr = pair.slice(0, i).trim(); const key = pair.slice(i + 1).trim();
        if (dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
    renderAll();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }
  window.getLang = () => lang;

  /* ---------------- backgrounds ----------------
     Palettes live in style.css (:root[data-bg]); here only the hero scene and
     its colours. The inline script in index.html applies the saved choice. */
  const BGS = {
    meadow: { scene: "meadow", c: { sun: "255,204,77", grass: ["#5aa83f", "#4a9636", "#72bd4e", "#3d8431", "#86c95c"], flowers: ["#ffffff", "#ffd84d", "#ff9ec7", "#c3a6ff"], core: "#f4a524", butterflies: ["#ff9f43", "#5aa9ff", "#ff7eb6"], bug: "#3b2f2a", seedLine: "rgba(80,110,60,0.45)" } },
    forest: { scene: "forest", c: { moon: "226,234,200", grass: ["#1c3423", "#22402a", "#2a4c31", "#18301f"], fly: "255,214,110" } },
    sea:    { scene: "sea", c: { sun: "255,214,120", waves: ["rgba(120,196,196,0.40)", "rgba(62,158,166,0.50)", "rgba(24,122,132,0.65)"], gull: "rgba(40,70,80,0.75)" } },
    space:  { scene: "orbits", c: { star: "#f1c55c", body: "#8fb4ff", trail: "rgba(143,180,255,0.5)" } },
    nebula: { scene: "orbits", stars: true, c: { star: "#7fe3f0", body: "#d4a6ff", trail: "rgba(212,166,255,0.45)", twinkle: "236,230,255" } },
    paper:  { scene: "orbits", c: { star: "#8a6208", body: "#2b5cc7", trail: "rgba(43,92,199,0.45)" } },
  };
  const currentBg = () => { const b = document.documentElement.getAttribute("data-bg"); return BGS[b] ? b : "meadow"; };

  function setBg(id, save) {
    if (!BGS[id]) id = "meadow";
    document.documentElement.setAttribute("data-bg", id);
    const meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue("--bg").trim());
    $$("#bg-menu [data-bg]").forEach((b) => b.setAttribute("aria-checked", String(b.getAttribute("data-bg") === id)));
    const hint = $("#scene-hint"), key = "scene." + BGS[id].scene;
    hint.setAttribute("data-i18n", key); hint.textContent = T[lang][key]; // applyI18n keeps it translated
    if (save) { try { localStorage.setItem("bg", id); } catch (e) {} }
    document.dispatchEvent(new CustomEvent("bgchange", { detail: { bg: id } }));
  }

  /* ---------------- renderers ---------------- */
  function renderLinks() {
    $("#cv-link").setAttribute("href", SITE.cv);
    $("#contact-cv").setAttribute("href", SITE.cv);
    $("#youtube-link").setAttribute("href", SITE.youtube);
    $("#contact-youtube").setAttribute("href", SITE.youtube);
    $("#hero-email").setAttribute("href", "mailto:" + SITE.email); $("#hero-email").textContent = SITE.email;
    $("#contact-email").setAttribute("href", "mailto:" + SITE.email); $("#contact-email-v").innerHTML = esc(SITE.email).replace("@", "@<wbr>");
    $("#hero-location").textContent = tr(SITE.location);
    $("#contact-location").textContent = tr(SITE.location);
    ["#patreon-link", "#contact-patreon"].forEach((id) => {
      const el = $(id); if (!el) return;
      if (SITE.patreon) { el.classList.remove("hidden"); el.setAttribute("href", SITE.patreon); }
      else el.classList.add("hidden");
    });
    const li = $("#contact-linkedin");
    if (SITE.linkedin) { li.classList.remove("hidden"); li.setAttribute("href", SITE.linkedin); $("#contact-linkedin-v").textContent = SITE.linkedin.replace(/^https?:\/\/(www\.)?/, ""); }
    else li.classList.add("hidden");
    $("#year").textContent = String(new Date().getFullYear());
  }

  function renderSkills() {
    $("#skill-groups").innerHTML = DATA.skills.map((g) =>
      '<div class="skill-group"><h3>' + esc(tr(g.title)) + '</h3><div class="chips">' +
      g.items.map((i) => '<span class="chip">' + esc(i) + "</span>").join("") + "</div></div>"
    ).join("");
  }

  function renderExperience() {
    const dict = T[lang];
    $("#timeline").innerHTML = DATA.experience.map((j) =>
      '<article class="job' + (j.current ? " current" : "") + '">' +
        '<div class="job-head"><h3>' + esc(tr(j.role)) + '</h3><span class="company">' + esc(tr(j.company)) + '</span><span class="period">' + esc(tr(j.period)) + "</span></div>" +
        (j.note ? '<div class="note">' + esc(tr(j.note)) + "</div>" : "") +
        "<ul>" + (j.bullets[lang] || j.bullets.en).map((b) => "<li>" + esc(b) + "</li>").join("") + "</ul>" +
        (j.stack ? '<div class="stack"><b>' + esc(dict["experience.stack"]) + "</b>" + esc(j.stack) + "</div>" : "") +
      "</article>"
    ).join("");
  }

  function linkButtons(links, small) {
    return links.map((l) => {
      const url = resolveUrl(l.url);
      if (!url) return l.soon ? '<span class="badge soon">' + esc(T[lang]["gravity.soon"]) + "</span>" : "";
      return '<a class="btn' + (l.primary ? " primary" : "") + (small ? " small" : "") + '" href="' + esc(url) + '"' + linkAttrs(url) + ">" + esc(tr(l.label)) + "</a>";
    }).join("");
  }

  function renderGravityApps() {
    $("#app-grid").innerHTML = DATA.gravityApps.map((a) =>
      '<article class="app-card">' +
        '<img class="thumb" src="' + esc(a.image) + '" alt="' + esc(a.name) + '" loading="lazy">' +
        '<div class="body"><div class="title"><img src="' + esc(a.icon) + '" alt=""><div><h3>' + esc(a.name) + "</h3><small>" + esc(tr(a.platform)) + "</small></div></div>" +
        "<p>" + esc(tr(a.desc)) + "</p>" +
        '<div class="links">' + linkButtons(a.links, true) + "</div></div>" +
      "</article>"
    ).join("");
  }

  function renderGallery() {
    $("#gallery").innerHTML = DATA.gallery.map((g, i) =>
      '<figure><img src="' + esc(g.src) + '" alt="' + esc(tr(g.caption)) + '" loading="lazy" data-index="' + i + '"><figcaption>' + esc(tr(g.caption)) + "</figcaption></figure>"
    ).join("");
  }

  function renderVideos() {
    const block = $("#videos-block");
    if (!SITE.videos || !SITE.videos.length) { block.classList.add("hidden"); return; }
    block.classList.remove("hidden");
    $("#videos").innerHTML = SITE.videos.map((v) =>
      '<div class="yt" data-id="' + esc(v.id) + '" role="button" tabindex="0" style="background-image:url(https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg)" aria-label="' + esc(tr(v.title)) + '">' +
        '<div class="play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span></div>' +
        '<div class="cap">' + esc(tr(v.title)) + "</div>" +
      "</div>"
    ).join("");
  }

  function renderProjects() {
    $("#project-grid").innerHTML = DATA.projects.map((p) =>
      '<article class="project">' +
        (p.image ? '<img class="cover" src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' : "") +
        '<div class="body"><h3>' + esc(p.name) + "<small>" + esc(tr(p.sub)) + "</small></h3>" +
        '<div class="chips">' + p.tags.map((t) => '<span class="chip soft">' + esc(t) + "</span>").join("") + "</div>" +
        "<p>" + esc(tr(p.desc)) + "</p>" +
        '<div class="links">' + linkButtons(p.links, true) + "</div></div>" +
      "</article>"
    ).join("");
  }

  function renderRag() {
    $("#rag-grid").innerHTML = DATA.rag.map((r) =>
      '<article class="rag-card"><h3>' + esc(tr(r.title)) + "</h3><p>" + esc(tr(r.body)) + "</p>" +
      (r.link ? '<a class="more" href="' + esc(r.link) + '">' + (lang === "cs" ? "Vyzkoušet ↓" : "Try it ↓") + "</a>" : "") +
      "</article>"
    ).join("");
  }

  function renderEducation() {
    const dict = T[lang];
    $("#degrees").innerHTML = DATA.degrees.map((d) =>
      '<div class="degree"><span class="year">' + esc(d.year) + '</span><div class="school">' + esc(tr(d.school)) + '</div><div class="faculty">' + esc(tr(d.faculty)) + '</div><div class="degree-name">' + esc(tr(d.degree)) + "</div>" +
      (d.thesis ? '<div class="thesis">' + esc(dict["education.thesis"]) + ": " + esc(tr(d.thesis)) + "</div>" : "") + "</div>"
    ).join("");
    $("#certs").innerHTML = DATA.certs.map((c) => '<div class="cert"><b>' + esc(c.name) + "</b><span>" + esc(tr(c.detail)) + "</span></div>").join("");
    $("#langs").innerHTML = DATA.languages.map((l) => "<div><b>" + esc(tr(l.name)) + "</b><span>" + esc(tr(l.level)) + "</span></div>").join("");
  }

  function fmtDate(iso) {
    const p = iso.split("-").map(Number);
    if (lang === "cs") return p[2] + ". " + p[1] + ". " + p[0];
    return p[2] + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][p[1] - 1] + " " + p[0];
  }

  function renderChangelog() {
    $("#version-btn").textContent = "v" + DATA.changelog[0].version;
    $("#changelog-list").innerHTML = DATA.changelog.map((c) =>
      '<section class="release"><div class="release-head"><b>v' + esc(c.version) + '</b><time datetime="' + esc(c.date) + '">' + esc(fmtDate(c.date)) + "</time></div>" +
      "<ul>" + (c.items[lang] || c.items.en).map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul></section>"
    ).join("");
  }

  function renderAll() {
    renderLinks(); renderSkills(); renderExperience(); renderGravityApps(); renderGallery(); renderVideos(); renderProjects(); renderRag(); renderEducation(); renderChangelog();
  }

  /* ---------------- interactions ---------------- */
  function wireNav() {
    const btn = $("#menu-btn"), links = $("#nav-links");
    btn.addEventListener("click", () => { const open = links.classList.toggle("open"); btn.setAttribute("aria-expanded", String(open)); });
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
    $("#lang-toggle").addEventListener("click", () => { lang = lang === "en" ? "cs" : "en"; try { localStorage.setItem("lang", lang); } catch (e) {} applyI18n(); });
  }

  function wireBgMenu() {
    const btn = $("#bg-btn"), menu = $("#bg-menu");
    const items = $$("[data-bg]", menu);
    const show = (open) => { menu.hidden = !open; btn.setAttribute("aria-expanded", String(open)); };
    btn.addEventListener("click", () => {
      show(menu.hidden);
      if (!menu.hidden) (menu.querySelector('[aria-checked="true"]') || items[0]).focus();
    });
    menu.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-bg]"); if (!b || !menu.contains(b)) return; // <html> carries data-bg too
      setBg(b.getAttribute("data-bg"), true); show(false); btn.focus();
    });
    menu.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      const i = items.indexOf(document.activeElement);
      items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus();
    });
    document.addEventListener("click", (e) => { if (!menu.hidden && !e.target.closest(".bg-picker")) show(false); });
    // Tabbing away closes the menu; a click on the menu's own padding or title (relatedTarget null) does not
    $(".bg-picker").addEventListener("focusout", (e) => { if (!menu.hidden && e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) show(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) { show(false); btn.focus(); } });
  }

  function wireLightbox() {
    const dlg = $("#lightbox"), img = $("#lightbox-img"), cap = $("#lightbox-cap");
    $("#gallery").addEventListener("click", (e) => {
      const t = e.target; if (t.tagName !== "IMG") return;
      const g = DATA.gallery[Number(t.getAttribute("data-index"))]; if (!g) return;
      img.src = g.src; img.alt = tr(g.caption); cap.textContent = tr(g.caption);
      if (typeof dlg.showModal === "function") dlg.showModal(); else window.open(g.src, "_blank");
    });
    dlg.addEventListener("click", () => dlg.close());
  }

  function wireChangelog() {
    const dlg = $("#changelog");
    $("#version-btn").addEventListener("click", () => { if (typeof dlg.showModal === "function") dlg.showModal(); });
    $("#changelog-close").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // click on the backdrop
  }

  function wireVideos() {
    const play = (el) => {
      const id = el.getAttribute("data-id"); if (!id || el.querySelector("iframe")) return;
      el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    };
    $("#videos").addEventListener("click", (e) => { const el = e.target.closest(".yt"); if (el) play(el); });
    $("#videos").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { const el = e.target.closest(".yt"); if (el) { e.preventDefault(); play(el); } } });
  }

  /* ---------------- hero scene: one canvas, a small sketch per background ---------------- */
  function startScene() {
    const canvas = $("#scene"); if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches; // one static frame, no animation
    const TAU = Math.PI * 2;
    const rnd = (a, b) => a + Math.random() * (b - a);
    const pick = (a) => a[Math.floor(Math.random() * a.length)];
    let W = 0, H = 0, t = 0, last = 0, raf = 0, running = true, cfg = BGS.meadow, S = {};
    const P = { x: 0, y: 0, on: false }; // pointer over the hero, in canvas coordinates

    function glow(x, y, r, rgb, alpha) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, "rgba(" + rgb + "," + alpha + ")"); g.addColorStop(0.18, "rgba(" + rgb + "," + alpha + ")"); g.addColorStop(1, "rgba(" + rgb + ",0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
    }
    // Where the sun, moon or star sits. In the one-column layout (<860px) text fills the hero,
    // so it moves to the top-right corner and shrinks to keep the tagline readable.
    const sky = () => W < 860 ? { x: W - 36, y: 26, k: 0.55 } : { x: W * 0.82, y: H * 0.2, k: 1 };

    /* --- orbits: a tiny Newtonian sketch (space, nebula, paper) --- */
    function seedOrbits() {
      const cx = sky().x, cy = sky().y, M = 2600;
      S.bodies = [{ x: cx, y: cy, m: M, r: 7 }];
      const n = W < 700 ? 4 : 6;
      for (let i = 0; i < n; i++) {
        const rad = 60 + i * 42 + rnd(0, 18), ang = rnd(0, TAU), v = Math.sqrt(M / rad) * rnd(0.92, 1.08);
        S.bodies.push({ x: cx + Math.cos(ang) * rad, y: cy + Math.sin(ang) * rad, vx: -Math.sin(ang) * v, vy: Math.cos(ang) * v, r: rnd(1.6, 3), trail: [] });
      }
      // one comet on an eccentric path
      const ang = rnd(0, TAU), v = Math.sqrt(M / 330) * 0.55;
      S.bodies.push({ x: cx + Math.cos(ang) * 330, y: cy + Math.sin(ang) * 330, vx: -Math.sin(ang) * v, vy: Math.cos(ang) * v, r: 1.8, comet: true, trail: [] });
      S.stars = cfg.stars ? Array.from({ length: Math.round(W * H / 7000) }, () => ({ x: rnd(0, W), y: rnd(0, H), r: rnd(0.4, 1.3), ph: rnd(0, TAU), sp: rnd(0.6, 2) })) : [];
      S.flashes = [];
    }
    function stepOrbits(dt) {
      for (let i = S.flashes.length - 1; i >= 0; i--) { const f = S.flashes[i]; f.r += 60 * dt; f.a -= 1.2 * dt; if (f.a <= 0) S.flashes.splice(i, 1); }
      const star = S.bodies[0], h = dt * 0.9 / 4 * 10;
      for (let k = 0; k < 4; k++) {
        for (let i = 1; i < S.bodies.length; i++) {
          const b = S.bodies[i];
          const dx = star.x - b.x, dy = star.y - b.y, d2 = dx * dx + dy * dy + 40, d = Math.sqrt(d2), a = star.m / d2;
          b.vx += a * dx / d * h; b.vy += a * dy / d * h;
          b.x += b.vx * h; b.y += b.vy * h;
          b.trail.push(b.x, b.y); if (b.trail.length > (b.comet ? 240 : 140)) b.trail.splice(0, 2);
          if (d > Math.max(W, H) * 1.5) { // lost to space: respawn
            const rad = rnd(80, 240), ang = rnd(0, TAU), v = Math.sqrt(star.m / rad);
            b.x = star.x + Math.cos(ang) * rad; b.y = star.y + Math.sin(ang) * rad; b.vx = -Math.sin(ang) * v; b.vy = Math.cos(ang) * v; b.trail.length = 0;
          }
        }
      }
    }
    function drawOrbits() {
      const c = cfg.c;
      for (const s of S.stars) {
        ctx.fillStyle = "rgba(" + c.twinkle + "," + (0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph))).toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, TAU); ctx.fill();
      }
      for (let i = 1; i < S.bodies.length; i++) {
        const b = S.bodies[i], tr = b.trail;
        if (tr.length > 4) {
          ctx.beginPath(); ctx.moveTo(tr[0], tr[1]);
          for (let k = 2; k < tr.length; k += 2) ctx.lineTo(tr[k], tr[k + 1]);
          ctx.strokeStyle = c.trail; ctx.lineWidth = 1; ctx.stroke();
        }
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, TAU); ctx.fillStyle = b.added ? c.star : c.body; ctx.fill();
      }
      const s = S.bodies[0];
      const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 60);
      grd.addColorStop(0, c.star); grd.addColorStop(0.15, c.star); grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 0.35; ctx.beginPath(); ctx.arc(s.x, s.y, 60, 0, TAU); ctx.fillStyle = grd; ctx.fill(); ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, TAU); ctx.fillStyle = c.star; ctx.fill();
      ctx.strokeStyle = c.star; ctx.lineWidth = 1.5;
      for (const f of S.flashes) { ctx.globalAlpha = f.a; ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, TAU); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }
    function clickOrbits(x, y) { // launch a planet on a roughly circular orbit, like in Gravity
      const star = S.bodies[0], dx = x - star.x, dy = y - star.y, rad = Math.hypot(dx, dy); if (rad < 20) return;
      const v = Math.sqrt(star.m / rad) * rnd(0.85, 1.1);
      S.bodies.push({ x: x, y: y, vx: -dy / rad * v, vy: dx / rad * v, r: rnd(2.2, 3.6), added: true, trail: [] });
      S.flashes.push({ x: x, y: y, r: 3, a: 0.9 });
      if (S.bodies.filter((b) => b.added).length > 15) S.bodies.splice(S.bodies.findIndex((b) => b.added), 1);
    }

    /* --- grass swaying in the wind and leaning away from the pointer (meadow, forest) --- */
    function seedGrass(colors, flowers, hMax) {
      S.grass = Array.from({ length: Math.round(W / 4.5) }, () => ({
        x: rnd(-8, W + 8), h: rnd(0.3, 1) * hMax, w: rnd(3, 6.5), ph: rnd(0, TAU), o: 0, c: pick(colors),
        f: flowers && Math.random() < 0.07 ? pick(flowers) : null,
      })).sort((a, b) => b.h - a.h); // tall blades behind, short ones in front
    }
    function stepGrass(dt) {
      const k = Math.min(1, dt * 6);
      for (const g of S.grass) {
        let lean = 0;
        if (P.on) {
          const dx = g.x - P.x;
          if (Math.abs(dx) < 90 && P.y > H - g.h - 60) lean = Math.sign(dx) * (1 - Math.abs(dx) / 90) * g.h * 0.55;
        }
        g.o += (lean - g.o) * k;
        if (g.hT && g.h < g.hT) g.h = Math.min(g.hT, g.h + dt * 70); // a planted flower grows
      }
    }
    function drawGrass() {
      for (const g of S.grass) {
        const bend = (Math.sin(t * 1.4 + g.x * 0.013 + g.ph * 0.3) * 0.5 + Math.sin(t * 0.5 + g.x * 0.004) * 0.8 + 0.5) * g.h * 0.12 + g.o;
        const tx = g.x + bend, ty = H - g.h, my = H - g.h * 0.55;
        ctx.beginPath(); ctx.moveTo(g.x - g.w / 2, H);
        ctx.quadraticCurveTo(g.x - g.w / 4 + bend * 0.35, my, tx, ty);
        ctx.quadraticCurveTo(g.x + g.w / 4 + bend * 0.35, my, g.x + g.w / 2, H);
        ctx.fillStyle = g.c; ctx.fill();
        if (g.f) {
          ctx.fillStyle = g.f;
          for (let k = 0; k < 5; k++) { const a = k * TAU / 5 + g.ph; ctx.beginPath(); ctx.arc(tx + Math.cos(a) * 3.2, ty + Math.sin(a) * 3.2, 2.6, 0, TAU); ctx.fill(); }
          ctx.fillStyle = cfg.c.core; ctx.beginPath(); ctx.arc(tx, ty, 2, 0, TAU); ctx.fill();
        }
      }
    }

    /* --- meadow: sun, dandelion seeds, butterflies, grass with flowers --- */
    const newButterfly = (x) => ({ x: x, y0: rnd(H * 0.2, H * 0.7), v: rnd(22, 38), ph: rnd(0, TAU), c: pick(cfg.c.butterflies) });
    function seedMeadow() {
      seedGrass(cfg.c.grass, cfg.c.flowers, W < 700 ? 60 : 100);
      S.flyers = Array.from({ length: W < 700 ? 2 : 3 }, () => newButterfly(rnd(0, W)));
      S.seeds = Array.from({ length: W < 700 ? 8 : 16 }, () => ({ x: rnd(0, W), y: rnd(H * 0.2, H), ph: rnd(0, TAU), vx: 0, vy: 0 }));
    }
    function stepMeadow(dt) {
      stepGrass(dt);
      for (const b of S.flyers) { b.x += (b.v + Math.sin(t * 0.7 + b.ph) * 14) * dt; if (b.x > W + 30) Object.assign(b, newButterfly(-30)); }
      const drag = 1 - Math.min(1, dt * 1.5);
      for (let i = S.seeds.length - 1; i >= 0; i--) {
        const s = S.seeds[i];
        s.x += (14 + Math.sin(t * 0.4) * 8 + s.vx) * dt; s.y += (Math.sin(t * 1.1 + s.ph) * 10 - 4 + s.vy) * dt;
        s.vx *= drag; s.vy *= drag;
        if (s.x > W + 10 || s.x < -20 || s.y < -10 || s.y > H + 10) {
          if (s.tmp) S.seeds.splice(i, 1); else { s.x = -10; s.y = rnd(H * 0.3, H); }
        }
      }
    }
    function clickMeadow(x, y) { // blow a puff of seeds and plant a flower below the click
      for (let i = 0; i < 10; i++) { const a = rnd(0, TAU), v = rnd(30, 90); S.seeds.push({ x: x, y: y, ph: rnd(0, TAU), vx: Math.cos(a) * v, vy: Math.sin(a) * v, tmp: true }); }
      const hT = rnd(0.5, 0.9) * (W < 700 ? 60 : 100);
      S.grass.push({ x: x, h: still ? hT : 0, hT: hT, w: rnd(3.5, 5), ph: rnd(0, TAU), o: 0, c: pick(cfg.c.grass), f: pick(cfg.c.flowers), planted: true });
      if (S.grass.filter((g) => g.planted).length > 40) S.grass.splice(S.grass.findIndex((g) => g.planted), 1);
    }
    function drawMeadow() {
      const c = cfg.c;
      const s0 = sky(); glow(s0.x, s0.y, 110 * s0.k, c.sun, 0.9);
      ctx.lineWidth = 0.8; ctx.strokeStyle = c.seedLine;
      for (const s of S.seeds) {
        ctx.beginPath(); ctx.moveTo(s.x, s.y + 2); ctx.lineTo(s.x - 1, s.y + 7); ctx.stroke();
        ctx.beginPath(); ctx.arc(s.x, s.y, 2, 0, TAU); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
      }
      for (const b of S.flyers) {
        const y = b.y0 + Math.sin(t * 1.6 + b.ph) * 18, f = 0.25 + 0.75 * Math.abs(Math.sin(t * 11 + b.ph));
        ctx.fillStyle = b.c;
        for (const d of [-1, 1]) {
          ctx.beginPath(); ctx.ellipse(b.x + d * 4.5 * f, y - 2.5, 5.5 * f, 6.5, d * 0.5, 0, TAU); ctx.fill();
          ctx.beginPath(); ctx.ellipse(b.x + d * 3.5 * f, y + 4, 3.5 * f, 4, -d * 0.5, 0, TAU); ctx.fill();
        }
        ctx.fillStyle = c.bug; ctx.beginPath(); ctx.ellipse(b.x, y + 1, 1.3, 6, 0, 0, TAU); ctx.fill();
      }
      drawGrass();
    }

    /* --- forest at dusk: moon, dark grass, fireflies --- */
    function seedForest() {
      seedGrass(cfg.c.grass, null, W < 700 ? 55 : 90);
      S.flies = Array.from({ length: W < 700 ? 14 : 28 }, () => ({ x: rnd(0, W), y: rnd(H * 0.15, H), vx: rnd(-12, 12), vy: rnd(-8, 8), ph: rnd(0, TAU), sp: rnd(0.8, 2) }));
    }
    function stepForest(dt) {
      stepGrass(dt);
      const vMax = P.on ? 26 : 16;
      for (const f of S.flies) {
        f.vx += rnd(-30, 30) * dt; f.vy += rnd(-30, 30) * dt;
        if (P.on) { // drift towards the pointer
          const dx = P.x - f.x, dy = P.y - f.y, d = Math.hypot(dx, dy) + 1;
          if (d < 280) { f.vx += dx / d * 45 * dt; f.vy += dy / d * 45 * dt; }
        }
        const v = Math.hypot(f.vx, f.vy); if (v > vMax) { f.vx *= vMax / v; f.vy *= vMax / v; }
        f.x += f.vx * dt; f.y += f.vy * dt;
        if (f.x < -10) f.x = W + 10; else if (f.x > W + 10) f.x = -10;
        if (f.y < H * 0.1) f.vy = Math.abs(f.vy); else if (f.y > H - 8) f.vy = -Math.abs(f.vy);
      }
    }
    function drawForest() {
      const c = cfg.c;
      const s0 = sky(); glow(s0.x, s0.y, 90 * s0.k, c.moon, 0.5);
      drawGrass();
      for (const f of S.flies) {
        const a = Math.pow(Math.max(0, Math.sin(t * f.sp + f.ph)), 2); if (a < 0.02) continue;
        glow(f.x, f.y, 12, c.fly, a * 0.45);
        ctx.fillStyle = "rgba(" + c.fly + "," + a.toFixed(3) + ")"; ctx.beginPath(); ctx.arc(f.x, f.y, 1.5, 0, TAU); ctx.fill();
      }
    }
    function clickForest(x, y) { // light up the fireflies nearby and release a few more
      const light = (f) => { f.ph = Math.PI / 2 - t * f.sp; };
      for (const f of S.flies) if (Math.hypot(f.x - x, f.y - y) < 160) light(f);
      for (let i = 0; i < 4; i++) { const f = { x: x, y: y, vx: rnd(-25, 25), vy: rnd(-25, 25), sp: rnd(0.8, 2) }; light(f); S.flies.push(f); }
      if (S.flies.length > 70) S.flies.splice(0, S.flies.length - 70);
    }

    /* --- sea: sun, gulls, three layers of waves --- */
    const newGull = (x) => ({ x: x, y0: rnd(H * 0.15, H * 0.5), v: rnd(14, 24), ph: rnd(0, TAU), s: rnd(0.8, 1.3) });
    function seedSea() {
      const m = W < 700 ? 0.7 : 1;
      S.waves = [{ h: 70 * m, a: 7, l: 340, s: 0.35 }, { h: 48 * m, a: 8, l: 260, s: -0.5 }, { h: 26 * m, a: 6, l: 200, s: 0.7 }];
      S.gulls = Array.from({ length: W < 700 ? 2 : 3 }, () => newGull(rnd(0, W)));
      S.ripples = [];
    }
    function stepSea(dt) {
      for (let i = S.gulls.length - 1; i >= 0; i--) {
        const g = S.gulls[i]; g.x += g.v * dt;
        if (g.x > W + 30) { if (g.tmp) S.gulls.splice(i, 1); else Object.assign(g, newGull(-30)); }
      }
      for (let i = S.ripples.length - 1; i >= 0; i--) {
        const r = S.ripples[i]; r.r += 45 * dt; r.a -= 0.55 * dt;
        if (r.a <= 0) S.ripples.splice(i, 1);
      }
    }
    function clickSea(x, y) { // ripples on the water, a new gull in the sky
      if (y > H - S.waves[0].h - 10) { S.ripples.push({ x: x, y: y, r: 2, a: 0.9 }); return; }
      S.gulls.push(Object.assign(newGull(x), { y0: y, tmp: true }));
      if (S.gulls.length > 14) S.gulls.splice(S.gulls.findIndex((g) => g.tmp), 1);
    }
    function drawSea() {
      const c = cfg.c;
      const s0 = sky(); glow(s0.x, s0.y, 110 * s0.k, c.sun, 0.75);
      ctx.strokeStyle = c.gull; ctx.lineWidth = 1.6;
      for (const g of S.gulls) {
        const y = g.y0 + Math.sin(t * 0.6 + g.ph) * 10, f = Math.sin(t * 4 + g.ph) * 3, s = g.s;
        ctx.beginPath(); ctx.moveTo(g.x - 9 * s, y - 2 * s + f);
        ctx.quadraticCurveTo(g.x - 4 * s, y - 5 * s, g.x, y);
        ctx.quadraticCurveTo(g.x + 4 * s, y - 5 * s, g.x + 9 * s, y - 2 * s + f); ctx.stroke();
      }
      S.waves.forEach((w, i) => {
        ctx.beginPath(); ctx.moveTo(0, H);
        for (let x = 0; x <= W + 10; x += 10) ctx.lineTo(x, H - w.h + Math.sin(x / w.l * TAU + t * w.s) * w.a + Math.sin(x / (w.l * 0.43) * TAU - t * w.s * 1.3) * w.a * 0.35);
        ctx.lineTo(W + 10, H); ctx.closePath(); ctx.fillStyle = c.waves[i]; ctx.fill();
      });
      ctx.lineWidth = 1.5;
      for (const r of S.ripples) {
        ctx.strokeStyle = "rgba(255,255,255," + r.a.toFixed(3) + ")";
        for (const k of [1, 0.6]) { ctx.beginPath(); ctx.ellipse(r.x, r.y, r.r * k, r.r * k * 0.3, 0, 0, TAU); ctx.stroke(); }
      }
    }

    // [seed, step, draw, click] per scene
    const SCENES = {
      orbits: [seedOrbits, stepOrbits, drawOrbits, clickOrbits],
      meadow: [seedMeadow, stepMeadow, drawMeadow, clickMeadow],
      forest: [seedForest, stepForest, drawForest, clickForest],
      sea: [seedSea, stepSea, drawSea, clickSea],
    };
    const render = () => { ctx.clearRect(0, 0, W, H); SCENES[cfg.scene][2](); };

    function setup() {
      cfg = BGS[currentBg()]; S = {};
      SCENES[cfg.scene][0]();
      if (still) render();
    }
    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight; if (w === W && h === H) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = w; H = h; canvas.width = Math.floor(W * dpr); canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setup();
    }
    function frame(ts) {
      if (!running) return;
      const dt = last ? Math.min(0.05, (ts - last) / 1000) : 0.016; last = ts; t += dt;
      SCENES[cfg.scene][1](dt); render();
      raf = requestAnimationFrame(frame);
    }

    const hero = canvas.parentElement;
    const toCanvas = (e) => { const r = canvas.getBoundingClientRect(); P.x = e.clientX - r.left; P.y = e.clientY - r.top; };
    hero.addEventListener("pointermove", (e) => { toCanvas(e); P.on = true; });
    hero.addEventListener("pointerleave", () => { P.on = false; });
    hero.addEventListener("click", (e) => { // not pointerdown: a scroll swipe on a phone must not plant anything
      if (e.target.closest("a, button, input, select")) return;
      toCanvas(e); SCENES[cfg.scene][3](P.x, P.y); if (still) render();
    });

    resize();
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas); else window.addEventListener("resize", resize);
    document.addEventListener("bgchange", setup);
    if (still) return;
    // Cancel before re-queuing: a page opened in a background tab already has a frame queued,
    // and a second loop would run every scene at double speed.
    document.addEventListener("visibilitychange", () => { running = !document.hidden; cancelAnimationFrame(raf); if (running) { last = 0; raf = requestAnimationFrame(frame); } });
    running = !document.hidden;
    if (running) raf = requestAnimationFrame(frame);
  }

  /* ---------------- boot ---------------- */
  lang = detectLang();
  setBg(currentBg(), false);
  wireNav(); wireBgMenu(); wireLightbox(); wireChangelog(); wireVideos();
  applyI18n();
  startScene();
})();
