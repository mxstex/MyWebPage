/* =====================================================================
   content.js - the single place to edit links and texts.
   Everything is bilingual: { en: "...", cs: "..." }.
   Empty link strings hide the corresponding button automatically.
   ===================================================================== */

window.SITE = {
  name: "Michal Štěpán",
  nameFull: "Ing. Michal Štěpán",
  initials: "MŠ",
  email: "michalstepan82@seznam.cz",
  youtube: "https://www.youtube.com/@tojin111",
  patreon: "https://www.patreon.com/cw/TojinGames",  // hidden while empty
  linkedin: "https://www.linkedin.com/in/michal-%C5%A1t%C4%9Bp%C3%A1n-7b81631a5/",
  cv: "cv/Michal_Stepan_CV.pdf",
  location: { en: "Sviadnov, Czechia", cs: "Sviadnov, Česko" },
  links: {
    gravityWeb3d: "https://gravity3d-tgz74cquha-ez.a.run.app/",
    gravityWeb2d: "",                        // public URL of the 2D web build, when there is one
    orbitWeb: "https://orbit-prod-lxfrbj3zhq-ew.a.run.app",
    starforgeWeb: "https://starforge-4zrmoo7y3a-ez.a.run.app",
    myzooWeb: "https://myzoo-gsl5pfkg4q-ez.a.run.app",
    mygardenWeb: "https://mygarden-ltbbj4q4qq-ez.a.run.app",
    play2d: "",                              // Google Play listing once published; "coming soon" is shown while empty
    play3d: "",
  },
  videos: [
    { id: "eAgsoRVX1lw", title: { en: "Gravity 3D trailer: it never has to touch", cs: "Trailer Gravity 3D: nikdy se nemusí dotknout" } },
    { id: "XWBMkMhVhJs", title: { en: "Can you steal speed from Jupiter?", cs: "Dá se Jupiteru ukrást rychlost?" } },
    { id: "LkZCKLGDsPg", title: { en: "Gravity 3D: you don't control the universe, only the initial conditions", cs: "Gravity 3D: vesmír neřídíte, jen počáteční podmínky" } },
  ],
};

/* ---------- static UI strings, keyed by data-i18n attributes ---------- */
window.T = {
  en: {
    "meta.title": "Michal Štěpán · Senior GenAI Application Engineer",
    "meta.description": "Michal Štěpán builds production GenAI applications end to end: LLM/RAG/agents, deterministic validation, golden-dataset evaluation, MCP, FastAPI and delivery on Azure and GCP.",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.gravity": "Gravity",
    "nav.projects": "Projects",
    "nav.rag": "LLM notes",
    "nav.chat": "Chat",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "lang.switch": "Česky",
    "lang.switchTitle": "Přepnout do češtiny",
    "bg.choose": "Choose background",
    "bg.title": "Background",
    "bg.meadow": "Meadow",
    "bg.forest": "Forest at dusk",
    "bg.sea": "Sea",
    "bg.space": "Space",
    "bg.nebula": "Nebula",
    "bg.paper": "Paper",
    "scene.meadow": "Brush over the grass; click to plant a flower",
    "scene.forest": "Fireflies follow your cursor; click for more",
    "scene.sea": "Click the sky for a gull, the water for ripples",
    "scene.orbits": "Click the sky to launch a planet",
    "skip": "Skip to content",

    "hero.kicker": "Senior GenAI Application Engineer · LLM/RAG/agents · Python/FastAPI · Azure & GCP",
    "hero.tagline": "I build production GenAI applications end to end: retrieval and agents, deterministic validation, evaluation, secure APIs and cloud delivery. I work across architecture, backend, quality and operations.",
    "hero.cv": "Download CV (PDF)",
    "hero.chat": "Chat with my CV",
    "hero.youtube": "YouTube",
    "hero.patreon": "Patreon",
    "hero.studio": "Tojin Games · my studio",
    "hero.now.label": "Currently",
    "hero.now.big": "Senior GenAI Application Engineer · ABB",
    "hero.now.1": "Production LLM, RAG and agent applications for industrial engineering",
    "hero.now.2": "Golden-dataset evaluation plus deterministic validation",
    "hero.now.3": "FastAPI, Azure AI/OpenAI, MCP and CI/CD",

    "about.title": "About",
    "about.fact1.b": "Senior GenAI Application Engineer",
    "about.fact1.s": "ABB, since 2025",
    "about.fact2.b": "Production GenAI on Azure",
    "about.fact2.s": "OpenAI / AI Foundry / Agents, Container Apps, Key Vault",
    "about.fact3.b": "Python application stack",
    "about.fact3.s": "FastAPI, Pandas, Pytest, PostgreSQL, Redis, Neo4j",
    "about.fact4.b": "Tojin Games",
    "about.fact4.s": "My engineering lab: agents, simulations and cloud platform",
    "about.p1": "I build production GenAI applications end to end. At ABB I work as a Senior GenAI Application Engineer on industrial engineering workflows: document extraction and RAG, structured LLM validation beside deterministic rules, and agent-based assistants. I work across architecture, evaluation, backend and delivery: golden datasets and acceptance/performance tests, FastAPI services, Azure OpenAI / AI Foundry and Azure AI Agents, and CI/CD to Azure Container Apps with Key Vault and Log Analytics. I also build MCP integrations that let AI coding assistants work directly with team tools. I want to keep moving toward technical ownership and GenAI architecture.",
    "about.p2": "Before that I spent three years as a freelance backend and data engineer for clients in energy, telecom and manufacturing (DTSE, Landis+Gyr, Vendavo), and earlier built energy-management and analytics systems at Siemens and ABB. My roots are in power engineering: eight years at a district heating utility, the last ones as technical deputy leading more than fifteen people, taught me what production reliability actually means.",
    "about.p3": "Outside work I run Tojin Games, a one-person engineering lab for science, space and strategy games. I use it to explore local LLM agents, deterministic validation, pgvector memory, numerical simulation and cloud architecture. The browser games share my own FastAPI authentication service: Patreon OAuth 2.0 is exchanged for short-lived RS256 JWTs through one-time codes, while games hold only the public verification key. Services run on Google Cloud Run with Secret Manager and Terraform. The projects are also where I experiment with AI-assisted development, automated test bots and local generative models.",

    "skills.title": "Skills",
    "skills.lead": "What I work with today, and what I have worked with before.",

    "experience.title": "Experience",
    "experience.stack": "Stack",

    "gravity.title": "Gravity",
    "gravity.kicker": "Physics sandbox · web and Android · 2D and 3D",
    "gravity.intro": "You never control the universe. Only the initial conditions. Gravity is a Newtonian sandbox with one mechanic: set the velocity of a single small asteroid, choose the moment to release it, and watch real gravity produce the consequences. Ten story chapters take the same flyby from an asteroid to two colliding black holes. The simulation is hand-written: symmetric forces, conserved angular momentum, collisions that merge or ricochet because the physics says so. Every level is verified to be beatable and to never beat itself.",
    "gravity.gallery": "Screenshots",
    "gravity.videos": "Videos",
    "gravity.free": "Ad-free, in English and Czech. On the web the prologue and the first chapter are free and Patreon unlocks the rest; the Android builds are free, work offline and collect no data.",
    "gravity.soon": "Coming soon to Google Play",

    "projects.title": "Other projects",
    "projects.lead": "Side projects that share ideas with the day job: agents, local models, numerical simulation and generated media. The code is private; live builds and videos are public. In the browser games the opening is free and Patreon supporters unlock the rest.",

    "rag.title": "LLM applications in practice",
    "rag.lead": "Six things I have learned building LLM applications and agents, at work and in my own games.",

    "chat.title": "Chat with my CV",
    "chat.intro": "Ask about my experience, skills and projects, or the practical things recruiters ask: salary expectations, remote work, leadership, hobbies. The model runs entirely in your browser through WebGPU: it is downloaded once (then cached) and nothing you type leaves your device. It is a small model and can make mistakes; the PDF CV is the source of truth.",
    "chat.model": "Model",
    "chat.model.small": "Fast · Qwen2.5 0.5B · about 0.4 GB download",
    "chat.model.large": "Better answers · Qwen2.5 1.5B · about 1 GB download",
    "chat.start": "Load model and start",
    "chat.loading": "Loading model…",
    "chat.ready": "Model ready. Ask away.",
    "chat.placeholder": "Ask a question…",
    "chat.send": "Send",
    "chat.stop": "Stop",
    "chat.clear": "Clear",
    "chat.suggest": "Try:",
    "chat.nogpu": "Your browser does not expose WebGPU, so the in-browser model cannot run here. Chrome or Edge 113+ on a desktop, or a recent Safari, work. Everything the model would tell you is in the CV PDF.",
    "chat.error": "Something went wrong while loading the model. Reload the page and try again, or pick the smaller model.",
    "chat.thinking": "Thinking…",
    "chat.privacy": "Runs locally · no server · no tracking",

    "education.title": "Education & certificates",
    "education.degrees": "Degrees",
    "education.certs": "Certificates & training",
    "education.langs": "Languages",
    "education.thesis": "Thesis",

    "contact.title": "Contact",
    "contact.lead": "The fastest way is e-mail. I am based near Ostrava, Czechia, and work with remote teams across Europe.",
    "contact.email": "E-mail",
    "contact.youtube": "YouTube",
    "contact.patreon": "Patreon",
    "contact.linkedin": "LinkedIn",
    "contact.cv": "CV (PDF)",
    "contact.location": "Location",

    "footer.built": "Built with plain HTML, CSS and JavaScript. Hosted on GitHub Pages.",
    "lightbox.close": "Close",
    "changelog.title": "Changelog",
    "changelog.open": "What's new on this site",
  },
  cs: {
    "meta.title": "Michal Štěpán · Senior GenAI Application Engineer",
    "meta.description": "Michal Štěpán staví produkční GenAI aplikace od začátku do konce: LLM/RAG/agenty, deterministickou validaci, evaluaci na golden datasetech, MCP, FastAPI a nasazení na Azure a GCP.",
    "nav.about": "O mně",
    "nav.skills": "Dovednosti",
    "nav.experience": "Praxe",
    "nav.gravity": "Gravity",
    "nav.projects": "Projekty",
    "nav.rag": "LLM v praxi",
    "nav.chat": "Chat",
    "nav.education": "Vzdělání",
    "nav.contact": "Kontakt",
    "nav.menu": "Menu",
    "lang.switch": "English",
    "lang.switchTitle": "Switch to English",
    "bg.choose": "Vybrat pozadí",
    "bg.title": "Pozadí",
    "bg.meadow": "Louka",
    "bg.forest": "Les za soumraku",
    "bg.sea": "Moře",
    "bg.space": "Vesmír",
    "bg.nebula": "Mlhovina",
    "bg.paper": "Papír",
    "scene.meadow": "Přejeď po trávě, kliknutím zasadíš kytku",
    "scene.forest": "Světlušky letí za kurzorem, kliknutím přibudou",
    "scene.sea": "Klikni do nebe pro racka, na vodu pro vlnky",
    "scene.orbits": "Klikni do oblohy a vypusť planetu",
    "skip": "Přeskočit na obsah",

    "hero.kicker": "Senior GenAI Application Engineer · LLM/RAG/agenti · Python/FastAPI · Azure a GCP",
    "hero.tagline": "Stavím produkční GenAI aplikace od začátku do konce: retrieval a agenty, deterministickou validaci, evaluaci, bezpečná API a cloudové nasazení. Pracuji napříč architekturou, backendem, kvalitou i provozem.",
    "hero.cv": "Stáhnout CV (PDF)",
    "hero.chat": "Chat s mým CV",
    "hero.youtube": "YouTube",
    "hero.patreon": "Patreon",
    "hero.studio": "Tojin Games · moje studio",
    "hero.now.label": "Aktuálně",
    "hero.now.big": "Senior GenAI Application Engineer · ABB",
    "hero.now.1": "Produkční LLM, RAG a agentní aplikace pro průmyslové inženýrství",
    "hero.now.2": "Evaluace na golden datasetech plus deterministická validace",
    "hero.now.3": "FastAPI, Azure AI/OpenAI, MCP a CI/CD",

    "about.title": "O mně",
    "about.fact1.b": "Senior GenAI Application Engineer",
    "about.fact1.s": "ABB, od roku 2025",
    "about.fact2.b": "Produkční GenAI na Azure",
    "about.fact2.s": "OpenAI / AI Foundry / Agents, Container Apps, Key Vault",
    "about.fact3.b": "Python aplikační stack",
    "about.fact3.s": "FastAPI, Pandas, Pytest, PostgreSQL, Redis, Neo4j",
    "about.fact4.b": "Tojin Games",
    "about.fact4.s": "Moje technická laboratoř: agenti, simulace a cloud platforma",
    "about.p1": "Stavím produkční GenAI aplikace od začátku do konce. V ABB pracuji jako Senior GenAI Application Engineer na průmyslových inženýrských workflow: extrakci dokumentů a RAG, strukturované LLM validaci vedle deterministických pravidel a agentních asistentech. Pracuji napříč architekturou, evaluací, backendem a nasazením: golden datasety a akceptační/výkonnostní testy, FastAPI služby, Azure OpenAI / AI Foundry a Azure AI Agents a CI/CD do Azure Container Apps s Key Vaultem a Log Analytics. Stavím také MCP integrace, přes které AI coding asistenti pracují přímo s týmovými nástroji. Chci se dál posouvat k technickému ownershipu a GenAI architektuře.",
    "about.p2": "Předtím jsem tři roky pracoval jako freelance backend a datový inženýr pro klienty z energetiky, telekomunikací a výroby (DTSE, Landis+Gyr, Vendavo) a ještě dřív jsem stavěl systémy pro energetický management a analytiku v Siemensu a ABB. Kořeny mám v energetice: osm let v teplárenské distribuční společnosti, naposledy jako technický zástupce s týmem přes patnáct lidí, mě naučilo, co znamená spolehlivý provoz.",
    "about.p3": "Mimo práci vedu Tojin Games, jednočlennou technickou laboratoř pro vědecké, vesmírné a strategické hry. Zkouším v ní lokální LLM agenty, deterministickou validaci, pgvector paměť, numerické simulace a cloudovou architekturu. Webové hry sdílejí mou vlastní autentizační službu ve FastAPI: Patreon OAuth 2.0 se přes jednorázové kódy mění na krátkodobé RS256 JWT a hry drží jen veřejný ověřovací klíč. Služby běží na Google Cloud Run se Secret Managerem a Terraformem. Projekty používám také pro AI-assisted development, automatické testovací boty a lokální generativní modely.",

    "skills.title": "Dovednosti",
    "skills.lead": "S čím pracuji dnes a s čím jsem pracoval dřív.",

    "experience.title": "Praxe",
    "experience.stack": "Stack",

    "gravity.title": "Gravity",
    "gravity.kicker": "Fyzikální sandbox · web a Android · 2D i 3D",
    "gravity.intro": "Vesmír neřídíte. Jen počáteční podmínky. Gravity je newtonovský sandbox s jedinou mechanikou: nastavte rychlost jednomu malému asteroidu, zvolte okamžik vypuštění a sledujte, co skutečná gravitace udělá. Deset kapitol příběhu dovede tentýž průlet od asteroidu až ke srážce dvou černých děr. Simulace je ručně psaná: symetrické síly, zachovaný moment hybnosti, srážky, které slučují nebo odrážejí, protože to říká fyzika. Každý level je ověřený, že se dá vyhrát a nikdy se nevyhraje sám.",
    "gravity.gallery": "Screenshoty",
    "gravity.videos": "Videa",
    "gravity.free": "Bez reklam, anglicky a česky. Na webu jsou prolog a první kapitola zdarma a zbytek odemkne Patreon; verze pro Android jsou zdarma, fungují offline a nesbírají žádná data.",
    "gravity.soon": "Brzy na Google Play",

    "projects.title": "Další projekty",
    "projects.lead": "Vedlejší projekty, které sdílejí nápady s prací: agenti, lokální modely, numerické simulace a generovaná média. Kód je soukromý; živé verze a videa jsou veřejné. V prohlížečových hrách je začátek zdarma a zbytek odemknou podporovatelé na Patreonu.",

    "rag.title": "LLM aplikace v praxi",
    "rag.lead": "Šest věcí, které jsem se naučil při stavbě LLM aplikací a agentů, v práci i ve svých hrách.",

    "chat.title": "Chat s mým CV",
    "chat.intro": "Zeptejte se na moji praxi, dovednosti a projekty, nebo na praktické věci, které zajímají HR: platová očekávání, práci na dálku, vedení týmu, koníčky. Model běží celý ve vašem prohlížeči přes WebGPU: stáhne se jednou (pak je v cache) a nic z toho, co napíšete, neopustí vaše zařízení. Je to malý model a může se mýlit; zdrojem pravdy je CV v PDF.",
    "chat.model": "Model",
    "chat.model.small": "Rychlý · Qwen2.5 0.5B · stažení asi 0,4 GB",
    "chat.model.large": "Lepší odpovědi · Qwen2.5 1.5B · stažení asi 1 GB",
    "chat.start": "Načíst model a začít",
    "chat.loading": "Načítám model…",
    "chat.ready": "Model je připravený. Ptejte se.",
    "chat.placeholder": "Napište otázku…",
    "chat.send": "Odeslat",
    "chat.stop": "Zastavit",
    "chat.clear": "Vymazat",
    "chat.suggest": "Zkuste:",
    "chat.nogpu": "Váš prohlížeč nenabízí WebGPU, takže model tu nemůže běžet. Funguje Chrome nebo Edge 113+ na počítači nebo novější Safari. Vše, co by model řekl, najdete v CV v PDF.",
    "chat.error": "Při načítání modelu se něco pokazilo. Obnovte stránku a zkuste to znovu, nebo zvolte menší model.",
    "chat.thinking": "Přemýšlím…",
    "chat.privacy": "Běží lokálně · bez serveru · bez sledování",

    "education.title": "Vzdělání a certifikáty",
    "education.degrees": "Tituly",
    "education.certs": "Certifikáty a školení",
    "education.langs": "Jazyky",
    "education.thesis": "Práce",

    "contact.title": "Kontakt",
    "contact.lead": "Nejrychlejší je e-mail. Sídlím u Ostravy a pracuji s remote týmy po celé Evropě.",
    "contact.email": "E-mail",
    "contact.youtube": "YouTube",
    "contact.patreon": "Patreon",
    "contact.linkedin": "LinkedIn",
    "contact.cv": "CV (PDF)",
    "contact.location": "Kde",

    "footer.built": "Postaveno v čistém HTML, CSS a JavaScriptu. Hostováno na GitHub Pages.",
    "lightbox.close": "Zavřít",
    "changelog.title": "Co je nového",
    "changelog.open": "Co je na webu nového",
  },
};

/* ---------- structured, bilingual data rendered by main.js ---------- */
window.DATA = {
  skills: [
    {
      title: { en: "GenAI & LLM applications", cs: "GenAI a LLM aplikace" },
      items: ["Azure OpenAI / AI Foundry", "Azure AI Agents", "RAG / retrieval (Azure AI Search, ChromaDB)", "Document Intelligence", "Structured outputs", "LLM + deterministic rules", "Golden datasets & evaluation", "Model Context Protocol (MCP) / FastMCP", "LLM agents on local models (Ollama)", "pgvector memory", "Claude Code", "GitHub Copilot"],
    },
    {
      title: { en: "Cloud & delivery", cs: "Cloud a nasazení" },
      items: ["Azure Container Apps", "Container Registry", "Key Vault · managed identity", "Log Analytics", "Blob & Table Storage", "Azure DevOps / Pipelines", "GCP Cloud Run", "Secret Manager", "Terraform (GCP)", "Docker", "OAuth 2.0 / RS256 JWT"],
    },
    {
      title: { en: "Programming & testing", cs: "Programování a testy" },
      items: ["Python", "FastAPI", "Pandas", "Pytest", "SQL / PostgreSQL", "Redis", "Neo4j", "NiceGUI", "Vue 3", "Playwright", "Load & stress tests", "NumPy / SciPy"],
    },
    {
      title: { en: "Worked with earlier", cs: "Dříve jsem pracoval s" },
      items: ["LangChain", "LangGraph", "Dagster", "Airflow", "DuckDB", "BigQuery", "RabbitMQ", "Kubernetes", "GitLab CI", "GitHub Actions", "Flask", "Streamlit", "AWS S3 · Lambda", "Azure Functions", "Grafana", "Power BI", "Kotlin · WebGL2", "ARIMA / SARIMA"],
    },
  ],

  experience: [
    {
      company: "ABB s.r.o.",
      role: { en: "Senior GenAI Application Engineer", cs: "Senior GenAI Application Engineer" },
      period: { en: "Sep 2025 – present", cs: "září 2025 – dosud" },
      current: true,
      bullets: {
        en: [
          "Build production GenAI applications for industrial engineering workflows: document extraction and RAG, structured LLM validation, and agent-based assistants using Azure OpenAI / AI Foundry and Azure AI Agents.",
          "Own quality and evaluation for AI features: golden datasets, acceptance evaluation, deterministic rule checks, performance and stress tests, and cloud-vs-local model comparison through Ollama.",
          "Develop Python/FastAPI backends and application services; work with PostgreSQL, Redis and Neo4j where the product architecture requires relational, cache/session and graph data.",
          "Deliver through Azure Pipelines across dev, test, stage and prod; Docker images in Container Registry, Azure Container Apps, Key Vault via managed identity and Log Analytics.",
          "Built a proof-of-concept MCP server (Python, FastMCP) that gives AI coding assistants such as Claude Code and GitHub Copilot controlled access to Azure DevOps work items, with a mock API and tests.",
        ],
        cs: [
          "Stavím produkční GenAI aplikace pro průmyslové inženýrské workflow: extrakci dokumentů a RAG, strukturovanou LLM validaci a agentní asistenty nad Azure OpenAI / AI Foundry a Azure AI Agents.",
          "Mám na starosti kvalitu a evaluaci AI funkcí: golden datasety, akceptační evaluaci, deterministické kontroly, výkonnostní a zátěžové testy a porovnání cloudových a lokálních modelů přes Ollamu.",
          "Vyvíjím backendy a aplikační služby v Pythonu/FastAPI; podle architektury pracuji s PostgreSQL, Redisem a Neo4j pro relační data, cache/relace a grafová data.",
          "Nasazuji přes Azure Pipelines do dev, test, stage a prod; Docker image v Container Registry, Azure Container Apps, Key Vault přes managed identity a Log Analytics.",
          "Postavil jsem proof of concept MCP serveru (Python, FastMCP), přes který AI coding asistenti jako Claude Code a GitHub Copilot řízeně pracují s work itemy v Azure DevOps, s mock API a testy.",
        ],
      },
      stack: "Python · FastAPI · Azure OpenAI / AI Foundry · Azure AI Agents · RAG · ChromaDB · Document Intelligence · PostgreSQL · Redis · Neo4j · Pandas · Pytest · Docker · Azure Container Apps · Key Vault · Azure Pipelines · MCP · Ollama",
    },
    {
      company: { en: "Freelance", cs: "Freelance" },
      role: { en: "Software / Data Engineer", cs: "Software / Data Engineer" },
      period: { en: "Sep 2022 – Sep 2025", cs: "září 2022 – září 2025" },
      note: { en: "DTSE, Landis+Gyr, Vendavo and other clients in energy, telecom and manufacturing", cs: "DTSE, Landis+Gyr, Vendavo a další klienti z energetiky, telekomunikací a výroby" },
      bullets: {
        en: [
          "End-to-end data workflows in Python, orchestrated with Dagster and Airflow, stored in PostgreSQL, DuckDB and BigQuery.",
          "Backend components for high-volume ingestion and message-based processing with RabbitMQ.",
          "Migration of services from Kubernetes to cloud-native GCP (Cloud Run, GCS, BigQuery).",
          "CI/CD in GitLab CI and GitHub Actions with unit, integration and end-to-end tests in Pytest.",
          "High-performance processing pipelines for recommender systems; L2 support for production systems.",
        ],
        cs: [
          "End-to-end datové workflow v Pythonu, orchestrace v Dagsteru a Airflow, úložiště PostgreSQL, DuckDB a BigQuery.",
          "Backendové komponenty pro objemový ingest a zpracování zpráv přes RabbitMQ.",
          "Migrace služeb z Kubernetes na cloud-native GCP (Cloud Run, GCS, BigQuery).",
          "CI/CD v GitLab CI a GitHub Actions, unit, integrační a end-to-end testy v Pytestu.",
          "Výkonné pipeline pro doporučovací systémy; L2 podpora produkčních systémů.",
        ],
      },
      stack: "Python · Dagster · Airflow · PostgreSQL · DuckDB · BigQuery · RabbitMQ · GCP · GitLab CI · GitHub Actions",
    },
    {
      company: "Siemens s.r.o.",
      role: { en: "Senior Software Developer", cs: "Senior Software Developer" },
      period: { en: "Jan 2021 – Aug 2022", cs: "leden 2021 – srpen 2022" },
      bullets: {
        en: [
          "Energy Management System consolidating and analysing data from many sources.",
          "ARIMA and SARIMA models for time-series forecasting.",
          "Mentoring junior developers.",
        ],
        cs: [
          "Systém energetického managementu konsolidující a analyzující data z mnoha zdrojů.",
          "Modely ARIMA a SARIMA pro predikci časových řad.",
          "Mentoring juniorních vývojářů.",
        ],
      },
      stack: "Python · Flask · FastAPI · Docker · PostgreSQL · Grafana · Power BI · RabbitMQ · AWS S3 · AWS Lambda",
    },
    {
      company: "ABB s.r.o.",
      role: { en: "Software Project Engineer", cs: "Software Project Engineer" },
      period: { en: "Oct 2018 – Jan 2021", cs: "říjen 2018 – leden 2021" },
      bullets: {
        en: [
          "System for evaluating water and energy consumption.",
          "Design and implementation of predictive-analytics features.",
        ],
        cs: [
          "Systém pro vyhodnocování spotřeby vody a energií.",
          "Návrh a implementace funkcí prediktivní analytiky.",
        ],
      },
      stack: "Python · Docker · PostgreSQL · Azure Functions · Azure Blob Storage · Grafana · Power BI",
    },
    {
      company: "DISTEP a.s.",
      role: { en: "IT Specialist · Power Engineer · Technical Deputy", cs: "IT specialista · energetik · technický zástupce" },
      period: { en: "May 2010 – Oct 2018", cs: "květen 2010 – říjen 2018" },
      bullets: {
        en: [
          "As technical deputy, led a team of more than fifteen people in operations.",
          "Streamlined data collection with PDA barcode readers.",
          "Operations of water and heat distribution.",
          "Better resource efficiency through optimised calculations and monitoring.",
        ],
        cs: [
          "Jako technický zástupce vedení týmu více než patnácti lidí v provozu.",
          "Zefektivnění sběru dat pomocí PDA čteček čárových kódů.",
          "Provoz distribuce vody a tepla.",
          "Vyšší efektivita zdrojů díky optimalizovaným výpočtům a monitoringu.",
        ],
      },
      stack: "MS SQL · VBA",
    },
  ],

  gravityApps: [
    {
      name: "Gravity 3D",
      platform: { en: "Web · Python + NiceGUI", cs: "Web · Python + NiceGUI" },
      image: "assets/img/gravity-3d-feature.jpg",
      icon: "assets/img/gravity-3d-icon.png",
      desc: {
        en: "Python, NiceGUI and one HTML5 canvas. The perspective projection is about fifty lines of maths, no WebGL. The simulation runs in the browser in a JavaScript copy of the Python engine that tests keep bit-identical, and the server replays every win before it counts. Twenty-one levels, including two Voyager missions and the real Solar System from JPL elements: orbit the camera, aim in the ecliptic and watch the grid sag into the real gravitational potential. Runs on Google Cloud Run, deployed with Terraform.",
        cs: "Python, NiceGUI a jeden HTML5 canvas. Perspektivní projekce je padesát řádků matematiky, bez WebGL. Simulace běží v prohlížeči, v JavaScriptové kopii pythonového enginu, kterou testy drží bitově shodnou, a server každou výhru před započtením přehraje. Jednadvacet levelů včetně dvou misí Voyageru a skutečné Sluneční soustavy z elementů JPL: otočte kameru, miřte v rovině ekliptiky a sledujte, jak se mřížka prohne do skutečného gravitačního potenciálu. Běží na Google Cloud Run, nasazeno přes Terraform.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.gravityWeb3d", primary: true },
      ],
    },
    {
      name: "Gravity",
      platform: { en: "Web · Python + NiceGUI · 2D", cs: "Web · Python + NiceGUI · 2D" },
      image: "assets/img/gravity-2d-feature.jpg",
      icon: "assets/img/gravity-2d-icon.png",
      desc: {
        en: "The original and the reference implementation. Python, NiceGUI and a single canvas; the physics core is deterministic, with no external engine, and the Android engine is tested against it. Ten chapters and free-play scenarios, progress kept in the browser.",
        cs: "Původní verze a referenční implementace. Python, NiceGUI a jeden canvas; fyzikální jádro je deterministické, bez externího enginu, a engine pro Android se testuje proti němu. Deset kapitol a volné scénáře, postup uložený v prohlížeči.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.gravityWeb2d", primary: true },
      ],
    },
    {
      name: "Gravity",
      platform: { en: "Android · Kotlin + Compose · 2D", cs: "Android · Kotlin + Compose · 2D" },
      image: "assets/img/shots/2d-03.jpg",
      icon: "assets/img/gravity-2d-icon.png",
      desc: {
        en: "Native Kotlin and Jetpack Compose. A hand-written Velocity Verlet integrator on a fixed timestep; the engine is a pure Kotlin module with no Android dependency, so every level is verified fair by a test before it ships. Runs at about 60 fps on a Galaxy S24 FE and is in closed testing on Google Play.",
        cs: "Nativní Kotlin a Jetpack Compose. Ručně psaný integrátor Velocity Verlet s pevným krokem; engine je čistý Kotlin modul bez závislosti na Androidu, takže každý level před vydáním ověří test, že je férový. Na Galaxy S24 FE běží kolem 60 fps a je v uzavřeném testování na Google Play.",
      },
      links: [
        { label: { en: "Google Play", cs: "Google Play" }, url: "links.play2d", primary: true, soon: true },
      ],
    },
    {
      name: "Gravity 3D",
      platform: { en: "Android · Kotlin + Compose · 3D", cs: "Android · Kotlin + Compose · 3D" },
      image: "assets/img/shots/3d-03.jpg",
      icon: "assets/img/gravity-3d-icon.png",
      desc: {
        en: "The 3D game on a phone: one finger aims, two fingers orbit the camera and pinch to zoom. Ten story chapters and ten free-play boards, including Jupiter's ladder of moons and the moving division in Saturn's ring. A golden-trace test proves the Kotlin engine flies the same trajectories as the Python one.",
        cs: "3D hra v telefonu: jeden prst míří, dva prsty otáčejí kameru a přibližují. Deset kapitol příběhu a deset volných scén včetně žebříku Jupiterových měsíců a pohyblivé mezery v Saturnově prstenci. Golden-trace test ověřuje, že Kotlin engine letí po stejných drahách jako ten v Pythonu.",
      },
      links: [
        { label: { en: "Google Play", cs: "Google Play" }, url: "links.play3d", primary: true, soon: true },
      ],
    },
  ],

  gallery: [
    { src: "assets/img/shots/3d-01.jpg", caption: { en: "Inclined orbit (3D)", cs: "Nakloněná dráha (3D)" } },
    { src: "assets/img/shots/3d-02.jpg", caption: { en: "Aiming (3D)", cs: "Míření (3D)" } },
    { src: "assets/img/shots/3d-03.jpg", caption: { en: "Gravity well (3D)", cs: "Gravitační studna (3D)" } },
    { src: "assets/img/shots/3d-04.jpg", caption: { en: "Saturn (3D)", cs: "Saturn (3D)" } },
    { src: "assets/img/shots/3d-05.jpg", caption: { en: "Two black holes (3D)", cs: "Dvě černé díry (3D)" } },
    { src: "assets/img/shots/3d-06.jpg", caption: { en: "The story (3D)", cs: "Příběh (3D)" } },
    { src: "assets/img/shots/2d-01.jpg", caption: { en: "The board (2D)", cs: "Hrací plocha (2D)" } },
    { src: "assets/img/shots/2d-02.jpg", caption: { en: "Aiming (2D)", cs: "Míření (2D)" } },
    { src: "assets/img/shots/2d-03.jpg", caption: { en: "The flyby (2D)", cs: "Průlet (2D)" } },
    { src: "assets/img/shots/2d-04.jpg", caption: { en: "Solved (2D)", cs: "Vyřešeno (2D)" } },
    { src: "assets/img/shots/2d-05.jpg", caption: { en: "The story (2D)", cs: "Příběh (2D)" } },
  ],

  projects: [
    {
      name: "Jednota",
      sub: { en: "4X strategy with LLM agents", cs: "4X strategie s LLM agenty" },
      image: "assets/img/jednota-ui.jpg",
      tags: ["Python", "NiceGUI", "Ollama", "pgvector", "LLM agents", "Playwright", "ComfyUI"],
      desc: {
        en: "A galactic 4X strategy in the spirit of the classic 90s games. An invasion from beyond the galaxy is coming and no race can stop it alone: unify the galaxy by diplomacy or conquest, then destroy the invasion fleet and free the occupied systems. Every empire's strategist, every diplomatic envoy and every fleet admiral is an agent on a local LLM through Ollama. Deterministic rules check each decision before it takes effect; in a measured five-empire campaign they accepted 93 of 93 strategic, 80 of 88 diplomatic and 79 of 86 tactical decisions. Agents remember earlier games through a pgvector store of chronicles, and recorded decisions let replays run without the model. About 73,000 lines of Python and 1,300 tests. In development, not publicly playable yet.",
        cs: "Galaktická 4X strategie v duchu klasik z 90. let. Z hlubin vesmíru přichází invaze a žádná rasa ji sama nezastaví: sjednoťte galaxii diplomacií nebo dobytím, pak zničte invazní flotilu a osvoboďte obsazené systémy. Stratég každé říše, každý diplomatický vyslanec i každý admirál flotily je agent na lokálním LLM přes Ollamu. Deterministická pravidla každé rozhodnutí ověří, než se projeví; v měřené kampani pěti říší přijala 93 z 93 strategických, 80 z 88 diplomatických a 79 z 86 taktických rozhodnutí. Agenti si pamatují minulé hry přes pgvector úložiště kronik a zaznamenaná rozhodnutí umožňují přehrát hru bez modelu. Zhruba 73 000 řádků Pythonu a 1 300 testů. Ve vývoji, zatím není veřejně hratelná.",
      },
      links: [
        { label: { en: "Battle video", cs: "Video z bitvy" }, url: "https://www.youtube.com/watch?v=0FKwCZZLfEc", primary: true },
        { label: { en: "Soundtrack", cs: "Soundtrack" }, url: "https://www.youtube.com/watch?v=Dmcpzly1iZg" },
      ],
    },
    {
      name: "Orbit",
      sub: { en: "Orbital mechanics in the real Solar System", cs: "Orbitální mechanika ve skutečné Sluneční soustavě" },
      image: "assets/img/projects/orbit.webp",
      tags: ["Python", "NiceGUI", "WebGL2", "Kepler", "GCP Cloud Run", "Terraform"],
      desc: {
        en: "You change your orbit, and the orbit takes you there. Rendezvous, docking and transfers to the Moon, Jupiter and Saturn in the real Solar System at real scale, with twelve hulls including NASA's own Apollo, Soyuz and Gemini models. Kepler's equation, patched conics, finite burns and six WebGL2 shader programs are hand-written, with no engine. Each of the 23 missions is verified by flying it, checking that doing nothing fails, and flying it again with timing and burn errors. The first act is free; Patreon unlocks the rest.",
        cs: "Změníte dráhu a dráha vás tam dovede. Setkání, dokování a přelety k Měsíci, Jupiteru a Saturnu ve skutečné Sluneční soustavě ve skutečném měřítku, s dvanácti loděmi včetně NASA modelů Apolla, Sojuzu a Gemini. Keplerova rovnice, navazující kuželosečky, konečné zážehy i šest shaderových programů ve WebGL2 jsou ručně psané, bez enginu. Každá z 23 misí je ověřená skutečným proletěním, kontrolou, že nečinnost selže, a opakovaným letem s chybami v čase a tahu. První dějství je zdarma, zbytek odemkne Patreon.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.orbitWeb", primary: true },
        { label: { en: "Video", cs: "Video" }, url: "https://www.youtube.com/watch?v=CAu629pTp_4" },
      ],
    },
    {
      name: "HoldMyPlazma",
      sub: { en: "Plasma confinement game", cs: "Hra o udržení plazmatu" },
      image: "assets/img/projects/holdmyplazma.webp",
      tags: ["Python", "NiceGUI", "NumPy", "SciPy", "Biot–Savart"],
      desc: {
        en: "Hold plasma with magnets: choose the coils, current, radius and tilt, fire a shot and read what happened from Langmuir-probe diagnostics. Magnetic fields from Biot–Savart, field-line tracing with Poincaré sections, the q(r) profile and a 0-D energy balance, calibrated against my own research on the CASTOR tokamak, with presets for CASTOR, COMPASS, ITER and Wendelstein 7-X. Eleven scenarios from a straight tube and a magnetic bottle through a tokamak and a stellarator to an open research problem: where the heat leaving the plasma should go.",
        cs: "Udržte plazma magnety: zvolte cívky, proud, poloměr a náklon, vystřelte a z diagnostiky Langmuirových sond vyčtěte, co se stalo. Magnetické pole z Biot–Savartova zákona, trasování siločar s Poincarého řezy, profil q(r) a 0-D energetická bilance, kalibrované podle mého vlastního výzkumu na tokamaku CASTOR, s předvolbami pro CASTOR, COMPASS, ITER a Wendelstein 7-X. Jedenáct scénářů od rovné trubice a magnetické láhve přes tokamak a stelarátor po otevřený výzkumný problém: kam odvést teplo, které z plazmatu uniká.",
      },
      links: [],
    },
    {
      name: "Quantum",
      sub: { en: "Wave mechanics sandbox", cs: "Sandbox vlnové mechaniky" },
      image: "assets/img/projects/quantum.jpg",
      tags: ["Python", "NiceGUI", "NumPy", "Split-step Fourier"],
      desc: {
        en: "Prepare a wave packet and let the Schrödinger equation decide. Eight scenes, from the double slit with a which-path detector and a double slit in time, through tunnelling and uncertainty, to string breaking, identical atoms on a beam splitter and an open question: how long does tunnelling take? The split-step Fourier integrator is hand-written with no quantum library, and tests compare it against analytic solutions.",
        cs: "Připravte vlnový balík a nechte rozhodnout Schrödingerovu rovnici. Osm scén, od dvojštěrbiny s detektorem dráhy a dvojštěrbiny v čase přes tunelování a relace neurčitosti po trhání struny, identické atomy na děliči svazku a otevřenou otázku, jak dlouho tunelování trvá. Integrátor split-step Fourier je ručně psaný bez kvantové knihovny a testy ho porovnávají s analytickými řešeními.",
      },
      links: [],
    },
    {
      name: "Starforge",
      sub: { en: "Hard sci-fi incremental strategy", cs: "Hard sci-fi budovatelská strategie" },
      image: "assets/img/projects/starforge.webp",
      tags: ["Python", "NiceGUI", "Canvas", "GCP Cloud Run", "Cloud Storage", "Terraform"],
      desc: {
        en: "From a single orbital station to mining Mercury and the first Dyson-swarm collector, in real units: joules, watts, kilograms. Ten scripted bot strategies prove the economy can be finished, eight hours of offline progress are computed analytically in about a millisecond, and versioned saves follow a signed-in player across devices. Chapter I is free; Patreon unlocks the rest.",
        cs: "Od jediné orbitální stanice po těžbu na Merkuru a první kolektor Dysonova roje, ve skutečných jednotkách: joulech, wattech, kilogramech. Deset skriptovaných botů dokazuje, že se ekonomika dá dohrát, osm hodin offline postupu se spočítá analyticky zhruba za milisekundu a verzované savy jdou s přihlášeným hráčem mezi zařízeními. První kapitola je zdarma, zbytek odemkne Patreon.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.starforgeWeb", primary: true },
        { label: { en: "Trailer", cs: "Trailer" }, url: "https://www.youtube.com/watch?v=z9QhHmhaYA0" },
      ],
    },
    {
      name: "MyZoo",
      sub: { en: "Zoo and animal-care simulation", cs: "Simulace zoo a péče o zvířata" },
      image: "assets/img/projects/myzoo.webp",
      tags: ["Python", "NiceGUI", "GCP Cloud Run", "Flux", "Wan 2.2"],
      desc: {
        en: "From one enclosure to a wildlife institute. Animals keep their names and personalities, and welfare comes from real causes rather than a meter. Up to eight hours of offline simulation, a bot that plays to five stars, and art and animated loops generated locally with Flux and Wan 2.2. The first chapter is free; Patreon unlocks the rest.",
        cs: "Od jednoho výběhu po institut pro divokou přírodu. Zvířata mají jména a povahy a jejich pohoda vychází ze skutečných příčin, ne z ukazatele. Až osm hodin offline simulace, bot, který hru dohraje na pět hvězd, a art i animace generované lokálně přes Flux a Wan 2.2. První kapitola je zdarma, zbytek odemkne Patreon.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.myzooWeb", primary: true },
        { label: { en: "Trailer", cs: "Trailer" }, url: "https://www.youtube.com/watch?v=N7I-aePNBMw" },
      ],
    },
    {
      name: "My Garden",
      sub: { en: "Ecosystem-building game", cs: "Hra o budování ekosystému" },
      image: "assets/img/projects/mygarden.jpg",
      tags: ["Python", "NiceGUI", "SVG", "GCP Cloud Run", "ComfyUI"],
      desc: {
        en: "Start by looking after one snail and grow a self-sustaining garden in five phases: soil, pests and predators, pollinators. The garden keeps living while you are away, and an inspector explains where every number comes from. Bots with four play styles and 800 simulated games test the balance. The first two phases are free; Patreon unlocks the rest.",
        cs: "Začnete péčí o jednoho šneka a v pěti fázích vypěstujete soběstačnou zahradu: půda, škůdci a predátoři, opylovači. Zahrada žije, i když jste pryč, a inspektor vysvětlí, odkud se bere každé číslo. Boti se čtyřmi styly hry a 800 simulovaných her testují vyváženost. První dvě fáze jsou zdarma, zbytek odemkne Patreon.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.mygardenWeb", primary: true },
        { label: { en: "Video", cs: "Video" }, url: "https://www.youtube.com/watch?v=6L86hMXRAcg" },
      ],
    },
    {
      name: "Tojin platform",
      sub: { en: "One login, five games, a video pipeline", cs: "Jedno přihlášení, pět her, video pipeline" },
      tags: ["FastAPI", "OAuth 2.0", "JWT", "GCP Cloud Run", "Secret Manager", "Terraform", "Playwright", "ffmpeg"],
      desc: {
        en: "The shared layer behind the web games. A FastAPI service completes Patreon OAuth 2.0, maps membership to internal entitlements and signs short-lived RS256 JWTs. Browser redirects carry only a hashed, one-time code with a 60-second TTL; the game server exchanges it for the JWT, while the Patreon access token is never stored and each game holds only the public verification key/JWKS. Cloud Run reads the Patreon secret and RSA private key from Secret Manager, provisioned with Terraform. A separate code-driven pipeline records real gameplay in 4K through Playwright/CDP, adds local TTS and validates output before upload.",
        cs: "Společná vrstva pod webovými hrami. Služba ve FastAPI dokončí Patreon OAuth 2.0, převede členství na interní oprávnění a podepíše krátkodobý RS256 JWT. Přesměrování v prohlížeči nese jen hashovaný jednorázový kód s TTL 60 sekund; herní server ho vymění za JWT, Patreon access token se nikde neukládá a každá hra drží jen veřejný ověřovací klíč/JWKS. Cloud Run načítá Patreon secret a RSA private key ze Secret Manageru vytvořeného přes Terraform. Samostatná pipeline řízená kódem nahrává skutečný gameplay ve 4K přes Playwright/CDP, přidává lokální TTS a výstup před uploadem automaticky ověřuje.",
      },
      links: [
        { label: { en: "YouTube", cs: "YouTube" }, url: "https://www.youtube.com/@tojin111", primary: true },
        { label: { en: "Patreon", cs: "Patreon" }, url: "https://www.patreon.com/cw/TojinGames" },
      ],
    },
  ],

  rag: [
    {
      title: { en: "Measure before tuning prompts", cs: "Nejdřív měřit, pak ladit prompty" },
      body: {
        en: "Golden datasets and an acceptance evaluation come first, for retrieval as much as for the model. Whether retrieval is hybrid search in Azure AI Search or a ChromaDB pipeline, it gets measured before prompts are tuned; a new prompt, model or retrieval strategy counts as better only when the numbers say so.",
        cs: "Nejdřív golden datasety a akceptační evaluace, pro retrieval stejně jako pro model. Ať jde o hybridní vyhledávání v Azure AI Search nebo pipeline nad ChromaDB, měří se dřív, než se ladí prompty; nový prompt, model nebo retrieval strategie je lepší, jen když to ukážou čísla.",
      },
    },
    {
      title: { en: "Rules first, the model for judgement", cs: "Nejdřív pravidla, model na úsudek" },
      body: {
        en: "Deterministic checks from a YAML rule catalogue run next to the LLM validators, and structured outputs keep the model's answers machine-checkable. In Jednota the same idea: rules validate every agent decision, with no agent framework in between.",
        cs: "Deterministické kontroly z katalogu pravidel v YAML běží vedle LLM validátorů a strukturované výstupy drží odpovědi modelu strojově ověřitelné. V Jednotě stejný princip: pravidla ověří každé rozhodnutí agenta, bez agentního frameworku mezi tím.",
      },
    },
    {
      title: { en: "Give assistants tools, not copies", cs: "Asistentům nástroje, ne kopie" },
      body: {
        en: "An MCP server lets AI coding assistants such as Claude Code and GitHub Copilot read the team's work items themselves instead of a pasted copy. A mock of the API keeps it testable offline.",
        cs: "MCP server dovolí AI coding asistentům jako Claude Code a GitHub Copilot číst work itemy týmu přímo, ne jejich vloženou kopii. Mock API umožňuje testovat ho i offline.",
      },
    },
    {
      title: { en: "Shipped, not a prototype", cs: "Nasazené, ne prototyp" },
      body: {
        en: "FastAPI in Docker on Azure Container Apps, pipelines for dev, test, stage and prod, secrets in Key Vault through managed identity, telemetry in Log Analytics. On GCP the same with Cloud Run, Secret Manager and Terraform.",
        cs: "FastAPI v Dockeru na Azure Container Apps, pipeline pro dev, test, stage a prod, tajemství v Key Vaultu přes managed identity, telemetrie v Log Analytics. Na GCP totéž s Cloud Run, Secret Managerem a Terraformem.",
      },
    },
    {
      title: { en: "Local models with memory", cs: "Lokální modely s pamětí" },
      body: {
        en: "In Jednota every empire is an agent on a local LLM through Ollama, grounded in a pgvector lore store that also remembers earlier games. The same pattern as in the enterprise, with zero cloud.",
        cs: "V Jednotě je každá říše agent na lokálním LLM přes Ollamu, ukotvený v pgvector úložišti lore, které si pamatuje i dřívější hry. Stejný vzor jako ve firmě, jen bez cloudu.",
      },
    },
    {
      title: { en: "Right-sized: the chat on this page", cs: "Správná velikost: chat na této stránce" },
      body: {
        en: "A small instruction-tuned model runs in your browser through WebGPU with my CV as context. A one-page document does not need a vector index, so the whole system is a prompt and a model. Sizing RAG honestly is part of the job.",
        cs: "Malý instrukčně laděný model běží ve vašem prohlížeči přes WebGPU a jako kontext má moje CV. Jednostránkový dokument nepotřebuje vektorový index, takže celý systém je prompt a model. Poctivé dimenzování RAG je součást práce.",
      },
      link: "#chat",
    },
  ],

  degrees: [
    {
      school: { en: "VŠB – Technical University of Ostrava", cs: "VŠB – Technická univerzita Ostrava" },
      faculty: { en: "Faculty of Electrical Engineering and Computer Science", cs: "Fakulta elektrotechniky a informatiky" },
      degree: { en: "Ing. (MSc), Electrical Engineering and Computer Science", cs: "Ing., elektrotechnika a informatika" },
      year: "2012",
      thesis: { en: "VBA Utilization for Power Engineering Data Processing and Presentation", cs: "Využití jazyka VBA pro zpracování a prezentaci výsledků měření v elektroenergetice" },
    },
    {
      school: { en: "Czech Technical University in Prague", cs: "ČVUT v Praze" },
      faculty: { en: "Faculty of Nuclear Sciences and Physical Engineering", cs: "Fakulta jaderná a fyzikálně inženýrská" },
      degree: { en: "Bc., Nuclear Engineering", cs: "Bc., jaderné inženýrství" },
      year: "2009",
      thesis: { en: "Physical Analysis of Fast Reactor Cores in Up-to-Date Tendencies", cs: "Fyzikální analýza aktivních zón rychlých reaktorů v současných trendech" },
    },
    {
      school: { en: "Institute of Plasma Physics, Czech Academy of Sciences", cs: "Ústav fyziky plazmatu AV ČR" },
      faculty: { en: "Research project during the bachelor's degree, tokamak CASTOR", cs: "Výzkumný úkol během bakalářského studia, tokamak CASTOR" },
      degree: { en: "Electrostatic turbulence in the edge plasma of the CASTOR tokamak", cs: "Elektrostatická turbulence v okrajovém plazmatu tokamaku CASTOR" },
      year: "2006",
    },
  ],

  certs: [
    { name: "Cambridge English: First (FCE)", detail: { en: "Grade B · CEFR B2 · 2019", cs: "Grade B · CEFR B2 · 2019" } },
    { name: "Microsoft AZ-305", detail: { en: "Designing Microsoft Azure Infrastructure Solutions · training", cs: "Designing Microsoft Azure Infrastructure Solutions · školení" } },
    { name: "Microsoft AZ-400", detail: { en: "Designing and Implementing Microsoft DevOps Solutions · training", cs: "Designing and Implementing Microsoft DevOps Solutions · školení" } },
  ],

  languages: [
    { name: { en: "Czech", cs: "Čeština" }, level: { en: "native", cs: "rodilý mluvčí" } },
    { name: { en: "English", cs: "Angličtina" }, level: { en: "B2–C1", cs: "B2–C1" } },
  ],

  // Newest first. The header shows the version of the first entry.
  changelog: [
    {
      version: "1.6.0",
      date: "2026-09-20",
      items: {
        en: [
          "CV repositioned around production GenAI applications and technical ownership: LLM/RAG/agents, evaluation, deterministic validation and cloud delivery.",
          "ABB stack updated with Azure AI Agents and the application data layer (PostgreSQL, Redis, Neo4j); older LangChain/LangGraph experience moved out of the headline skills.",
          "Tojin platform now documents the real OAuth 2.0 -> one-time code -> RS256 JWT flow, Secret Manager and public-key verification.",
          "LinkedIn profile added to the contact section.",
        ],
        cs: [
          "CV je nově postavené kolem produkčních GenAI aplikací a technického ownershipu: LLM/RAG/agentů, evaluace, deterministické validace a cloudového nasazení.",
          "ABB stack doplněn o Azure AI Agents a aplikační datovou vrstvu (PostgreSQL, Redis, Neo4j); starší LangChain/LangGraph zkušenost se přesunula mimo hlavní skills.",
          "Tojin platforma teď popisuje skutečný tok OAuth 2.0 -> jednorázový kód -> RS256 JWT, Secret Manager a ověřování veřejným klíčem.",
          "Do kontaktů přidán LinkedIn profil.",
        ],
      },
    },
    {
      version: "1.5.1",
      date: "2026-09-19",
      items: {
        en: [
          "ABB role: RAG work since 2025 is back (Azure AI Search, LangChain, LangGraph, ChromaDB, Document Intelligence).",
          "A new look for the CV PDF, in the Meadow colours of this site.",
        ],
        cs: [
          "Pozice v ABB: zpátky je práce na RAG od roku 2025 (Azure AI Search, LangChain, LangGraph, ChromaDB, Document Intelligence).",
          "Nový vzhled CV v PDF v barvách Louky z tohoto webu.",
        ],
      },
    },
    {
      version: "1.5.0",
      date: "2026-09-19",
      items: {
        en: [
          "Profile, skills and the ABB role now describe the work I actually do: LLM applications with deterministic rules, golden-dataset evaluation, MCP servers and delivery on Azure.",
          "Tools from earlier jobs (Airflow, Dagster, LangChain and others) moved to a separate \"Worked with earlier\" group.",
          "Game facts corrected: eight games, and the Gravity engine checks described exactly as they run.",
        ],
        cs: [
          "Profil, dovednosti a pozice v ABB teď popisují práci, kterou opravdu dělám: LLM aplikace s deterministickými pravidly, evaluaci na golden datasetech, MCP servery a nasazení na Azure.",
          "Nástroje z dřívějších prací (Airflow, Dagster, LangChain a další) jsou v samostatné skupině „Dříve jsem pracoval s“.",
          "Opravené údaje o hrách: osm her a kontroly enginu Gravity popsané přesně tak, jak běží.",
        ],
      },
    },
    {
      version: "1.4.1",
      date: "2026-09-19",
      items: {
        en: [
          "Background fixes: animations no longer run at double speed after opening the page in a background tab, and scrolling on a phone no longer plants flowers or launches planets.",
          "Easier to read: deeper green (Meadow) and gold (Paper), the sun, moon and star move to the corner on phones, and keyboard focus is visible in the background menu.",
        ],
        cs: [
          "Opravy pozadí: animace po otevření v kartě na pozadí už neběží dvojnásobnou rychlostí a posouvání stránky na mobilu už nesází kytky ani nevypouští planety.",
          "Lepší čitelnost: sytější zelená (Louka) a zlatá (Papír), slunce, měsíc a hvězda jsou na mobilu v rohu a v menu pozadí je vidět fokus z klávesnice.",
        ],
      },
    },
    {
      version: "1.4.0",
      date: "2026-09-19",
      items: {
        en: [
          "Background picker in the header: Meadow (the new default), Forest at dusk, Sea, Space, Nebula and Paper.",
          "Each background has its own animation at the top: grass with flowers and butterflies, fireflies, waves, orbits or a starfield.",
          "The top of the page is a small playground: click to plant flowers, release gulls, light up fireflies or launch planets.",
          "It replaces the light / dark switch; the previous dark and light looks are now Space and Paper.",
        ],
        cs: [
          "Výběr pozadí v hlavičce: Louka (nové výchozí), Les za soumraku, Moře, Vesmír, Mlhovina a Papír.",
          "Každé pozadí má nahoře vlastní animaci: trávu s kytkami a motýly, světlušky, vlny, oběžné dráhy nebo hvězdy.",
          "Úvod stránky je malé hřiště: kliknutím sázíš kytky, vypouštíš racky, rozsvěcuješ světlušky nebo posíláš planety na oběžnou dráhu.",
          "Nahrazuje přepínač světlý / tmavý; dosavadní tmavý a světlý vzhled jsou teď Vesmír a Papír.",
        ],
      },
    },
    {
      version: "1.3.0",
      date: "2026-09-19",
      items: {
        en: [
          "Version number in the header; click it for this changelog.",
          "Section headings no longer carry numbers.",
        ],
        cs: [
          "Číslo verze v hlavičce; po kliknutí se otevře tento přehled změn.",
          "Nadpisy sekcí už nemají čísla.",
        ],
      },
    },
    {
      version: "1.2.0",
      date: "2026-09-19",
      items: {
        en: [
          "Tojin Games, my studio: YouTube and Patreon links in the intro and in contacts.",
          "Play links and videos for Starforge, MyZoo and My Garden; new Tojin platform card.",
          "Gravity 3D moved to Google Cloud Run.",
          "Two-page CV with a Tojin Games section.",
        ],
        cs: [
          "Tojin Games, moje studio: odkazy na YouTube a Patreon v úvodu i v kontaktech.",
          "Odkazy na hraní a videa u Starforge, MyZoo a My Garden; nová karta Tojin platform.",
          "Gravity 3D se přestěhovala na Google Cloud Run.",
          "Dvoustránkové CV se sekcí Tojin Games.",
        ],
      },
    },
    {
      version: "1.1.0",
      date: "2026-09-15",
      items: {
        en: [
          "All physics games and simulations: HoldMyPlazma, Orbit, Quantum, Starforge, MyZoo, My Garden.",
          "Android builds of Gravity marked as coming soon to Google Play.",
          "The CV chat answers practical recruiter questions: work mode, leadership, hobbies.",
        ],
        cs: [
          "Všechny fyzikální hry a simulace: HoldMyPlazma, Orbit, Quantum, Starforge, MyZoo, My Garden.",
          "Androidí verze Gravity označené jako brzy na Google Play.",
          "Chat s CV odpovídá na praktické otázky náborářů: způsob práce, vedení týmu, koníčky.",
        ],
      },
    },
    {
      version: "1.0.0",
      date: "2026-09-10",
      items: {
        en: [
          "First version: profile, skills, experience, Gravity showcase, RAG & LLM notes.",
          "English and Czech, dark and light theme.",
          "Chat with my CV, running a small language model right in the browser.",
        ],
        cs: [
          "První verze: profil, dovednosti, praxe, přehlídka Gravity, poznámky k RAG a LLM.",
          "Angličtina i čeština, tmavý i světlý režim.",
          "Chat s mým CV, který běží na malém jazykovém modelu přímo v prohlížeči.",
        ],
      },
    },
  ],

  chatSuggestions: {
    en: ["What does Michal do at ABB?", "What are his salary expectations?", "Does he work remotely?", "Has he led a team?", "What are his hobbies?", "Tell me about his physics simulations."],
    cs: ["Co dělá Michal v ABB?", "Jaké má platové představy?", "Pracuje na dálku?", "Vedl už tým?", "Jaké má koníčky?", "Řekni mi o jeho fyzikálních simulacích."],
  },
};
