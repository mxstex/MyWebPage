# Project State

Status: LIVE
Live: https://mxstex.github.io/MyWebPage/
Tests: 2026-09-24 – `node --check` on assets/js/*.js: OK; EN/CS keys 101/101; all live links and the new video links 200; CV PDF 2 pages

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
- 2026-09-24 audit: every play link, the YouTube channel, Patreon and all ten linked videos answer 200;
  every referenced image exists; the served site is identical to `main`; no project the portfolio
  registry marks private appears in the files or the git history.

## Current
- Nothing in progress.

## Next
- Decide whether the two in-development games that the portfolio registry marks public but the site
  does not show yet get project cards (needs copy in both languages and a cover image).

## Known issues
- No automated checks: no link checker, no CI. Verification is manual (see CLAUDE.md).
- "Gravity for Android is in closed testing on Google Play" rests on the gravityAndroid docs (1.0.1 uploaded to
  closed testing on 2026-09-01); the Play Console itself was not checked.
- LinkedIn answers automated requests with HTTP 999, so that link can only be checked in a browser.
- Figures in the cards (test counts, levels, chapters) drift as the games grow; re-check them against
  each game's README when a game ships a larger update.
