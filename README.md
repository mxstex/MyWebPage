# michal stepan · portfolio

Single-page personal site: profile, experience, the Gravity games, Jednota, RAG & LLM notes, and a
"chat with my CV" that runs a small language model in the visitor's browser (WebLLM + WebGPU).

Plain HTML, CSS and JavaScript. No build step. Bilingual (English / Czech) with a switch, dark and
light theme.

## Editing

- `assets/js/content.js` — every link and every text, in both languages. Edit this first.
- `assets/js/chat.js` — the fact sheet the in-browser model answers from (`FACTS`), model ids.
- `assets/css/style.css` — look and feel.
- `cv/Michal_Stepan_CV.pdf` — the downloadable CV. Re-export it from the source .docx when it changes.
- `assets/img/` — screenshots and graphics, already downscaled.

The `docs/` folder with source documents is ignored by git on purpose.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Deploy (GitHub Pages)

Repository settings → Pages → Source: *Deploy from a branch* → branch `main`, folder `/ (root)`.
The site is then at `https://mxstex.github.io/MyWebPage/`. All paths are relative, so a custom
domain works without changes.
