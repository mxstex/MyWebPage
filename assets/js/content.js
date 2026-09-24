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
    iondriveWeb: "https://iondrive-tgz74cquha-ez.a.run.app",
    reactorWeb: "https://reactor-operator-tgz74cquha-ez.a.run.app",
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
    "meta.title": "Michal Štěpán · Senior GenAI Engineer · AI Solution Architecture",
    "meta.description": "Michal Štěpán turns ambiguous AI use cases into production systems: AI solution architecture, RAG and agents, deterministic validation, golden-dataset evaluation, MCP, FastAPI and delivery on Azure and GCP. Open to B2B / contract consulting.",
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

    "hero.kicker": "Senior GenAI Engineer · AI Solution Architecture · RAG & Agents · Python/FastAPI · Azure",
    "hero.tagline": "I turn ambiguous AI use cases into production systems: solution architecture, RAG and agents, deterministic validation, evaluation, secure APIs and cloud delivery. I work end to end across architecture, backend, quality and operations.",
    "hero.b2b": "Open to B2B / contract consulting",
    "hero.cv": "Download CV (PDF)",
    "hero.chat": "Chat with my CV",
    "hero.youtube": "YouTube",
    "hero.patreon": "Patreon",
    "hero.studio": "Tojin Games · my studio",
    "hero.now.label": "Currently",
    "hero.now.big": "Senior GenAI Application Engineer · ABB",
    "hero.now.1": "Production GenAI solutions for industrial engineering: architecture, implementation, evaluation, delivery",
    "hero.now.2": "Golden-dataset evaluation plus deterministic validation",
    "hero.now.3": "FastAPI, Azure AI/OpenAI, MCP and CI/CD",

    "about.title": "About",
    "about.fact1.b": "Senior GenAI Engineer",
    "about.fact1.s": "ABB since 2025 · open to B2B / contract consulting",
    "about.fact2.b": "Production GenAI on Azure",
    "about.fact2.s": "OpenAI / AI Foundry / Agents, Container Apps, Key Vault",
    "about.fact3.b": "Python application stack",
    "about.fact3.s": "FastAPI, Pandas, Pytest, PostgreSQL, Redis, Neo4j",
    "about.fact4.b": "Tojin Games",
    "about.fact4.s": "Live products, public demos and pre-release engineering: agents, simulations, cloud",
    "about.p1": "I turn ambiguous AI use cases into production systems. At ABB I work as a Senior GenAI Application Engineer on industrial engineering workflows, from use-case analysis and architecture through implementation, evaluation and cloud delivery: document extraction and RAG, structured LLM outputs with deterministic validation, agent-based assistants on Azure OpenAI / AI Foundry and Azure AI Agents, golden datasets and acceptance/performance tests, FastAPI services and CI/CD to Azure Container Apps with Key Vault and Log Analytics. I also build MCP integrations that let AI coding assistants work directly with team tools. I am strongest where AI must be reliable, testable and integrated into real business workflows, and I am open to B2B / contract work in GenAI engineering, AI solution architecture and production AI delivery.",
    "about.p2": "Before that I spent three years as a freelance backend and data engineer delivering B2B directly into client environments in energy, telecom and manufacturing (DTSE, Landis+Gyr, Vendavo), and earlier built energy-management and analytics systems at Siemens and ABB. My roots are in power engineering: eight years at a district heating utility, the last ones as technical deputy leading more than fifteen people, taught me what production reliability actually means. Altogether more than fifteen years across industrial software, data, cloud and energy.",
    "about.p3": "Outside work I run Tojin Games, a one-person engineering lab with live browser products, public YouTube demos and pre-release projects. Live science software on Google Cloud Run includes Gravity 3D, Orbit, Ion Drive, Starforge, MyZoo, My Garden and Reactor Operator. Jednota runs local LLM strategist, diplomat and fleet agents with structured outputs, deterministic validation and pgvector memory, and Tojin Forge is my local multi-repository coding agent with an Ollama tool loop, sandboxed write scopes, tests, checkpoints, CLI/MCP integration and unattended runs. Particle Forge is in pre-release. The browser games share my own FastAPI authentication service: Patreon OAuth 2.0 is exchanged for short-lived RS256 JWTs through one-time codes, while games hold only the public verification key. Services run on Cloud Run with Secret Manager and Terraform, and a code-driven pipeline records real gameplay in 4K.",

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
    "projects.lead": "Live browser products, public YouTube demos and pre-release engineering projects that share ideas with the day job: agents, local models, numerical simulation and generated media. The code is private; live builds and videos are public. In the browser games the opening is free and Patreon supporters unlock the rest.",

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
    "contact.lead": "The fastest way is e-mail. I am based near Ostrava, Czechia, work remote-first with teams across Europe, and I am open to B2B / contract consulting.",
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
    "meta.title": "Michal Štěpán · Senior GenAI Engineer · AI Solution Architecture",
    "meta.description": "Michal Štěpán mění nejasná AI zadání v produkční systémy: AI solution architecture, RAG a agenti, deterministická validace, evaluace na golden datasetech, MCP, FastAPI a nasazení na Azure a GCP. Otevřený B2B / kontraktové spolupráci.",
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

    "hero.kicker": "Senior GenAI Engineer · AI Solution Architecture · RAG a agenti · Python/FastAPI · Azure",
    "hero.tagline": "Měním nejasná AI zadání v produkční systémy: architekturu řešení, RAG a agenty, deterministickou validaci, evaluaci, bezpečná API a cloudové nasazení. Pracuji od začátku do konce napříč architekturou, backendem, kvalitou i provozem.",
    "hero.b2b": "Otevřený B2B / kontraktové spolupráci",
    "hero.cv": "Stáhnout CV (PDF)",
    "hero.chat": "Chat s mým CV",
    "hero.youtube": "YouTube",
    "hero.patreon": "Patreon",
    "hero.studio": "Tojin Games · moje studio",
    "hero.now.label": "Aktuálně",
    "hero.now.big": "Senior GenAI Application Engineer · ABB",
    "hero.now.1": "Produkční GenAI řešení pro průmyslové inženýrství: architektura, implementace, evaluace, nasazení",
    "hero.now.2": "Evaluace na golden datasetech plus deterministická validace",
    "hero.now.3": "FastAPI, Azure AI/OpenAI, MCP a CI/CD",

    "about.title": "O mně",
    "about.fact1.b": "Senior GenAI Engineer",
    "about.fact1.s": "ABB od roku 2025 · otevřený B2B / kontraktové spolupráci",
    "about.fact2.b": "Produkční GenAI na Azure",
    "about.fact2.s": "OpenAI / AI Foundry / Agents, Container Apps, Key Vault",
    "about.fact3.b": "Python aplikační stack",
    "about.fact3.s": "FastAPI, Pandas, Pytest, PostgreSQL, Redis, Neo4j",
    "about.fact4.b": "Tojin Games",
    "about.fact4.s": "Živé produkty, veřejná dema a projekty před vydáním: agenti, simulace, cloud",
    "about.p1": "Měním nejasná AI zadání v produkční systémy. V ABB pracuji jako Senior GenAI Application Engineer na průmyslových inženýrských workflow, od analýzy use casu a architektury přes implementaci a evaluaci po cloudové nasazení: extrakce dokumentů a RAG, strukturované LLM výstupy s deterministickou validací, agentní asistenti nad Azure OpenAI / AI Foundry a Azure AI Agents, golden datasety a akceptační/výkonnostní testy, FastAPI služby a CI/CD do Azure Container Apps s Key Vaultem a Log Analytics. Stavím také MCP integrace, přes které AI coding asistenti pracují přímo s týmovými nástroji. Nejsilnější jsem tam, kde AI musí být spolehlivá, testovatelná a zapojená do skutečných firemních procesů, a jsem otevřený B2B / kontraktové spolupráci v GenAI engineeringu, AI solution architecture a produkčním nasazení AI.",
    "about.p2": "Předtím jsem tři roky pracoval jako freelance backend a datový inženýr a dodával B2B přímo do prostředí klientů z energetiky, telekomunikací a výroby (DTSE, Landis+Gyr, Vendavo); ještě dřív jsem stavěl systémy pro energetický management a analytiku v Siemensu a ABB. Kořeny mám v energetice: osm let v teplárenské distribuční společnosti, naposledy jako technický zástupce s týmem přes patnáct lidí, mě naučilo, co znamená spolehlivý provoz. Dohromady víc než patnáct let v průmyslovém softwaru, datech, cloudu a energetice.",
    "about.p3": "Mimo práci vedu Tojin Games, jednočlennou technickou laboratoř s živými produkty v prohlížeči, veřejnými YouTube demy a projekty před vydáním. Živý vědecký software na Google Cloud Run zahrnuje Gravity 3D, Orbit, Ion Drive, Starforge, MyZoo, My Garden a Reactor Operator. V Jednotě běží lokální LLM agenti stratéga, diplomata a flotily se strukturovanými výstupy, deterministickou validací a pgvector pamětí a Tojin Forge je můj lokální coding agent pro více repozitářů s Ollama tool loopem, sandboxovanými zápisy, testy, checkpointy, CLI/MCP integrací a bezobslužnými běhy. Particle Forge je před vydáním. Webové hry sdílejí mou vlastní autentizační službu ve FastAPI: Patreon OAuth 2.0 se přes jednorázové kódy mění na krátkodobé RS256 JWT a hry drží jen veřejný ověřovací klíč. Služby běží na Cloud Run se Secret Managerem a Terraformem a pipeline řízená kódem nahrává skutečný gameplay ve 4K.",

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
    "projects.lead": "Živé produkty v prohlížeči, veřejná YouTube dema a projekty před vydáním, které sdílejí nápady s prací: agenti, lokální modely, numerické simulace a generovaná média. Kód je soukromý; živé verze a videa jsou veřejné. V prohlížečových hrách je začátek zdarma a zbytek odemknou podporovatelé na Patreonu.",

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
    "contact.lead": "Nejrychlejší je e-mail. Sídlím u Ostravy, pracuji remote-first s týmy po celé Evropě a jsem otevřený B2B / kontraktové spolupráci.",
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
          "Design and build production GenAI solutions for industrial engineering workflows, from use-case analysis and architecture through implementation, evaluation and cloud delivery.",
          "Implement document extraction and RAG, structured LLM outputs with deterministic validation, and agent-based assistants using Azure OpenAI / AI Foundry and Azure AI Agents.",
          "Own AI quality and evaluation: golden datasets, acceptance criteria, deterministic checks, performance and stress tests, and cloud-vs-local model comparison through Ollama.",
          "Develop Python/FastAPI services and integrate PostgreSQL, Redis and Neo4j where relational, session/cache and graph data are required.",
          "Deliver across dev, test, stage and prod using Azure Pipelines, Docker, Container Registry, Azure Container Apps, Key Vault with managed identity and Log Analytics; built an MCP/FastMCP proof of concept that exposes Azure DevOps work items to coding assistants such as Claude Code and GitHub Copilot through controlled tools, with a mock API and tests.",
        ],
        cs: [
          "Navrhuji a stavím produkční GenAI řešení pro průmyslové inženýrské workflow, od analýzy use casu a architektury přes implementaci a evaluaci po cloudové nasazení.",
          "Implementuji extrakci dokumentů a RAG, strukturované LLM výstupy s deterministickou validací a agentní asistenty nad Azure OpenAI / AI Foundry a Azure AI Agents.",
          "Mám na starosti kvalitu a evaluaci AI: golden datasety, akceptační kritéria, deterministické kontroly, výkonnostní a zátěžové testy a porovnání cloudových a lokálních modelů přes Ollamu.",
          "Vyvíjím služby v Pythonu/FastAPI a integruji PostgreSQL, Redis a Neo4j tam, kde jsou potřeba relační data, cache/relace a grafová data.",
          "Nasazuji do dev, test, stage a prod přes Azure Pipelines, Docker, Container Registry, Azure Container Apps, Key Vault s managed identity a Log Analytics; postavil jsem MCP/FastMCP proof of concept, který přes řízené nástroje zpřístupňuje work itemy z Azure DevOps coding asistentům jako Claude Code a GitHub Copilot, s mock API a testy.",
        ],
      },
      stack: "Python · FastAPI · Azure OpenAI / AI Foundry · Azure AI Agents · RAG · ChromaDB · Document Intelligence · PostgreSQL · Redis · Neo4j · Pandas · Pytest · Docker · Azure Container Apps · Key Vault · Azure Pipelines · MCP · Ollama",
    },
    {
      company: { en: "Freelance", cs: "Freelance" },
      role: { en: "Software / Data Engineer", cs: "Software / Data Engineer" },
      period: { en: "Sep 2022 – Sep 2025", cs: "září 2022 – září 2025" },
      note: { en: "B2B delivery for DTSE, Landis+Gyr, Vendavo and other clients in energy, telecom and manufacturing · remote, international teams", cs: "B2B dodávky pro DTSE, Landis+Gyr, Vendavo a další klienty z energetiky, telekomunikací a výroby · remote, mezinárodní týmy" },
      bullets: {
        en: [
          "Delivered backend and data-engineering work directly into client environments, taking features from requirements through implementation, testing and production support.",
          "Designed end-to-end Python data workflows with Dagster and Airflow using PostgreSQL, DuckDB and BigQuery; built REST services and RabbitMQ-based high-volume processing.",
          "Migrated services from Kubernetes to cloud-native GCP services including Cloud Run, GCS and BigQuery.",
          "Maintained CI/CD in GitLab CI and GitHub Actions with Pytest-based unit, integration and end-to-end testing.",
          "Optimised high-performance processing pipelines for recommender systems and provided L2 engineering support for production systems.",
        ],
        cs: [
          "Dodával jsem backend a datové inženýrství přímo do prostředí klientů, od požadavků přes implementaci a testování po produkční podporu.",
          "Navrhoval jsem end-to-end datové workflow v Pythonu s Dagsterem a Airflow nad PostgreSQL, DuckDB a BigQuery; stavěl REST služby a objemové zpracování přes RabbitMQ.",
          "Migroval jsem služby z Kubernetes na cloud-native služby GCP včetně Cloud Run, GCS a BigQuery.",
          "Udržoval jsem CI/CD v GitLab CI a GitHub Actions s unit, integračními a end-to-end testy v Pytestu.",
          "Optimalizoval jsem výkonné pipeline pro doporučovací systémy a poskytoval L2 podporu produkčních systémů.",
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
      name: "Ion Drive",
      sub: { en: "Electric and nuclear propulsion trajectory game", cs: "Hra o trajektoriích s elektrickým a jaderným pohonem" },
      image: "assets/img/projects/iondrive.webp",
      tags: ["Python", "NiceGUI", "Three.js", "N-body", "GCP Cloud Run", "Terraform"],
      desc: {
        en: "Fly one deep-space vehicle through the Solar System on Newtonian N-body gravity and cross a prescribed exit corridor as fast as physics allows. Ion engines whose efficiency comes from the ionisation cost of the propellant, a nuclear thermal rocket whose exhaust speed comes from its chamber temperature, layered atmospheres you can scoop for propellant, an 8th-order adaptive integrator and JPL elements for the planets, all hand-written with no physics library. Seven chapters from a spiral out of Earth orbit to the Proxima Window, each flown end to end by a mission verifier. The first three chapters are free; Patreon unlocks the rest.",
        cs: "Proveďte jednu loď Sluneční soustavou na newtonovské N-body gravitaci a protněte předepsaný výstupní koridor tak rychle, jak fyzika dovolí. Iontové motory, jejichž účinnost vychází z ionizační energie paliva, jaderný tepelný raketový motor s výtokovou rychlostí danou teplotou komory, vrstvené atmosféry, ze kterých se dá nabírat palivo, adaptivní integrátor 8. řádu a elementy planet z JPL, vše ručně psané bez fyzikální knihovny. Sedm kapitol od spirály z oběžné dráhy Země po Proxima Window, každou ověřuje verifikátor misí. První tři kapitoly jsou zdarma, zbytek odemkne Patreon.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.iondriveWeb", primary: true },
        { label: { en: "Trailer", cs: "Trailer" }, url: "https://www.youtube.com/watch?v=EhqMRiwYiRc" },
      ],
    },
    {
      name: "Reactor Operator",
      sub: { en: "Nuclear reactor control-room simulator", cs: "Simulátor velína jaderného reaktoru" },
      image: "assets/img/projects/reactor.webp",
      tags: ["Python", "NiceGUI", "Canvas", "Point kinetics", "GCP Cloud Run", "Terraform"],
      desc: {
        en: "A teaching simulator of the BN-600 fast reactor and the VVER-440, played from the control room. The lesson: control rods do not set power, they set reactivity; reactivity sets the rate of change, and power is only the consequence. Point kinetics with six delayed-neutron groups, a two-node thermal model, iodine and xenon, decay heat, a Fuchs–Nordheim excursion above prompt critical, protections and an automatic controller, grounded in my bachelor thesis on fast reactor cores. 46 physics and 32 learning tests. Everything educational is free; Patreon unlocks free play.",
        cs: "Výukový simulátor rychlého reaktoru BN-600 a VVER-440 hraný z velína. Lekce: regulační tyče nenastavují výkon, nastavují reaktivitu; reaktivita určuje rychlost změny a výkon je až důsledek. Bodová kinetika se šesti skupinami zpožděných neutronů, dvouuzlový tepelný model, jód a xenon, zbytkové teplo, Fuchsův–Nordheimův exkurz nad okamžitou kritičností, ochrany a automatický regulátor, opřené o mou bakalářskou práci o aktivních zónách rychlých reaktorů. 46 fyzikálních a 32 výukových testů. Vše výukové je zdarma, volnou hru odemkne Patreon.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.reactorWeb", primary: true },
      ],
    },
    {
      name: "Fusion",
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
      name: "Particle Forge",
      sub: { en: "Discover the Standard Model · pre-release", cs: "Objevte Standardní model · před vydáním" },
      image: "assets/img/projects/particleforge.webp",
      tags: ["Python", "NiceGUI", "Playwright", "Docker", "ComfyUI"],
      desc: {
        en: "Build the Standard Model from measured evidence: ten chapters and an epilogue, fifteen experiment modes, guided setups, detector and analysis views, explicit hypotheses and a persistent research notebook, with twelve photorealistic laboratory backgrounds generated locally in ComfyUI. Browser tests play the complete campaign, and persistence and Docker validation are done; the public video and cloud release is still in progress.",
        cs: "Poskládejte Standardní model z naměřených důkazů: deset kapitol a epilog, patnáct experimentálních režimů, vedené sestavy, pohledy detektoru a analýzy, explicitní hypotézy a trvalý výzkumný zápisník, s dvanácti fotorealistickými pozadími laboratoří generovanými lokálně v ComfyUI. Testy v prohlížeči projdou celou kampaň a validace persistence a Dockeru je hotová; veřejné video a cloudové vydání se teprve chystají.",
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
      name: "Tojin Forge",
      image: "assets/img/projects/tojinforge.webp",
      sub: { en: "Local autonomous coding agent", cs: "Lokální autonomní coding agent" },
      tags: ["Python", "NiceGUI", "Ollama", "LLM agents", "MCP", "CLI"],
      desc: {
        en: "A local, autonomous, multi-repository coding agent on Ollama models: a NiceGUI control room and a headless CLI over the same engine. Not a chat window but an engineering loop: task, model, tool call, tool result, tests, fix, verify, report. It indexes the whole development workspace, writes only inside sandboxed scopes, keeps checkpoints, runs the tests before it finishes and takes task files with screenshots and mockups. Full-access and unattended overnight runs across several repositories, with an MCP server that exposes its tools to other agents.",
        cs: "Lokální autonomní coding agent pro více repozitářů na modelech z Ollamy: velín v NiceGUI a headless CLI nad stejným enginem. Není to chatovací okno, ale inženýrská smyčka: úkol, model, volání nástroje, výsledek, testy, oprava, ověření, report. Indexuje celý vývojový workspace, zapisuje jen v sandboxovaných rozsazích, drží checkpointy, před dokončením spouští testy a bere zadání i se screenshoty a mockupy. Full-access a bezobslužné noční běhy napříč repozitáři, s MCP serverem, který jeho nástroje nabízí dalším agentům.",
      },
      links: [],
    },
    {
      name: "Tojin platform",
      sub: { en: "One login, seven games, a video pipeline", cs: "Jedno přihlášení, sedm her, video pipeline" },
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
        en: "A small instruction-tuned model runs in your browser through WebGPU with my CV as context. A short document does not need a vector index, so the whole system is a prompt and a model. Sizing RAG honestly is part of the job.",
        cs: "Malý instrukčně laděný model běží ve vašem prohlížeči přes WebGPU a jako kontext má moje CV. Krátký dokument nepotřebuje vektorový index, takže celý systém je prompt a model. Poctivé dimenzování RAG je součást práce.",
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
      version: "1.8.2",
      date: "2026-09-24",
      items: {
        en: [
          "Reactor Operator: test counts updated to the current suite (46 physics and 32 learning tests).",
          "The plasma confinement game is listed under its game title, Fusion (formerly HoldMyPlazma).",
          "Ion Drive: the chapters are flown by a mission verifier; the text no longer calls every chapter certified.",
        ],
        cs: [
          "Reactor Operator: počty testů odpovídají aktuální sadě (46 fyzikálních a 32 výukových testů).",
          "Hra o udržení plazmatu je uvedena pod svým herním názvem Fusion (dříve HoldMyPlazma).",
          "Ion Drive: kapitoly prolétá verifikátor misí; text už netvrdí, že je každá certifikovaná.",
        ],
      },
    },
    {
      version: "1.8.1",
      date: "2026-09-24",
      items: {
        en: ["Cover picture for the Tojin Forge project card."],
        cs: ["Titulní obrázek u karty projektu Tojin Forge."],
      },
    },
    {
      version: "1.8.0",
      date: "2026-09-23",
      items: {
        en: [
          "Site aligned with the new CV: Senior GenAI Engineer with AI solution architecture in the headline, and an explicit \"Open to B2B / contract consulting\" note in the hero, About and Contact.",
          "ABB and freelance bullets now follow the CV: architecture, implementation, evaluation and production delivery; B2B delivery directly into client environments.",
          "New project cards for Ion Drive and Reactor Operator (both live on Cloud Run), Particle Forge (pre-release) and Tojin Forge (local autonomous coding agent); the chat facts and the LinkedIn draft updated to match.",
        ],
        cs: [
          "Web sladěn s novým CV: Senior GenAI Engineer s AI solution architecture v titulku a výslovná poznámka „otevřený B2B / kontraktové spolupráci“ v úvodu, O mně a Kontaktu.",
          "Body u ABB a freelance teď odpovídají CV: architektura, implementace, evaluace a produkční nasazení; B2B dodávky přímo do prostředí klientů.",
          "Nové karty projektů Ion Drive a Reactor Operator (oba živě na Cloud Run), Particle Forge (před vydáním) a Tojin Forge (lokální autonomní coding agent); fakta pro chat a LinkedIn profil aktualizovány.",
        ],
      },
    },
    {
      version: "1.7.0",
      date: "2026-09-23",
      items: {
        en: [
          "CV repositioned for GenAI B2B / contract consulting: Senior GenAI Engineer headline, an explicit \"Open to B2B / contract consulting\" line, and the ABB role described as architecture, implementation, evaluation and production delivery.",
          "Tojin portfolio in the CV now separates live products, public YouTube demos and pre-release projects (Ion Drive, Reactor Operator, Particle Forge, Jednota, Tojin Forge) instead of counting games.",
          "Downloadable PDF regenerated from the new CV; still two A4 pages.",
        ],
        cs: [
          "CV nově cílí na GenAI B2B / kontraktové poradenství: titulek Senior GenAI Engineer, výslovná poznámka „Open to B2B / contract consulting“ a pozice v ABB popsaná jako architektura, implementace, evaluace a produkční nasazení.",
          "Portfolio Tojin v CV nyní rozlišuje živé produkty, veřejná YouTube dema a projekty před vydáním (Ion Drive, Reactor Operator, Particle Forge, Jednota, Tojin Forge) místo počítání her.",
          "PDF ke stažení znovu vygenerováno z nového CV; stále na dvě strany A4.",
        ],
      },
    },
    {
      version: "1.6.1",
      date: "2026-09-20",
      items: {
        en: [
          "Downloadable PDF regenerated from the current CV; the job title, profile and skills now match the site.",
        ],
        cs: [
          "PDF ke stažení znovu vygenerováno z aktuálního CV; název pozice, profil a dovednosti nyní odpovídají webu.",
        ],
      },
    },
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
    en: ["What does Michal do at ABB?", "What are his salary expectations?", "Does he work remotely?", "Has he led a team?", "What are his hobbies?", "Tell me about his physics simulations.", "Is he open to B2B / contract work?"],
    cs: ["Co dělá Michal v ABB?", "Jaké má platové představy?", "Pracuje na dálku?", "Vedl už tým?", "Jaké má koníčky?", "Řekni mi o jeho fyzikálních simulacích.", "Je otevřený B2B / kontraktové spolupráci?"],
  },
};
