/* =====================================================================
   chat.js - "Chat with my CV" running fully in the browser.
   Uses WebLLM (MLC) through WebGPU: the model is downloaded once from
   the MLC/HuggingFace CDN, cached by the browser, and nothing typed
   here ever leaves the device. No server is involved, and no server
   ever will be a fallback: the feature is local or it is off.

   Loading is staged - WebGPU adapter, WebLLM runtime, model download,
   initialisation, first answer - and a failure names its stage
   (chat_loader.js decides; the visitor sees a specific line and can
   open the technical details). 2026-09-26: the model loaded fine and
   the first question failed with ContextWindowSizeExceededError, which
   the old code reported as "something went wrong while loading" - see
   docs/webllm and PROGRESS.md.
   ===================================================================== */
(function () {
  "use strict";

  const WEBLLM_URL = "https://esm.run/@mlc-ai/web-llm@0.2.85";
  const L = window.ChatLoader;
  const MODELS = { small: L.MODELS.small.id, large: L.MODELS.large.id };

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
- Live on Google Cloud Run: Gravity 3D, Orbit, Ion Drive, Starforge, MyZoo, My Garden, Reactor Operator and Quantum. In the browser games the opening is free and the rest unlocks with the Explorer membership on Patreon. Particle Forge is release-ready and Fusion remains in development. The core Jednota 4X is in development, while its standalone Jednota: Tactics battle simulator is live on Cloud Run. The games are ad-free and mostly bilingual (English and Czech).
- Gravity 3D: an educational Newtonian-gravity sandbox. The player never steers a body; they set the initial velocity of one small asteroid, choose the moment to release it and watch gravity do the rest. The web build uses a hand-written perspective projection with no WebGL, 21 levels including two Voyager missions and the real Solar System, and a JavaScript copy of the Python engine kept bit-identical by tests; the server replays every win. A separate native Android 3D build uses Kotlin + Jetpack Compose and golden-trace tests against the Python trajectories. The older Gravity 2D line is retired from the active portfolio.
- Jednota: a 4X galactic strategy game and his largest project (more than 80,000 lines of Python, more than 1,400 tests, more than 300 logged design decisions). An invasion is coming from beyond the galaxy; the races unify the galaxy by diplomacy or conquest, then must destroy the invasion fleet. Three layers of AI agents on a local LLM through Ollama: a strategist per empire, an envoy per AI government and an admiral per fleet. Deterministic rules validate every model decision; in a measured five-empire campaign they accepted 93 of 93 strategic, 80 of 88 diplomatic and 79 of 86 tactical decisions. Agents remember earlier games through a pgvector store of chronicles, and recorded decisions let replays run without the model. The core 4X remains in active development. An online version, Jednota forever online, is also in development on FastAPI, PostgreSQL and Vue 3. The standalone Jednota: Tactics companion has a live Cloud Run build. Newer local rules add semi-realtime combat, subsystem damage, board/raid actions and Mk X Antaran rules; those changes are not deployed yet.
- Orbit: orbital mechanics in the real Solar System at real scale (Earth and Moon, Jupiter and its moons, Saturn and its rings). Rendezvous, docking and transfers with twelve spacecraft, including NASA's public-domain Apollo, Soyuz and Gemini models. Kepler's equation, patched conics, finite burns and six WebGL2 shader programs are hand-written. All 23 missions are verified by flying them, including with small timing and burn errors. Playable online; the first act is free.
- Ion Drive: a realistic electric- and nuclear-propulsion trajectory game. One deep-space vehicle flies through the Solar System on Newtonian N-body gravity and must cross a prescribed exit corridor as fast as physics allows. Ion engines whose efficiency comes from the ionisation cost of the propellant, a nuclear thermal rocket whose exhaust speed comes from its chamber temperature, layered atmospheres that can be scooped for propellant, an 8th-order adaptive integrator and JPL elements for the planets, all hand-written. Seven chapters from Earth orbit to the Proxima Window, each flown end to end by a mission verifier. Python, NiceGUI, Three.js. Playable online; the first three chapters are free. Ten videos are on YouTube: a trailer, a Short, two films about refuelling from Mars's air and scooping Jupiter, and six "ship to Proxima" films.
- Reactor Operator: a teaching simulator played from the control room, with seven reactors and twenty scenarios: the VVER-440 and the BN-600 fast reactor, Generation IV designs (BREST-OD-300, TMSR-LF1, HTR-PM), the fuel cycle with the BN-800 and xenon oscillations in a VVER-1000. Its lesson: control rods set reactivity, not power; reactivity sets the rate of change and power is the consequence. Point kinetics with six delayed-neutron groups, a two-node thermal model, iodine and xenon, decay heat, a Fuchs-Nordheim excursion above prompt critical, protections and an automatic controller, grounded in his bachelor thesis on fast reactor cores. 46 physics and 32 learning tests. Python, NiceGUI, HTML5 canvas. Playable online; everything educational is free and Patreon unlocks free play. Eleven videos are on YouTube: a Short, a how-to and a nine-part Reactor Physics series.
- Fusion: a game about confining plasma with magnets. Biot-Savart magnetic fields, field-line tracing with Poincaré sections, the q(r) profile and a 0-D energy balance, calibrated against his own 2006 research on the CASTOR tokamak. Eleven scenarios up to a stellarator and divertor heat exhaust. Python, NumPy, SciPy. Pre-release, not deployed yet.
- Quantum: a live Cloud Run wave-mechanics sandbox where the Schrödinger equation decides (double slit, tunnelling, uncertainty, string breaking, beam splitter). Hand-written split-step Fourier integrator tested against analytic solutions.
- Particle Forge: a particle-physics discovery game that builds the Standard Model from measured evidence across ten chapters and an epilogue, with fifteen experiment modes, guided setups, detector and analysis views, explicit hypotheses, a persistent research notebook and twelve laboratory backgrounds generated locally in ComfyUI. Browser tests play the complete campaign and persistence and Docker validation are done; the public video and cloud release is still in progress. Pre-release.
- Starforge: a hard sci-fi incremental strategy game from an orbital station to a Dyson swarm, in real physical units, with versioned cloud saves, offline progress and bot playthroughs that prove the economy can be finished. Playable online; Chapter I is free.
- MyZoo and My Garden: simulation games about animal care and building a garden ecosystem, with offline simulation, bots that play them through, and art generated locally with ComfyUI, FLUX and Wan 2.2. Both playable online.
- The platform behind the games: his own FastAPI service completes Patreon OAuth 2.0, maps membership to internal entitlements and signs short-lived RS256 JWTs. Browser redirects carry only a random one-time code (60-second TTL, stored hashed); the game server exchanges it for the JWT. Patreon access tokens are never stored, games hold only the public verification key/JWKS, and Cloud Run reads secrets from Secret Manager provisioned with Terraform.
- Video pipeline: code-driven 4K videos of the real games (Playwright and the Chrome DevTools Protocol for capture, captions from on-screen events, Kokoro text-to-speech narration, loudness-checked audio, automated validation), plus Tojin Video Generator on local ComfyUI and Ollama. It can build a storyboard from a task folder, preserve supplied shot images, and enforce one source line per generated shot. The Tojin channel has more than eighty public videos (September 2026).
- Tojin Forge: his own local, autonomous, multi-repository coding agent on Ollama models, with a NiceGUI control room and a headless CLI over the same engine. An engineering loop (task, model, tool call, tool result, tests, fix, verify, report) rather than a chat window: it indexes the whole development workspace, writes only inside a sandbox boundary, keeps checkpoints, runs tests before finishing, takes task files with screenshots and mockups, supports full-access and unattended overnight runs across several repositories, and exposes its tools through an MCP server. Execution modes Safe, Ask on write and Full access; every change is checkpointed and can be reverted, destructive Git commands are blocked and it never pushes. In Work mode nothing leaves the machine. A model picker reads the GPU memory and takes the largest of the newest tool-calling models on ollama.com that fits. At night it audits every repository of his workspace from its own evidence, runs one fresh-context task per repository, keeps a change only when the repository's own tests and linter pass, flags tests the agent rewrote, and writes a morning report. It runs every day on his workspace with local models only; more than 680 tests pass in the current suite. On PC start it synchronizes the repository workspace before work begins. It is integrated with Tojin Observer, which watches external application windows, records evidence and telemetry, analyses long recordings for freezes or visual anomalies, and can provide screenshot-based or spoken guidance. A development preview is public on YouTube; it remains in active development, and a small local model still needs a supervisor for hard tasks.
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
  let details = null;

  function addMsg(role, text) {
    const div = document.createElement("div");
    div.className = "msg " + role; div.textContent = text || "";
    ui.messages.appendChild(div); ui.messages.scrollTop = ui.messages.scrollHeight;
    return div;
  }
  function setStatus(text) { ui.status.textContent = text || ""; }
  function setProgress(p) {
    const share = L.normalizeProgress({ progress: p });
    ui.progress.hidden = share == null;
    if (share != null) ui.progress.firstElementChild.style.width = Math.round(share * 100) + "%";
  }
  function setReady(ready) {
    ui.input.disabled = !ready; ui.send.disabled = !ready;
    if (ready) ui.input.focus();
  }

  /* The technical details a visitor (or Michal, debugging) can open under
     the status line: stage, error name and message, browser and adapter. */
  function showDetails(info) {
    if (!details) {
      details = document.createElement("details");
      details.className = "chat-details";
      const summary = document.createElement("summary");
      summary.textContent = t("chat.details");
      const pre = document.createElement("pre");
      details.appendChild(summary); details.appendChild(pre);
      ui.status.insertAdjacentElement("afterend", details);
    }
    details.querySelector("summary").textContent = t("chat.details");
    details.querySelector("pre").textContent = Object.entries(info).map(([k, v]) => k + ": " + v).join("\n");
    details.hidden = false;
  }
  function hideDetails() { if (details) details.hidden = true; }

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
  let adapterInfo = null;

  async function probeGpu() {
    if (!("gpu" in navigator) || !navigator.gpu) return { ok: false, code: "nogpu" };
    let adapter = null;
    try {
      adapter = await navigator.gpu.requestAdapter();
    } catch (err) {
      return { ok: false, code: "gpu", error: err };
    }
    if (!adapter) return { ok: false, code: "noadapter" };
    const info = adapter.info || {};
    adapterInfo = {
      vendor: info.vendor || "?", architecture: info.architecture || "?",
      f16: adapter.features && adapter.features.has ? adapter.features.has("shader-f16") : "?",
      maxStorageBufferBindingSize: adapter.limits ? adapter.limits.maxStorageBufferBindingSize : "?",
    };
    return { ok: true, adapter };
  }

  function fail(code, stage, err, extra) {
    console.error("[chat] stage=" + stage + " code=" + code, err || "");
    const key = { nogpu: "chat.nogpu", noadapter: "chat.noadapter", gpu: "chat.err.gpu", memory: "chat.err.memory",
                  import: "chat.err.import", download: "chat.err.download", init: "chat.err.gpu", context: "chat.err.context",
                  generate: "chat.err.generate", catalog: "chat.err.catalog", unsupported: "chat.err.unsupported" }[code] || "chat.error";
    setProgress(null); setStatus(t(key)); addMsg("sys", t(key));
    showDetails(Object.assign({
      stage: stage, code: code,
      error: err ? (err.name ? err.name + ": " : "") + (err.message || String(err)) : "-",
      browser: navigator.userAgent, model: MODELS[ui.model.value] || MODELS.small,
    }, adapterInfo || {}, extra || {}));
  }

  async function disposeEngine() {
    const old = engine; engine = null;
    if (old) { try { await old.unload(); } catch (e) { /* a half-built engine may have nothing to unload */ } }
  }

  async function loadEngine() {
    if (engine || loading) return;
    loading = true; ui.start.disabled = true; ui.model.disabled = true; hideDetails();
    setStatus(t("chat.checking")); setProgress(null);
    let stage = "gpu";
    try {
      const gpu = await probeGpu();
      if (!gpu.ok) { fail(gpu.code, "gpu", gpu.error); return; }
      const wanted = ui.model.value in MODELS ? ui.model.value : "small";
      const why = L.checkAdapterFor(wanted, gpu.adapter);
      if (why) { fail("unsupported", "gpu", null, { reason: why }); return; }

      stage = "import";
      setStatus(t("chat.runtime"));
      const webllm = await import(WEBLLM_URL);
      const modelId = MODELS[wanted];
      if (!L.modelInCatalog(webllm, modelId)) { fail("catalog", "import", null, { catalog: "missing " + modelId }); return; }

      stage = "download";
      setStatus(t("chat.downloading")); setProgress(0);
      engine = await webllm.CreateMLCEngine(modelId, {
        initProgressCallback: (r) => {
          stage = L.stageOf(r);
          setProgress(r && r.progress);
          setStatus((stage === "init" ? t("chat.initializing") : t("chat.downloading")) + (r && r.text ? " · " + r.text : ""));
        },
      }, { context_window_size: L.CONTEXT_WINDOW });
      stage = "init";
      setProgress(null); setStatus(t("chat.ready")); setReady(true);
      ui.start.hidden = true;
      addMsg("sys", t("chat.ready"));
    } catch (err) {
      const kind = L.classifyError(err, stage);
      await disposeEngine();
      fail(kind.code, kind.stage, err);
    } finally {
      loading = false;
      if (!engine) { ui.start.disabled = false; ui.model.disabled = false; ui.start.hidden = false; }
    }
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
      const kind = L.classifyError(err, "generate");
      console.error("[chat] stage=generate code=" + kind.code, err);
      if (!answer) {
        bot.textContent = t(kind.code === "context" ? "chat.err.context" : "chat.err.generate");
        showDetails({ stage: "generate", code: kind.code, error: (err && (err.name + ": " + err.message)) || String(err),
                      browser: navigator.userAgent, model: MODELS[ui.model.value] || MODELS.small });
      }
      if (kind.code === "context") history.length = 0;   // start clean: the history was part of the overflow
    } finally {
      bot.classList.remove("pending");
      if (answer) history.push({ role: "assistant", content: answer });
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
