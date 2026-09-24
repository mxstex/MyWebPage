/* =====================================================================
   chat.js - "Chat with my CV" running fully in the browser.
   Uses WebLLM (MLC) through WebGPU: the model is downloaded once from
   the MLC/HuggingFace CDN, cached by the browser, and nothing typed
   here ever leaves the device. No server is involved.
   ===================================================================== */
(function () {
  "use strict";

  const WEBLLM_URL = "https://esm.run/@mlc-ai/web-llm@0.2.85";
  const MODELS = {
    small: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
    large: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
  };

  /* The whole "knowledge base": one page of facts. A document this small
     does not need chunking or a vector index - it fits in the prompt. */
  const FACTS = `
IDENTITY
- Name: Ing. Michal Štěpán (Michal Stepan). Headline: Senior GenAI Engineer - AI solution architecture, RAG and agents. Employed at ABB as Senior GenAI Application Engineer. Open to B2B / contract consulting. Based in Sviadnov near Ostrava, Czech Republic; remote-first, works with teams across the EU.
- Contact: e-mail michalstepan82@seznam.cz. YouTube channel Tojin (youtube.com/@tojin111) with videos of his games; Patreon page Tojin Games (patreon.com/cw/TojinGames), where supporters unlock the full browser games. A PDF CV can be downloaded from this website. The source code of his projects is private.
- Languages: Czech (native), English (B2-C1, Cambridge First Certificate, grade B, 2019). Interviews in Czech or English are fine.

PRACTICAL QUESTIONS FROM RECRUITERS
- Current situation: employed at ABB as Senior GenAI Application Engineer. Open to B2B / contract consulting in GenAI engineering, AI solution architecture and production AI delivery; the form of cooperation (employment or a B2B contract) is discussed in person.
- What he is looking for: to turn ambiguous AI use cases into production systems end to end - solution architecture, implementation, evaluation, deterministic validation, backend services and cloud delivery - with technical ownership. Open to B2B / contract consulting as well as employment.
- Salary expectations: no figures are published. They depend on the specific position, its scope and responsibilities, and the form of cooperation, and are discussed in person during the hiring process.
- Work mode: remote-first with teams across the EU, or hybrid in and around Ostrava. Occasional travel (workshops, client visits, abroad) is fine. He is not relocating.
- Leadership: led a team of more than 15 people as technical deputy at DISTEP; mentored junior developers at Siemens; built the evaluation and the deployment pipelines of an LLM application at ABB; worked directly with clients as a freelancer (requirements, estimates, communication).
- Why him: turns ambiguous AI use cases into production systems, from solution architecture and evaluation to backend services and deployment; strongest where AI must be reliable, testable and integrated into real business workflows; combines cloud/software engineering with a physics and engineering foundation (nuclear engineering, power engineering, numerical simulation); more than 15 years across industrial software, data, cloud and energy, including freelance B2B delivery and technical leadership.
- Benefits and other conditions: discussed during the hiring process. To arrange an interview, e-mail michalstepan82@seznam.cz.

HOBBIES AND INTERESTS
- Running Tojin Games, his one-person studio for science, space and simulation games (see personal projects), in his own time: a YouTube channel (Tojin) and a Patreon page.
- Physics and astronomy.
- Generative AI and local models (ComfyUI, FLUX, Wan 2.2, Ollama).
- The garden and nature, time with his family and their dog.
- Music: he composes the music for his own games, and likes listening to music and going to concerts.

SUMMARY
- Senior GenAI Engineer who turns ambiguous AI use cases into production systems: AI solution architecture, RAG and agents, deterministic validation, golden-dataset evaluation, MCP integrations, FastAPI backends and delivery to Azure Container Apps or Google Cloud Run. Open to B2B / contract consulting.
- Works with AI coding agents (Claude Code, GitHub Copilot) at ABB and in his own projects, and built Tojin Forge, his own local autonomous coding agent on Ollama.
- Earlier background in data and backend engineering (freelance, Siemens, ABB) and in energy (district heating).

CORE SKILLS
- GenAI and LLM applications (current work): Azure OpenAI / Azure AI Foundry, Azure AI Agents, RAG and retrieval with Azure AI Search and ChromaDB, Azure Document Intelligence, structured outputs, LLM validation combined with deterministic rules, golden datasets and evaluation, Model Context Protocol (MCP/FastMCP), local LLM agents through Ollama, pgvector memory, AI coding agents (Claude Code, GitHub Copilot). LangChain and LangGraph are earlier experience, mainly from 2025.
- Cloud and delivery (current work): Azure Container Apps, Container Registry, Key Vault with managed identity, Log Analytics, Blob and Table Storage, Azure Pipelines for dev, test, stage and prod; Google Cloud Run, Secret Manager, Terraform on GCP; Docker; OAuth 2.0 / JWT.
- Programming and testing (current work): Python, FastAPI, Pandas, Pytest, SQL and PostgreSQL, Redis, Neo4j, NiceGUI, Vue 3, Playwright, load and stress tests, NumPy and SciPy. Earlier project work also includes JavaScript/WebGL2 and Kotlin/Jetpack Compose.
- Worked with earlier, in previous jobs: Dagster, Airflow, DuckDB, BigQuery, RabbitMQ, Kubernetes, GitLab CI, GitHub Actions, Flask, Streamlit, AWS S3 and Lambda, Azure Functions, Grafana, Power BI, ARIMA and SARIMA forecasting.

WORK EXPERIENCE (most recent first)
1. ABB s.r.o. - Senior GenAI Application Engineer, September 2025 to present.
   Designs and builds production GenAI solutions for industrial engineering workflows, from use-case analysis and architecture through implementation, evaluation and cloud delivery. Implements document extraction and RAG, structured LLM outputs with deterministic validation, and agent-based assistants with Azure OpenAI / AI Foundry and Azure AI Agents. Owns AI quality and evaluation: golden datasets, acceptance criteria, deterministic checks, performance/stress tests and cloud-vs-local model comparison through Ollama. Develops Python/FastAPI services and integrates PostgreSQL, Redis and Neo4j where relational, session/cache and graph data are required. Delivers across dev, test, stage and prod with Azure Pipelines, Docker, Container Registry, Azure Container Apps, Key Vault via managed identity and Log Analytics. Built an MCP/FastMCP proof of concept that exposes Azure DevOps work items to AI coding assistants through controlled tools.
2. Freelance Software / Data Engineer, September 2022 to September 2025.
   B2B delivery for DTSE, Landis+Gyr, Vendavo and other clients in energy, telecom and manufacturing, in remote international teams. Delivered backend and data-engineering work directly into client environments, from requirements through implementation, testing and production support. Designed end-to-end data workflows in Python with Dagster and Airflow, storage in PostgreSQL, DuckDB and BigQuery. Built backend components for high-volume ingestion and message-based processing with RabbitMQ. Migrated services from Kubernetes to GCP (Cloud Run, GCS, BigQuery). Maintained CI/CD (GitLab CI, GitHub Actions) with unit, integration and e2e tests in Pytest. Delivered high-performance pipelines for recommender systems. Provided L2 engineering support for production systems.
3. Siemens s.r.o. - Senior Software Developer, January 2021 to August 2022.
   Developed an Energy Management System consolidating and analysing data from many sources. Implemented ARIMA and SARIMA time-series forecasting. Mentored junior team members. Stack: Python, Flask, FastAPI, Docker, PostgreSQL, Grafana, Power BI, RabbitMQ, AWS S3, AWS Lambda.
4. ABB s.r.o. - Software Project Engineer, October 2018 to January 2021.
   Developed a water and energy consumption evaluation system with predictive analytics. Stack: Python, Docker, PostgreSQL, Azure Functions, Azure Blob Storage, Grafana, Power BI.
5. DISTEP a.s. - IT Specialist, Power Engineer, Technical Deputy, May 2010 to October 2018.
   Streamlined data collection with PDA barcode readers, managed water and heat distribution operations, improved resource efficiency through optimised calculations and monitoring. Stack: MS SQL, VBA.

EDUCATION
- VŠB - Technical University of Ostrava, Faculty of Electrical Engineering and Computer Science: Ing. (Master's) in Electrical Engineering and Computer Science, 2012. Thesis: "VBA Utilization for Power Engineering Data Processing and Presentation".
- Czech Technical University in Prague, Faculty of Nuclear Sciences and Physical Engineering: Bc. in Nuclear Engineering, 2009. Thesis: "Physical Analysis of Fast Reactor Cores in Up-to-Date Tendencies".
- Research project (2006) at the Institute of Plasma Physics of the Czech Academy of Sciences: electrostatic turbulence in the edge plasma of the CASTOR tokamak.
- Training: Microsoft AZ-305 (Designing Azure Infrastructure Solutions) and AZ-400 (Designing and Implementing DevOps Solutions).

PERSONAL PROJECTS: TOJIN GAMES (his own studio and engineering portfolio, built in his own time: live browser products, public YouTube demos and pre-release engineering projects; the source code is private)
- Live on Google Cloud Run: Gravity 3D, Orbit, Ion Drive, Starforge, MyZoo, My Garden and Reactor Operator. In the browser games the opening is free and the rest unlocks with the Explorer membership on Patreon. Pre-release projects (Particle Forge, Fusion, Quantum) and the Jednota strategy game are in staged development and not publicly playable. The games are ad-free and mostly bilingual (English and Czech).
- Gravity: an educational Newtonian-gravity sandbox. The player never steers a body; they set the initial velocity of one small asteroid, choose the moment to release it and watch gravity do the rest. Ten story chapters go from an asteroid to two colliding black holes. The physics is hand-written (Velocity Verlet, symmetric forces, conserved angular momentum), no physics engine. Four builds: Gravity (web, Python + NiceGUI + HTML5 canvas, 2D, the reference implementation), Gravity 3D (web, hand-written perspective projection, no WebGL, 21 levels including two Voyager missions and the real Solar System; the simulation runs in the browser in a JavaScript copy of the Python engine kept bit-identical by tests, and the server replays every win), and Gravity and Gravity 3D for Android (Kotlin + Jetpack Compose, engine tested against the Python one; the 2D app is in closed testing on Google Play).
- Jednota: a 4X galactic strategy game and his largest project (about 73,000 lines of Python, 1,300 tests, 300 logged design decisions). An invasion is coming from beyond the galaxy; the races unify the galaxy by diplomacy or conquest, then must destroy the invasion fleet. Three layers of AI agents on a local LLM through Ollama: a strategist per empire, an envoy per AI government and an admiral per fleet. Deterministic rules validate every model decision; in a measured five-empire campaign they accepted 93 of 93 strategic, 80 of 88 diplomatic and 79 of 86 tactical decisions. Agents remember earlier games through a pgvector store of chronicles, and recorded decisions let replays run without the model. In development, not publicly playable. A persistent multiplayer browser version (FastAPI, PostgreSQL, Vue 3) is an early prototype.
- Orbit: orbital mechanics in the real Solar System at real scale (Earth and Moon, Jupiter and its moons, Saturn and its rings). Rendezvous, docking and transfers with twelve spacecraft, including NASA's public-domain Apollo, Soyuz and Gemini models. Kepler's equation, patched conics, finite burns and six WebGL2 shader programs are hand-written. All 23 missions are verified by flying them, including with small timing and burn errors. Playable online; the first act is free.
- Ion Drive: a realistic electric- and nuclear-propulsion trajectory game. One deep-space vehicle flies through the Solar System on Newtonian N-body gravity and must cross a prescribed exit corridor as fast as physics allows. Ion engines whose efficiency comes from the ionisation cost of the propellant, a nuclear thermal rocket whose exhaust speed comes from its chamber temperature, layered atmospheres that can be scooped for propellant, an 8th-order adaptive integrator and JPL elements for the planets, all hand-written. Seven chapters from Earth orbit to the Proxima Window, each certified by a mission verifier. Python, NiceGUI, Three.js. Playable online; the first three chapters are free. A trailer and six "ship to Proxima" videos are on YouTube.
- Reactor Operator: a teaching simulator of the BN-600 fast reactor and the VVER-440, played from the control room. Its lesson: control rods set reactivity, not power; reactivity sets the rate of change and power is the consequence. Point kinetics with six delayed-neutron groups, a two-node thermal model, iodine and xenon, decay heat, a Fuchs-Nordheim excursion above prompt critical, protections and an automatic controller, grounded in his bachelor thesis on fast reactor cores. 46 physics and 32 learning tests. Python, NiceGUI, HTML5 canvas. Playable online; everything educational is free and Patreon unlocks free play.
- Fusion: a game about confining plasma with magnets. Biot-Savart magnetic fields, field-line tracing with Poincaré sections, the q(r) profile and a 0-D energy balance, calibrated against his own 2006 research on the CASTOR tokamak. Eleven scenarios up to a stellarator and divertor heat exhaust. Python, NumPy, SciPy. Pre-release, not deployed yet.
- Quantum: a wave-mechanics sandbox where the Schrödinger equation decides (double slit, tunnelling, uncertainty, string breaking, beam splitter). Hand-written split-step Fourier integrator tested against analytic solutions. Pre-release, not deployed yet.
- Particle Forge: a particle-physics discovery game that builds the Standard Model from measured evidence across ten chapters and an epilogue, with fifteen experiment modes, guided setups, detector and analysis views, explicit hypotheses, a persistent research notebook and twelve laboratory backgrounds generated locally in ComfyUI. Browser tests play the complete campaign and persistence and Docker validation are done; the public video and cloud release is still in progress. Pre-release.
- Starforge: a hard sci-fi incremental strategy game from an orbital station to a Dyson swarm, in real physical units, with versioned cloud saves, offline progress and bot playthroughs that prove the economy can be finished. Playable online; Chapter I is free.
- MyZoo and My Garden: simulation games about animal care and building a garden ecosystem, with offline simulation, bots that play them through, and art generated locally with ComfyUI, FLUX and Wan 2.2. Both playable online.
- The platform behind the games: his own FastAPI service completes Patreon OAuth 2.0, maps membership to internal entitlements and signs short-lived RS256 JWTs. Browser redirects carry only a random one-time code (60-second TTL, stored hashed); the game server exchanges it for the JWT. Patreon access tokens are never stored, games hold only the public verification key/JWKS, and Cloud Run reads secrets from Secret Manager provisioned with Terraform.
- Video pipeline: code-driven 4K videos of the real games (Playwright and the Chrome DevTools Protocol for capture, captions from on-screen events, Kokoro text-to-speech narration, loudness-checked audio, automated validation), plus a local storyboard-to-video tool on ComfyUI (Wan 2.2) and Ollama. More than forty videos were published in September 2026.
- Tojin Forge: his own local, autonomous, multi-repository coding agent on Ollama models, with a NiceGUI control room and a headless CLI over the same engine. An engineering loop (task, model, tool call, tool result, tests, fix, verify, report) rather than a chat window: it indexes the whole development workspace, writes only inside a sandbox boundary, keeps checkpoints, runs tests before finishing, takes task files with screenshots and mockups, supports full-access and unattended overnight runs across several repositories, and exposes its tools through an MCP server.
- How he builds them: Python and NiceGUI, pytest and Playwright tests, level verifiers and bots that play the games through, Docker and Terraform, AI-assisted development with Claude Code, local generative models for art (ComfyUI), his own music and Kokoro for narration.
- Other: he has built a Model Context Protocol (MCP) server that connects Claude to a PostgreSQL notes database, and a peer-to-peer file-sync tool for home networks in pure Python.
- This website: plain HTML, CSS and JavaScript on GitHub Pages. The chat you are reading runs a small Qwen2.5 model in the browser via WebLLM and WebGPU; nothing is sent to a server.

LLM PRINCIPLES MICHAL FOLLOWS
- Measure with golden datasets and an acceptance evaluation before tuning prompts, for retrieval as much as for the model; compare local and cloud models under the same evaluation and treat retrieval changes as measurable system changes.
- Deterministic rules wherever they can do the job and the model only where judgement is needed; structured outputs keep answers machine-checkable.
- Give AI assistants tools through MCP instead of pasted copies of data.
- Ship it, not a prototype: containers, pipelines for every environment, secrets in Key Vault, telemetry.
`.trim();

  function systemPrompt(lang) {
    return "You are the assistant on Michal Štěpán's personal website. Answer questions about Michal using ONLY the FACTS below. " +
      "Answer in the same language the visitor writes in (Czech or English). Keep answers short: two to five sentences, plain text, no markdown headings. " +
      "Refer to Michal in the third person. Never invent employers, dates, technologies or projects that are not in the FACTS. " +
      "For practical recruiting questions (salary, remote work, leadership, hobbies) answer from the PRACTICAL QUESTIONS and HOBBIES sections; " +
      "never state or guess any salary figure: say it depends on the position and its scope and is discussed in person. Do not share personal details that are not in the FACTS, such as family, age or exact address. " +
      "If the FACTS do not contain the answer, say so briefly and suggest e-mailing Michal at michalstepan82@seznam.cz. " +
      (lang === "cs" ? "The visitor's interface language is Czech. " : "The visitor's interface language is English. ") +
      "\n\nFACTS:\n" + FACTS;
  }

  /* ---------------- UI ---------------- */
  const $ = (s) => document.querySelector(s);
  const ui = {
    model: $("#chat-model"), start: $("#chat-start"), progress: $("#chat-progress"), status: $("#chat-status"),
    messages: $("#chat-messages"), form: $("#chat-form"), input: $("#chat-input"), send: $("#chat-send"), stop: $("#chat-stop"), suggest: $("#chat-suggest"),
  };
  if (!ui.form) return;

  const t = (k) => (window.T[window.getLang()] || {})[k] || k;
  let engine = null, loading = false, generating = false;
  const history = [];

  function addMsg(role, text) {
    const div = document.createElement("div");
    div.className = "msg " + role; div.textContent = text || "";
    ui.messages.appendChild(div); ui.messages.scrollTop = ui.messages.scrollHeight;
    return div;
  }
  function setStatus(text) { ui.status.textContent = text || ""; }
  function setProgress(p) { ui.progress.hidden = p == null; if (p != null) ui.progress.firstElementChild.style.width = Math.round(p * 100) + "%"; }
  function setReady(ready) {
    ui.input.disabled = !ready; ui.send.disabled = !ready;
    if (ready) ui.input.focus();
  }

  function renderSuggestions() {
    const list = window.DATA.chatSuggestions[window.getLang()] || window.DATA.chatSuggestions.en;
    ui.suggest.innerHTML = "";
    list.forEach((q) => {
      const b = document.createElement("button"); b.type = "button"; b.textContent = q;
      b.addEventListener("click", () => { ui.input.value = q; if (engine) ui.form.requestSubmit(); else ui.start.click(); });
      ui.suggest.appendChild(b);
    });
  }
  document.addEventListener("langchange", renderSuggestions);
  renderSuggestions();

  /* ---------------- engine ---------------- */
  async function loadEngine() {
    if (engine || loading) return;
    if (!("gpu" in navigator)) { addMsg("sys", t("chat.nogpu")); setStatus(""); return; }
    loading = true; ui.start.disabled = true; ui.model.disabled = true;
    setStatus(t("chat.loading")); setProgress(0);
    try {
      const webllm = await import(WEBLLM_URL);
      const modelId = MODELS[ui.model.value] || MODELS.small;
      engine = await webllm.CreateMLCEngine(modelId, {
        initProgressCallback: (r) => { setProgress(r.progress); setStatus(r.text || t("chat.loading")); },
      });
      setProgress(null); setStatus(t("chat.ready")); setReady(true);
      ui.start.hidden = true;
      addMsg("sys", t("chat.ready"));
    } catch (err) {
      console.error(err);
      engine = null; setProgress(null); setStatus(t("chat.error")); addMsg("sys", t("chat.error"));
      ui.start.disabled = false; ui.model.disabled = false;
    } finally { loading = false; }
  }

  async function ask(question) {
    if (!engine || generating) return;
    generating = true; setReady(false); ui.stop.hidden = false;
    addMsg("user", question);
    history.push({ role: "user", content: question });
    const bot = addMsg("bot", ""); bot.classList.add("pending");
    let answer = "";
    try {
      const msgs = [{ role: "system", content: systemPrompt(window.getLang()) }].concat(history.slice(-8));
      const stream = await engine.chat.completions.create({ messages: msgs, stream: true, temperature: 0.3, top_p: 0.9, max_tokens: 350 });
      for await (const chunk of stream) {
        const delta = chunk.choices && chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content;
        if (delta) { answer += delta; bot.textContent = answer; ui.messages.scrollTop = ui.messages.scrollHeight; }
      }
    } catch (err) {
      console.error(err);
      if (!answer) bot.textContent = t("chat.error");
    } finally {
      bot.classList.remove("pending");
      history.push({ role: "assistant", content: answer });
      generating = false; ui.stop.hidden = true; setReady(true);
    }
  }

  ui.start.addEventListener("click", loadEngine);
  ui.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = ui.input.value.trim(); if (!q) return;
    ui.input.value = ""; ask(q);
  });
  ui.stop.addEventListener("click", () => { if (engine && generating) { try { engine.interruptGenerate(); } catch (e) {} } });
})();
