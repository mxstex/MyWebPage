# michal stepan · portfolio

Single-page personal site: profile, experience, the Gravity games, other physics games and simulations,
RAG & LLM notes, and a "chat with my CV" that runs a small language model in the visitor's browser
(WebLLM + WebGPU). The chat also answers practical recruiter questions (work mode,
leadership, hobbies; salary only as "depends on the role", never figures). Everything in its `FACTS` is public, so put nothing there you would not publish.

The project repositories are private, so the site links to live builds, videos, the YouTube channel and
the Tojin Games Patreon, never to source.

Plain HTML, CSS and JavaScript. No build step. Bilingual (English / Czech) with a switch, and six
backgrounds to pick from in the header (Meadow by default, then Forest at dusk, Sea, Space, Nebula,
Paper). Each has its own palette in `style.css` and its own hero animation in `main.js` (`BGS`).

## Editing

- `assets/js/content.js` — every link and every text, in both languages. Edit this first.
  Every published change gets a new entry at the top of `DATA.changelog` (version, date, EN + CS
  bullets); the header shows that version and opens the changelog.
- `assets/js/chat.js` — the fact sheet the in-browser model answers from (`FACTS`), model ids.
- `assets/css/style.css` — look and feel.
- `cv/Michal_Stepan_CV.html` — the source of the downloadable CV. After editing it, re-export the PDF
  with Edge (or Chrome) and check that it still fits on two pages. The CV loads Inter and Lora from
  Google Fonts; `--virtual-time-budget` gives them time to arrive before printing:

  ```bash
  "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu \
    --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf="G:\GIT\MyWebPage\cv\Michal_Stepan_CV.pdf" \
    "file:///G:/GIT/MyWebPage/cv/Michal_Stepan_CV.html"
  ```
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
