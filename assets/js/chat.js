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
- Name: Ing. Michal Štěpán (Michal Stepan). Title: AI & Data Platform Architect. Based in Sviadnov near Ostrava, Czech Republic.
- Contact: e-mail michalstepan82@seznam.cz. GitHub: github.com/mxstex. A PDF CV can be downloaded from this website.
- Languages: Czech (native), English (B2-C1, Cambridge First Certificate, grade B, 2019).

SUMMARY
- AI and Data Platform Engineer with a strong focus on system architecture, GenAI platforms and scalable data systems.
- Experienced in designing end-to-end AI and data solutions across cloud environments: RAG systems, data pipelines, enterprise analytics platforms.
- Bridges data engineering, AI capabilities and business applications to build reliable, production-grade AI systems.

CORE SKILLS
- Architecture: Retrieval-Augmented Generation (RAG), multi-step LLM workflows, tool integration / function calling, agent-based systems, orchestration with LangChain and LangGraph, data platform architecture, distributed data pipelines.
- Data & AI platforms: vector databases (Azure AI Search, ChromaDB, pgvector), document intelligence pipelines, model evaluation workflows, golden datasets, data quality and observability.
- Cloud: Azure architecture (Container Apps, Functions, Blob and Table Storage, Key Vault, Container Registry, Log Analytics, Azure OpenAI, Azure AI Search), GCP (Cloud Run, GCS, BigQuery), containerized AI services, CI/CD for data and AI systems (Azure Pipelines, GitLab CI, GitHub Actions), Docker, Terraform.
- Programming: Python (FastAPI, Pandas, Pytest, Streamlit, NiceGUI), SQL, Kotlin with Jetpack Compose for Android. Also Grafana and Power BI.

WORK EXPERIENCE (most recent first)
1. ABB s.r.o. - Senior GenAI Engineer, September 2025 to present.
   Designed the architecture of a full RAG pipeline (Azure AI Search, vector embeddings, grounding). Integrates GenAI into business processes, creates golden datasets and model evaluation workflows. Develops an internal GenAI application platform with FastAPI, Streamlit, Docker and Azure Container Apps. Deploys and manages containerized apps in Azure Container Apps; administers Key Vault, Container Registry and Log Analytics. Implements Document Intelligence and multimodal processing pipelines.
2. Freelance Software / Data Engineer, September 2022 to September 2025.
   Projects for DTSE, Landis+Gyr, Vendavo and other clients in energy, telecom and manufacturing. Designed end-to-end data workflows in Python with Dagster and Airflow, storage in PostgreSQL, DuckDB and BigQuery. Built backend components for high-volume ingestion and message-based processing with RabbitMQ. Migrated services from Kubernetes to GCP (Cloud Run, GCS, BigQuery). Maintained CI/CD (GitLab CI, GitHub Actions) with unit, integration and e2e tests in Pytest. Delivered high-performance pipelines for recommender systems. Provided L2 engineering support for production systems.
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

PERSONAL PROJECTS (open source on GitHub, user mxstex)
- Gravity: an educational Newtonian-gravity sandbox. The player never steers a body; they set the initial velocity of one small asteroid, choose the moment to release it and watch gravity do the rest. Ten story chapters go from an asteroid to two colliding black holes. The physics is hand-written (Velocity Verlet, symmetric forces, conserved angular momentum), no physics engine. Four builds: Gravity (web, Python + NiceGUI + HTML5 canvas, 2D), Gravity 3D (web, same stack, hand-written perspective projection, no WebGL, playable online), Gravity (Android, Kotlin + Jetpack Compose, free on Google Play, package com.mxstex.gravity), Gravity 3D (Android, Kotlin + Compose, free on Google Play, package com.mxstex.gravity3d, sixteen boards, music). The games are free, offline, without ads, accounts or data collection, in English and Czech. The web builds are deployed as containers on Azure Container Apps with Terraform.
- Jednota (repository Moo2LLM): a 4X galactic strategy game in the vein of Master of Orion 2. The Antarans are coming and no race can face them alone, so you win by unifying the galaxy through diplomacy or conquest. Every empire is its own AI agent: deterministic logic for mechanics plus a local LLM through Ollama for reasoning and diplomacy, grounded in a pgvector lore store that also remembers earlier games. Python, NiceGUI. The test suite runs without Ollama or pgvector.
- AIVideoGen: a ComfyUI-driven pipeline in Python that generates stills, animations and impact effects for the Gravity games.
- This website: plain HTML, CSS and JavaScript on GitHub Pages. The chat you are reading runs a small Qwen2.5 model in the browser via WebLLM and WebGPU; nothing is sent to a server.

RAG PRINCIPLES MICHAL FOLLOWS
- Measure retrieval with golden datasets before tuning prompts; use hybrid (vector + keyword) search with grounding and citations.
- Use deterministic code where it can do the job and the model only where judgement is needed; agents call tools via function calling.
- Turn documents into structured data first (Azure Document Intelligence, multimodal pipelines).
- Ship a platform, not a prototype: containers, secrets in Key Vault, telemetry, CI/CD.
`.trim();

  function systemPrompt(lang) {
    return "You are the assistant on Michal Štěpán's personal website. Answer questions about Michal using ONLY the FACTS below. " +
      "Answer in the same language the visitor writes in (Czech or English). Keep answers short: two to five sentences, plain text, no markdown headings. " +
      "Refer to Michal in the third person. Never invent employers, dates, technologies or projects that are not in the FACTS. " +
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
