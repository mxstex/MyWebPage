/* =====================================================================
   main.js - language switch, theme, rendering of data-driven sections,
   hero orbit animation, gallery lightbox, lazy YouTube embeds.
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

  /* ---------------- theme ---------------- */
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    const meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute("content", t === "light" ? "#f7f5ef" : "#0b1020");
    try { localStorage.setItem("theme", t); } catch (e) {}
    document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: t } }));
  }

  /* ---------------- renderers ---------------- */
  function renderLinks() {
    $("#cv-link").setAttribute("href", SITE.cv);
    $("#contact-cv").setAttribute("href", SITE.cv);
    $("#github-link").setAttribute("href", SITE.github);
    $("#contact-github").setAttribute("href", SITE.github);
    $("#site-repo").setAttribute("href", SITE.siteRepo);
    $("#hero-email").setAttribute("href", "mailto:" + SITE.email); $("#hero-email").textContent = SITE.email;
    $("#contact-email").setAttribute("href", "mailto:" + SITE.email); $("#contact-email-v").innerHTML = esc(SITE.email).replace("@", "@<wbr>");
    $("#hero-location").textContent = tr(SITE.location);
    $("#contact-location").textContent = tr(SITE.location);
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
      const url = resolveUrl(l.url); if (!url) return "";
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
        '<img class="cover" src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' +
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

  function renderAll() {
    renderLinks(); renderSkills(); renderExperience(); renderGravityApps(); renderGallery(); renderVideos(); renderProjects(); renderRag(); renderEducation();
  }

  /* ---------------- interactions ---------------- */
  function wireNav() {
    const btn = $("#menu-btn"), links = $("#nav-links");
    btn.addEventListener("click", () => { const open = links.classList.toggle("open"); btn.setAttribute("aria-expanded", String(open)); });
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
    $("#lang-toggle").addEventListener("click", () => { lang = lang === "en" ? "cs" : "en"; try { localStorage.setItem("lang", lang); } catch (e) {} applyI18n(); });
    $("#theme-toggle").addEventListener("click", () => { setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light"); });
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

  function wireVideos() {
    const play = (el) => {
      const id = el.getAttribute("data-id"); if (!id || el.querySelector("iframe")) return;
      el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    };
    $("#videos").addEventListener("click", (e) => { const el = e.target.closest(".yt"); if (el) play(el); });
    $("#videos").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { const el = e.target.closest(".yt"); if (el) { e.preventDefault(); play(el); } } });
  }

  /* ---------------- hero orbits (tiny Newtonian sketch) ---------------- */
  function startOrbits() {
    const canvas = $("#orbits"); if (!canvas || !canvas.getContext) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { canvas.remove(); return; }
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, dpr = 1, raf = 0, running = true;
    const G = 1, bodies = [];
    let colors = { star: "#f1c55c", body: "#8fb4ff", trail: "rgba(143,180,255,0.35)" };

    function readColors() {
      const light = document.documentElement.getAttribute("data-theme") === "light";
      colors = light ? { star: "#a8780a", body: "#2b5cc7", trail: "rgba(43,92,199,0.45)" } : { star: "#f1c55c", body: "#8fb4ff", trail: "rgba(143,180,255,0.5)" };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.floor(W * dpr); canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      bodies.length = 0;
      const cx = W * 0.82, cy = H * 0.2, M = 2600;
      bodies.push({ x: cx, y: cy, vx: 0, vy: 0, m: M, r: 7, star: true, trail: [] });
      const n = W < 700 ? 4 : 6;
      for (let i = 0; i < n; i++) {
        const rad = 60 + i * 42 + Math.random() * 18, ang = Math.random() * Math.PI * 2;
        const v = Math.sqrt(G * M / rad) * (0.92 + Math.random() * 0.16);
        bodies.push({ x: cx + Math.cos(ang) * rad, y: cy + Math.sin(ang) * rad, vx: -Math.sin(ang) * v, vy: Math.cos(ang) * v, m: 1, r: 1.6 + Math.random() * 1.4, trail: [] });
      }
      // one comet on an eccentric path
      const rad = 330, ang = Math.random() * Math.PI * 2, v = Math.sqrt(G * M / rad) * 0.55;
      bodies.push({ x: cx + Math.cos(ang) * rad, y: cy + Math.sin(ang) * rad, vx: -Math.sin(ang) * v, vy: Math.cos(ang) * v, m: 1, r: 1.8, comet: true, trail: [] });
    }

    function step(dt) {
      const star = bodies[0];
      for (let i = 1; i < bodies.length; i++) {
        const b = bodies[i];
        const dx = star.x - b.x, dy = star.y - b.y, d2 = dx * dx + dy * dy + 40, d = Math.sqrt(d2);
        const a = G * star.m / d2;
        b.vx += a * dx / d * dt; b.vy += a * dy / d * dt;
        b.x += b.vx * dt; b.y += b.vy * dt;
        b.trail.push(b.x, b.y); if (b.trail.length > (b.comet ? 240 : 140)) b.trail.splice(0, 2);
        if (d > Math.max(W, H) * 1.5) { // lost to space: respawn
          const rad = 80 + Math.random() * 160, ang2 = Math.random() * Math.PI * 2, v = Math.sqrt(G * star.m / rad);
          b.x = star.x + Math.cos(ang2) * rad; b.y = star.y + Math.sin(ang2) * rad; b.vx = -Math.sin(ang2) * v; b.vy = Math.cos(ang2) * v; b.trail.length = 0;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 1; i < bodies.length; i++) {
        const b = bodies[i], t = b.trail;
        if (t.length > 4) {
          ctx.beginPath(); ctx.moveTo(t[0], t[1]);
          for (let k = 2; k < t.length; k += 2) ctx.lineTo(t[k], t[k + 1]);
          ctx.strokeStyle = colors.trail; ctx.lineWidth = 1; ctx.stroke();
        }
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill();
      }
      const s = bodies[0];
      const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 60);
      grd.addColorStop(0, colors.star); grd.addColorStop(0.15, colors.star); grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 0.35; ctx.beginPath(); ctx.arc(s.x, s.y, 60, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill(); ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fillStyle = colors.star; ctx.fill();
    }

    let last = 0;
    function frame(ts) {
      if (!running) return;
      const dt = Math.min(0.05, (ts - last) / 1000 || 0.016); last = ts;
      const sub = 4; for (let i = 0; i < sub; i++) step(dt * 0.9 / sub * 10);
      draw();
      raf = requestAnimationFrame(frame);
    }

    readColors(); resize();
    window.addEventListener("resize", resize);
    document.addEventListener("themechange", readColors);
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) { last = 0; raf = requestAnimationFrame(frame); } else cancelAnimationFrame(raf); });
    raf = requestAnimationFrame(frame);
  }

  /* ---------------- boot ---------------- */
  lang = detectLang();
  wireNav(); wireLightbox(); wireVideos();
  applyI18n();
  startOrbits();
})();
