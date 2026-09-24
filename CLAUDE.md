# CLAUDE.md - MyWebPage

Guidance for coding agents working on this repository. `ASTRA.md` holds the general working rules;
this file holds the repository-specific ones. Current state: `PROGRESS.md`.

## What this is

Static, bilingual (English / Czech) personal portfolio with a downloadable CV. Plain HTML, CSS and
JavaScript, no build step, no dependencies to install. Served by GitHub Pages from `main`, folder
`/ (root)`, at https://mxstex.github.io/MyWebPage/. All paths are relative.

**This repository is public and every push to `main` is published immediately.** `.nojekyll` is set,
so every committed file, Markdown included, is served as-is next to the site. Commit nothing you
would not publish.

## File map

| Path | Content |
| --- | --- |
| `index.html` | page skeleton; texts come from `data-i18n` keys, lists are rendered by `main.js` |
| `assets/js/content.js` | `SITE` (contact, live links, Gravity videos), `T.en` / `T.cs` (UI strings by key), `DATA` (skills, experience, Gravity apps, gallery, project cards, LLM notes, education, changelog, chat suggestions). Edit this first. |
| `assets/js/chat.js` | "Chat with my CV": WebLLM model ids and the public `FACTS` the in-browser model answers from |
| `assets/js/main.js` | rendering, language switch, backgrounds and hero animations (`BGS`), lightbox, changelog dialog |
| `assets/css/style.css` | look and feel; one palette per background |
| `assets/img/` | screenshots and covers, already downscaled |
| `cv/` | `Michal_Stepan_CV.html` (source) and `Michal_Stepan_CV.pdf` (published; re-export command in README) |
| `LINKEDIN_PROFILE.md` | LinkedIn draft that follows the CV |
| `docs/` | git-ignored on purpose (source documents stay local) |

## Rules

- Every published change gets a new entry at the top of `DATA.changelog` (version, date, EN + CS
  bullets). The header shows the version of the first entry. Repository-only docs such as this file
  do not need an entry.
- Every text exists in both languages: `{ en, cs }` objects in `DATA`, and the same keys in `T.en`
  and `T.cs`.
- Links live in `SITE.links` and are referenced as `"links.<key>"`; an empty link hides its button,
  and an empty link marked `soon` shows the "coming soon" badge.
- Keep facts consistent across `content.js`, the `FACTS` in `chat.js`, the CV (HTML and PDF) and
  `LINKEDIN_PROFILE.md`: project names, live or pre-release status, figures.
- The project list follows the portfolio registry (display name, status, live URL). Never add a
  project the registry marks private, and never name employer or client internal projects.
- Project source code is private: link to live builds, videos, the YouTube channel and Patreon, never
  to source.
- `FACTS` is public. Salary is only ever "depends on the role"; no figures, no private details.

## Verify before committing

```bash
for f in assets/js/*.js; do node --check "$f"; done
node -e "global.window={}; require('./assets/js/content.js'); const e=Object.keys(window.T.en), c=Object.keys(window.T.cs); console.log(e.length, c.length, e.filter(k=>!c.includes(k)), c.filter(k=>!e.includes(k)))"
python -m http.server 8000   # then open http://localhost:8000 and switch both languages
```

When links change, request each one with `curl -s -o /dev/null -L -w "%{http_code}"`. LinkedIn
answers scripts with 999; check it in a browser.
