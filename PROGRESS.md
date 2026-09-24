# Project State

Status: LIVE
Live: https://mxstex.github.io/MyWebPage/
Tests: 2026-09-24 – `node --check` on assets/js/*.js: OK; EN/CS keys 101/101; all live links 200

## Completed
- Single-page bilingual (English / Czech) portfolio on GitHub Pages: profile, skills, experience,
  the Gravity games, other projects, LLM notes, education, contact; six backgrounds with their own
  hero animations; changelog dialog behind the version number in the header (site version 1.8.2).
- "Chat with my CV": a small Qwen2.5 model runs in the visitor's browser (WebLLM + WebGPU) and answers
  only from the public `FACTS` in `assets/js/chat.js`.
- Downloadable two-page CV (`cv/Michal_Stepan_CV.pdf`) exported from `cv/Michal_Stepan_CV.html`;
  the PDF text matches the HTML source.
- Project cards match the portfolio registry: the seven live games on Google Cloud Run (Gravity 3D,
  Orbit, Ion Drive, Starforge, MyZoo, My Garden, Reactor Operator) link to their live builds; Jednota,
  Fusion, Quantum and Particle Forge are shown as in development or pre-release without play links.
- 2026-09-24 audit: every play link, the YouTube channel, Patreon and all ten linked videos answer 200;
  every referenced image exists; the served site is identical to `main`; no project the portfolio
  registry marks private appears in the files or the git history.

## Current
- Nothing in progress.

## Next
- Decide whether the two in-development games that the portfolio registry marks public but the site
  does not show yet get project cards (needs copy in both languages and a cover image).
- Add a video link to the Reactor Operator card once a trailer is chosen; the other live cards have one.

## Known issues
- No automated checks: no link checker, no CI. Verification is manual (see CLAUDE.md).
- Unverified claims: the Jednota size figure ("about 73,000 lines of Python" depends on how lines are
  counted) and "Gravity for Android is in closed testing on Google Play".
- LinkedIn answers automated requests with HTTP 999, so that link can only be checked in a browser.
- Figures in the cards (test counts, levels, chapters) drift as the games grow; re-check them against
  each game's README when a game ships a larger update.
