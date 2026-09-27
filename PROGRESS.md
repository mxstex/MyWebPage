# Project State

Status: LIVE
Live: https://mxstex.github.io/MyWebPage/
Tests: 2026-09-26 – `node --check` on assets/js/*.js: OK; EN/CS keys 115/115; `node tools/check_links.mjs`: no broken internal link; `node tools/test_chat_loader.mjs`: 7 OK; real browser (Edge 153, RTX 4070 Ti, WebGPU nvidia/lovelace, `tools/webllm_probe.py`): Fast model ready in 6 s, a CV question answered, reload from cache ready in 1 s

## Completed
- 2026-09-27: publication policy excludes non-public/adult products and their safe editions.
  Private-registry check covers committed text, filenames and CV PDF text/metadata; `tools/pre-push`
  is installed locally. Excluded names remain outside this public repository. No public cards changed.
  Verification: 59 public files including PDF passed the private gate; JS syntax,
  115/115 EN/CS keys, internal links and all seven chat-loader checks passed.
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

## 2026-09-26 – Chat with my CV: the model loaded, the first answer failed
- Reproduced on the live site and locally in a real Edge 153 with WebGPU (`tools/webllm_probe.py`, evidence in
  `tools/webllm_evidence/`): WebLLM 0.2.85 imported, `Qwen2.5-0.5B-Instruct-q4f16_1-MLC` downloaded (8 shards, ~280 MB) and
  initialized in 6 s, then the first question threw `ContextWindowSizeExceededError: prompt tokens 4276 > context
  window 4096` - the `FACTS` prompt alone is over the prebuilt model's 4,096-token window - and the page showed the
  generic "Something went wrong while loading the model", which read as a download/start failure.
- Root cause: the context window, not the download, WebGPU or the model id (both Qwen2.5 ids are in the 0.2.85 catalogue).
- Fix: `CreateMLCEngine(..., {context_window_size: 8192})`; `assets/js/chat_loader.js` (pure decisions, tested under Node)
  and a staged loader in `chat.js`: `requestAdapter()` is called (a null adapter has its own message), adapter features
  and buffer limits are checked against the model, the model id is checked in `prebuiltAppConfig.model_list`, import /
  download / GPU / context / generation failures each have a specific EN+CS message, a "Technical details" disclosure
  carries stage, error, browser and adapter, progress values are normalised, a failed engine is unloaded before a
  retry, a context overflow clears the history. No cloud fallback: local or off.
- Verified after the fix in the same Edge: ready in 6 s, "What does Michal do at ABB..." answered from the FACTS,
  reload from cache ready in 1 s. The small model's download-size copy corrected to about 0.3 GB (measured shards).
- Verified on the live site after the Pages deploy (2026-09-26 22:05, `tools/webllm_evidence/msedge-mxstex.github.io-small-after-fix.json`):
  ready in 6.1 s, "Is Michal open to B2B consulting and where is he based?" answered (yes / Sviadnov near Ostrava - the
  0.5B model also mixed in the DISTEP team size, which is why the intro says the PDF is the source of truth), cached reload 1.0 s.

## Next
- Keep project cards limited to the public portfolio registry and run the publication gate before pushes.

## Known issues
- The 1.5B model was not exercised in the browser tonight (the 0.5B path was the reported failure); its 8,192 window
  costs more VRAM and small adapters may refuse it - the loader then says so instead of "something went wrong".
- No CI: the link checker and the checks in CLAUDE.md run by hand before a commit.
- "Gravity for Android is in closed testing on Google Play" rests on the gravityAndroid docs (1.0.1 uploaded to
  closed testing on 2026-09-01); the Play Console itself was not checked.
- LinkedIn answers automated requests with HTTP 999, so that link can only be checked in a browser.
- Figures in the cards (test counts, levels, chapters) drift as the games grow; re-check them against
  each game's README when a game ships a larger update.
