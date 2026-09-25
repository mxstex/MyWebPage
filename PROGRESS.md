# Project State

Status: LIVE
Live: https://mxstex.github.io/MyWebPage/
Tests: 2026-09-25 – `node --check` on assets/js/*.js: OK; EN/CS keys 101/101; `node tools/check_links.mjs`: 50 internal links OK; `--external`: 26 of 27 external OK, LinkedIn 999 (browser only)

## Completed
- Single-page bilingual (English / Czech) portfolio on GitHub Pages: profile, skills, experience,
  the Gravity games, other projects, LLM notes, education, contact; six backgrounds with their own
  hero animations; changelog dialog behind the version number in the header (site version 1.9.0).
- "Chat with my CV": a small Qwen2.5 model runs in the visitor's browser (WebLLM + WebGPU) and answers
  only from the public `FACTS` in `assets/js/chat.js`.
- Downloadable two-page CV (`cv/Michal_Stepan_CV.pdf`) exported from `cv/Michal_Stepan_CV.html`;
  the PDF text matches the HTML source.
- Project cards match the portfolio registry: the seven live games on Google Cloud Run (Gravity 3D,
  Orbit, Ion Drive, Starforge, MyZoo, My Garden, Reactor Operator) link to their live builds; Jednota,
  Fusion, Quantum and Particle Forge are shown as in development or pre-release without play links.
- 1.9.0 (2026-09-24): Tojin Forge card links its YouTube development preview (promo, narrated guide);
  Reactor Operator shows seven reactors / twenty scenarios and links its how-to and Reactor Physics series;
  Jednota figures re-measured (81,086 tracked lines of Python incl. tests, 1,405 passing tests) and the online
  multiplayer version mentioned. CV, chat `FACTS` and LinkedIn draft follow.
- `tools/check_links.mjs` (Node, no dependencies): every href/src/srcset/poster and CSS url() in the
  pages plus the links and images `main.js` renders from `content.js`; internal targets offline against
  the published files (`git ls-files`, case-sensitive, `#id` checked), external ones only with `--external`.
  First run 2026-09-25: no broken internal link, nothing to fix.
- 2026-09-24 audit: every play link, the YouTube channel, Patreon and all ten linked videos answer 200;
  every referenced image exists; the served site is identical to `main`; no project the portfolio
  registry marks private appears in the files or the git history.

## Current
- Nothing in progress.

## Next
- Decide whether the two in-development games that the portfolio registry marks public but the site
  does not show yet get project cards (needs copy in both languages and a cover image).

## Known issues
- No CI: the link checker and the checks in CLAUDE.md run by hand before a commit.
- "Gravity for Android is in closed testing on Google Play" rests on the gravityAndroid docs (1.0.1 uploaded to
  closed testing on 2026-09-01); the Play Console itself was not checked.
- LinkedIn answers automated requests with HTTP 999, so that link can only be checked in a browser.
- Figures in the cards (test counts, levels, chapters) drift as the games grow; re-check them against
  each game's README when a game ships a larger update.
