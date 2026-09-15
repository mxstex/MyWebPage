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
  linkedin: "",                              // e.g. "https://www.linkedin.com/in/…"; hidden while empty
  cv: "cv/Michal_Stepan_CV.pdf",
  location: { en: "Sviadnov, Czechia", cs: "Sviadnov, Česko" },
  links: {
    gravityWeb3d: "https://gravity3d.happywater-ef07256e.westeurope.azurecontainerapps.io/",
    gravityWeb2d: "",                        // public URL of the 2D web build, when there is one
    orbitWeb: "https://orbit-prod-lxfrbj3zhq-ew.a.run.app",
    play2d: "",                              // Google Play listing once published; "coming soon" is shown while empty
    play3d: "",
  },
  videos: [
    { id: "LkZCKLGDsPg", title: { en: "Gravity 3D: you don't control the universe, only the initial conditions", cs: "Gravity 3D: vesmír neřídíte, jen počáteční podmínky" } },
    { id: "QPlFDuAnmkk", title: { en: "Jednota: eight races, eight navies, every race its own AI agent", cs: "Jednota: osm ras, osm flotil, každá rasa vlastní AI agent" } },
  ],
};

/* ---------- static UI strings, keyed by data-i18n attributes ---------- */
window.T = {
  en: {
    "meta.title": "Michal Štěpán · AI & Data Platform Architect",
    "meta.description": "Michal Štěpán designs and builds production GenAI and data platforms on Azure: RAG pipelines, agentic workflows and the data systems underneath. Also the author of physics games and simulations.",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.gravity": "Gravity",
    "nav.projects": "Projects",
    "nav.rag": "RAG & LLM",
    "nav.chat": "Chat",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "lang.switch": "Česky",
    "lang.switchTitle": "Přepnout do češtiny",
    "theme.toggle": "Toggle light / dark theme",
    "skip": "Skip to content",

    "hero.kicker": "AI & Data Platform Architect · GenAI · Cloud data systems",
    "hero.tagline": "I design and build production-grade GenAI and data platforms on Azure: RAG pipelines, agentic workflows and the data systems underneath them.",
    "hero.cv": "Download CV (PDF)",
    "hero.chat": "Chat with my CV",
    "hero.youtube": "YouTube",
    "hero.now.label": "Currently",
    "hero.now.big": "Senior GenAI Engineer · ABB",
    "hero.now.1": "RAG pipeline on Azure AI Search",
    "hero.now.2": "GenAI app platform on Azure Container Apps",
    "hero.now.3": "Document Intelligence and multimodal pipelines",

    "about.title": "About",
    "about.fact1.b": "Senior GenAI Engineer",
    "about.fact1.s": "ABB, since 2025",
    "about.fact2.b": "Azure platform",
    "about.fact2.s": "Container Apps, AI Search, OpenAI, Key Vault",
    "about.fact3.b": "Python end to end",
    "about.fact3.s": "FastAPI, Dagster, Airflow, Pytest",
    "about.fact4.b": "Physics games & simulations",
    "about.fact4.s": "Gravity, Orbit, Quantum, HoldMyPlazma",
    "about.p1": "I am an AI and Data Platform Engineer focused on system architecture, GenAI platforms and scalable data systems. At ABB I work as a Senior GenAI Engineer: I designed the architecture of a full RAG pipeline on Azure AI Search and I build the internal platform that GenAI applications run on, from FastAPI services and Docker images to Azure Container Apps, Key Vault and Log Analytics.",
    "about.p2": "Before that I spent three years as a freelance backend and data engineer for clients in energy, telecom and manufacturing (DTSE, Landis+Gyr, Vendavo), and earlier built energy-management and analytics systems at Siemens and ABB. My roots are in power engineering: eight years at a district heating utility, the last ones as technical deputy leading more than fifteen people, taught me what production reliability actually means.",
    "about.p3": "Outside work I build physics games and simulations and publish videos about them on my YouTube channel Tojin. Gravity is a Newtonian puzzle where you only set one asteroid's velocity; HoldMyPlazma confines plasma with magnets, calibrated against my own research on the CASTOR tokamak; Jednota is a 4X strategy in which every empire is run by its own local LLM agent. I also write the music for my games, and spend the rest of the time in the garden.",

    "skills.title": "Skills",
    "skills.lead": "What I reach for when the problem is a production AI or data system.",

    "experience.title": "Experience",
    "experience.stack": "Stack",

    "gravity.title": "Gravity",
    "gravity.kicker": "Physics sandbox · web and Android · 2D and 3D",
    "gravity.intro": "You never control the universe. Only the initial conditions. Gravity is a Newtonian sandbox with one mechanic: set the velocity of a single small asteroid, choose the moment to release it, and watch real gravity produce the consequences. Ten story chapters take the same flyby from an asteroid to two colliding black holes. The simulation is hand-written: symmetric forces, conserved angular momentum, collisions that merge or ricochet because the physics says so. Every level is verified to be beatable and to never beat itself.",
    "gravity.gallery": "Screenshots",
    "gravity.videos": "Videos",
    "gravity.free": "Free and ad-free, in English and Czech. The Android builds work offline and collect no data.",
    "gravity.soon": "Coming soon to Google Play",

    "projects.title": "Other projects",
    "projects.lead": "Side projects that share ideas with the day job: agents, local models, numerical simulation and generated media. The code is private; live builds and videos are public.",

    "rag.title": "RAG & LLM in practice",
    "rag.lead": "Six things I have learned building retrieval and agent systems that had to survive real users.",

    "chat.title": "Chat with my CV",
    "chat.intro": "Ask about my experience, skills and projects, or the practical things recruiters ask: availability, salary expectations, remote work, hobbies. The model runs entirely in your browser through WebGPU: it is downloaded once (then cached) and nothing you type leaves your device. It is a small model and can make mistakes; the PDF CV is the source of truth.",
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
    "contact.linkedin": "LinkedIn",
    "contact.cv": "CV (PDF)",
    "contact.location": "Location",

    "footer.built": "Built with plain HTML, CSS and JavaScript. Hosted on GitHub Pages.",
    "lightbox.close": "Close",
  },
  cs: {
    "meta.title": "Michal Štěpán · AI & datový platformový architekt",
    "meta.description": "Michal Štěpán navrhuje a staví produkční GenAI a datové platformy na Azure: RAG pipeline, agentní workflow a datové systémy pod nimi. Autor fyzikálních her a simulací.",
    "nav.about": "O mně",
    "nav.skills": "Dovednosti",
    "nav.experience": "Praxe",
    "nav.gravity": "Gravity",
    "nav.projects": "Projekty",
    "nav.rag": "RAG & LLM",
    "nav.chat": "Chat",
    "nav.education": "Vzdělání",
    "nav.contact": "Kontakt",
    "nav.menu": "Menu",
    "lang.switch": "English",
    "lang.switchTitle": "Switch to English",
    "theme.toggle": "Přepnout světlý / tmavý režim",
    "skip": "Přeskočit na obsah",

    "hero.kicker": "AI & datový platformový architekt · GenAI · cloudové datové systémy",
    "hero.tagline": "Navrhuji a stavím produkční GenAI a datové platformy na Azure: RAG pipeline, agentní workflow a datové systémy pod nimi.",
    "hero.cv": "Stáhnout CV (PDF)",
    "hero.chat": "Chat s mým CV",
    "hero.youtube": "YouTube",
    "hero.now.label": "Aktuálně",
    "hero.now.big": "Senior GenAI Engineer · ABB",
    "hero.now.1": "RAG pipeline nad Azure AI Search",
    "hero.now.2": "Platforma pro GenAI aplikace na Azure Container Apps",
    "hero.now.3": "Document Intelligence a multimodální pipeline",

    "about.title": "O mně",
    "about.fact1.b": "Senior GenAI Engineer",
    "about.fact1.s": "ABB, od roku 2025",
    "about.fact2.b": "Platforma na Azure",
    "about.fact2.s": "Container Apps, AI Search, OpenAI, Key Vault",
    "about.fact3.b": "Python od začátku do konce",
    "about.fact3.s": "FastAPI, Dagster, Airflow, Pytest",
    "about.fact4.b": "Fyzikální hry a simulace",
    "about.fact4.s": "Gravity, Orbit, Quantum, HoldMyPlazma",
    "about.p1": "Jsem AI a datový platformový inženýr se zaměřením na architekturu systémů, GenAI platformy a škálovatelné datové systémy. V ABB pracuji jako Senior GenAI Engineer: navrhl jsem architekturu kompletní RAG pipeline nad Azure AI Search a stavím interní platformu, na které GenAI aplikace běží, od FastAPI služeb a Docker image po Azure Container Apps, Key Vault a Log Analytics.",
    "about.p2": "Předtím jsem tři roky pracoval jako freelance backend a datový inženýr pro klienty z energetiky, telekomunikací a výroby (DTSE, Landis+Gyr, Vendavo) a ještě dřív jsem stavěl systémy pro energetický management a analytiku v Siemensu a ABB. Kořeny mám v energetice: osm let v teplárenské distribuční společnosti, naposledy jako technický zástupce s týmem přes patnáct lidí, mě naučilo, co znamená spolehlivý provoz.",
    "about.p3": "Mimo práci stavím fyzikální hry a simulace a videa o nich publikuji na svém YouTube kanálu Tojin. Gravity je newtonovská hádanka, kde nastavíte jen rychlost jednoho asteroidu; HoldMyPlazma drží plazma magnety a je kalibrovaná podle mého vlastního výzkumu na tokamaku CASTOR; Jednota je 4X strategie, ve které každou říši řídí vlastní lokální LLM agent. Ke svým hrám si i skládám hudbu a zbytek času trávím na zahradě.",

    "skills.title": "Dovednosti",
    "skills.lead": "Po čem sahám, když je úkolem produkční AI nebo datový systém.",

    "experience.title": "Praxe",
    "experience.stack": "Stack",

    "gravity.title": "Gravity",
    "gravity.kicker": "Fyzikální sandbox · web a Android · 2D i 3D",
    "gravity.intro": "Vesmír neřídíte. Jen počáteční podmínky. Gravity je newtonovský sandbox s jedinou mechanikou: nastavte rychlost jednomu malému asteroidu, zvolte okamžik vypuštění a sledujte, co skutečná gravitace udělá. Deset kapitol příběhu dovede tentýž průlet od asteroidu až ke srážce dvou černých děr. Simulace je ručně psaná: symetrické síly, zachovaný moment hybnosti, srážky, které slučují nebo odrážejí, protože to říká fyzika. Každý level je ověřený, že se dá vyhrát a nikdy se nevyhraje sám.",
    "gravity.gallery": "Screenshoty",
    "gravity.videos": "Videa",
    "gravity.free": "Zdarma a bez reklam, anglicky a česky. Verze pro Android fungují offline a nesbírají žádná data.",
    "gravity.soon": "Brzy na Google Play",

    "projects.title": "Další projekty",
    "projects.lead": "Vedlejší projekty, které sdílejí nápady s prací: agenti, lokální modely, numerické simulace a generovaná média. Kód je soukromý; živé verze a videa jsou veřejné.",

    "rag.title": "RAG & LLM v praxi",
    "rag.lead": "Šest věcí, které jsem se naučil při stavbě retrieval a agentních systémů, které musely přežít skutečné uživatele.",

    "chat.title": "Chat s mým CV",
    "chat.intro": "Zeptejte se na moji praxi, dovednosti a projekty, nebo na praktické věci, které zajímají HR: dostupnost, platová očekávání, práci na dálku, koníčky. Model běží celý ve vašem prohlížeči přes WebGPU: stáhne se jednou (pak je v cache) a nic z toho, co napíšete, neopustí vaše zařízení. Je to malý model a může se mýlit; zdrojem pravdy je CV v PDF.",
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
    "contact.linkedin": "LinkedIn",
    "contact.cv": "CV (PDF)",
    "contact.location": "Kde",

    "footer.built": "Postaveno v čistém HTML, CSS a JavaScriptu. Hostováno na GitHub Pages.",
    "lightbox.close": "Zavřít",
  },
};

/* ---------- structured, bilingual data rendered by main.js ---------- */
window.DATA = {
  skills: [
    {
      title: { en: "Architecture & GenAI", cs: "Architektura & GenAI" },
      items: ["Retrieval-Augmented Generation", "Hybrid search & grounding", "Multi-step LLM workflows", "Function calling / tools", "Agent systems", "LangChain", "LangGraph", "Model evaluation", "Golden datasets"],
    },
    {
      title: { en: "Data & AI platforms", cs: "Datové a AI platformy" },
      items: ["Azure AI Search", "Azure OpenAI", "pgvector", "ChromaDB", "Azure Document Intelligence", "Dagster", "Airflow", "PostgreSQL", "DuckDB", "BigQuery", "RabbitMQ", "Data quality & observability"],
    },
    {
      title: { en: "Cloud & infrastructure", cs: "Cloud & infrastruktura" },
      items: ["Azure Container Apps", "Azure Functions", "Blob & Table Storage", "Key Vault", "Container Registry", "Log Analytics", "GCP Cloud Run", "Docker", "Terraform", "Azure Pipelines", "GitLab CI", "GitHub Actions"],
    },
    {
      title: { en: "Programming", cs: "Programování" },
      items: ["Python", "FastAPI", "Pandas", "NumPy / SciPy", "Pytest", "Playwright", "Streamlit", "NiceGUI", "SQL", "Kotlin & Jetpack Compose", "Grafana", "Power BI"],
    },
  ],

  experience: [
    {
      company: "ABB s.r.o.",
      role: { en: "Senior GenAI Engineer", cs: "Senior GenAI Engineer" },
      period: { en: "Sep 2025 – present", cs: "září 2025 – dosud" },
      current: true,
      bullets: {
        en: [
          "Designed the architecture of a full RAG pipeline: Azure AI Search, vector embeddings, grounding.",
          "Integrate GenAI into business processes; build golden datasets and model-evaluation workflows.",
          "Develop the internal GenAI application platform: FastAPI, Streamlit, Docker, Azure Container Apps.",
          "Run the platform: Key Vault, Container Registry, Log Analytics, containerized deployments.",
          "Implement Document Intelligence and multimodal processing pipelines.",
        ],
        cs: [
          "Návrh architektury kompletní RAG pipeline: Azure AI Search, vektorové embeddingy, grounding.",
          "Integrace GenAI do firemních procesů; tvorba golden datasetů a workflow pro evaluaci modelů.",
          "Vývoj interní platformy pro GenAI aplikace: FastAPI, Streamlit, Docker, Azure Container Apps.",
          "Provoz platformy: Key Vault, Container Registry, Log Analytics, kontejnerizovaná nasazení.",
          "Implementace pipeline pro Document Intelligence a multimodální zpracování.",
        ],
      },
      stack: "Python · FastAPI · Streamlit · Azure OpenAI · Azure AI Search · Docker · Azure Container Apps",
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
        en: "Python, NiceGUI and one HTML5 canvas. The perspective projection is about fifty lines of maths, no WebGL. Nineteen missions and replays of solved shots: orbit the camera, aim in the ecliptic, switch the field on and watch the grid sag into the real gravitational potential. Runs on Azure Container Apps, deployed with Terraform.",
        cs: "Python, NiceGUI a jeden HTML5 canvas. Perspektivní projekce je padesát řádků matematiky, bez WebGL. Devatenáct misí a záznamy vyřešených výstřelů: otočte kameru, miřte v rovině ekliptiky, zapněte pole a sledujte, jak se mřížka prohne do skutečného gravitačního potenciálu. Běží na Azure Container Apps, nasazeno přes Terraform.",
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
        en: "The original. Python, NiceGUI and a single canvas; the physics core is a deterministic implementation with no external engine. Ten chapters, free-play scenarios, progress kept in the browser, deployed as a container on Azure with Terraform.",
        cs: "Původní verze. Python, NiceGUI a jeden canvas; fyzikální jádro je deterministická implementace bez externího enginu. Deset kapitol, volné scénáře, postup uložený v prohlížeči, nasazeno jako kontejner na Azure přes Terraform.",
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
        en: "Native Kotlin and Jetpack Compose. A hand-written Velocity Verlet integrator on a fixed timestep; the engine is a pure Kotlin module with no Android dependency, so every level is verified fair by a test before it ships.",
        cs: "Nativní Kotlin a Jetpack Compose. Ručně psaný integrátor Velocity Verlet s pevným krokem; engine je čistý Kotlin modul bez závislosti na Androidu, takže každý level před vydáním ověří test, že je férový.",
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
      tags: ["Python", "NiceGUI", "Ollama", "pgvector", "LLM agents", "ComfyUI art"],
      desc: {
        en: "A galactic 4X game in the vein of Master of Orion 2. The Antarans are coming and no single race can face them alone: you do not win by wiping out your rivals, you win by unifying the galaxy, by diplomacy or by conquest. Every empire is its own agent: deterministic logic for the mechanics, a local LLM through Ollama for reasoning and diplomacy, grounded in a pgvector lore store that also remembers how previous games went. Agent decisions are recorded, so replays do not need the model, and the whole test suite runs without any of it.",
        cs: "Galaktická 4X strategie ve stylu Master of Orion 2. Přicházejí Antarané a žádná rasa jim nemůže čelit sama: nevyhrajete vyhlazením soupeřů, ale sjednocením galaxie, diplomacií nebo dobytím. Každá říše je vlastní agent: deterministická logika pro mechaniky, lokální LLM přes Ollamu pro uvažování a diplomacii, ukotvené v pgvector úložišti lore, které si pamatuje i průběh minulých her. Rozhodnutí agentů se ukládají, takže záznamy her model nepotřebují, a celá testovací sada běží i bez toho všeho.",
      },
      links: [
        { label: { en: "Video", cs: "Video" }, url: "https://www.youtube.com/watch?v=QPlFDuAnmkk", primary: true },
      ],
    },
    {
      name: "HoldMyPlazma",
      sub: { en: "Plasma confinement game", cs: "Hra o udržení plazmatu" },
      image: "assets/img/projects/holdmyplazma.webp",
      tags: ["Python", "NiceGUI", "NumPy", "SciPy", "Biot–Savart"],
      desc: {
        en: "Hold plasma with magnets: choose the coils, current, radius and tilt, fire a shot and read what happened from Langmuir-probe diagnostics. Magnetic fields from Biot–Savart, field-line tracing with Poincaré sections, the q(r) profile and a 0-D energy balance, calibrated against my own research on the CASTOR tokamak. Eleven scenarios from a magnetic bottle to a stellarator; the last one is an open research problem: where the heat leaving the plasma should go.",
        cs: "Udržte plazma magnety: zvolte cívky, proud, poloměr a náklon, vystřelte a z diagnostiky Langmuirových sond vyčtěte, co se stalo. Magnetické pole z Biot–Savartova zákona, trasování siločar s Poincarého řezy, profil q(r) a 0-D energetická bilance, kalibrované podle mého vlastního výzkumu na tokamaku CASTOR. Jedenáct scénářů od magnetické láhve po stelarátor; poslední je otevřený výzkumný problém: kam odvést teplo, které z plazmatu uniká.",
      },
      links: [],
    },
    {
      name: "Orbit",
      sub: { en: "Orbital mechanics trainer", cs: "Trenažér orbitální mechaniky" },
      image: "assets/img/projects/orbit.webp",
      tags: ["Python", "NiceGUI", "Kepler", "GCP Cloud Run", "Terraform"],
      desc: {
        en: "You change your orbit, and the orbit takes you there. Rendezvous, plane changes and docking with four hulls from Apollo to an ion probe; Kepler's equation and finite burns are hand-written. Every scenario is verified by actually flying the plan, checking that doing nothing fails, and flying it again with small timing and burn errors.",
        cs: "Změníte dráhu a dráha vás tam dovede. Setkání na oběžné dráze, změny roviny a dokování se čtyřmi loděmi od Apolla po iontovou sondu; Keplerova rovnice a konečné zážehy jsou ručně psané. Každý scénář je ověřený skutečným proletěním plánu, kontrolou, že nečinnost selže, a opakovaným letem s drobnými chybami v čase a tahu.",
      },
      links: [
        { label: { en: "Play in the browser", cs: "Hrát v prohlížeči" }, url: "links.orbitWeb", primary: true },
      ],
    },
    {
      name: "Quantum",
      sub: { en: "Wave mechanics sandbox", cs: "Sandbox vlnové mechaniky" },
      image: "assets/img/projects/quantum.jpg",
      tags: ["Python", "NiceGUI", "NumPy", "Split-step Fourier"],
      desc: {
        en: "Prepare a wave packet and let the Schrödinger equation decide. Eight scenes: single and double slit with a which-path detector, uncertainty, tunnelling, identical atoms on a beam splitter and an open question on how long tunnelling takes. The split-step Fourier integrator is hand-written with no quantum library, and tests compare it against analytic solutions.",
        cs: "Připravte vlnový balík a nechte rozhodnout Schrödingerovu rovnici. Osm scén: jedna a dvě štěrbiny s detektorem dráhy, relace neurčitosti, tunelování, identické atomy na děliči svazku a otevřená otázka, jak dlouho tunelování trvá. Integrátor split-step Fourier je ručně psaný bez kvantové knihovny a testy ho porovnávají s analytickými řešeními.",
      },
      links: [],
    },
    {
      name: "Starforge3D",
      sub: { en: "Hard sci-fi incremental strategy", cs: "Hard sci-fi budovatelská strategie" },
      tags: ["Python", "NiceGUI", "Google Cloud Storage", "Terraform"],
      desc: {
        en: "From a single orbital station to mining Mercury and the first Dyson-swarm collector, in real units: joules, watts, kilograms. Atomic, versioned saves with migrations, up to eight hours of offline progress, and bot playthroughs that prove the economy can actually be finished.",
        cs: "Od jediné orbitální stanice po těžbu na Merkuru a první kolektor Dysonova roje, ve skutečných jednotkách: joulech, wattech, kilogramech. Atomické verzované savy s migracemi, až osm hodin offline postupu a boti, kteří dokazují, že se ekonomika dá opravdu dohrát.",
      },
      links: [],
    },
    {
      name: "MyZoo",
      sub: { en: "Zoo and animal-care simulation", cs: "Simulace zoo a péče o zvířata" },
      image: "assets/img/projects/myzoo.webp",
      tags: ["Python", "NiceGUI", "Flux", "Wan 2.2"],
      desc: {
        en: "From one enclosure to a wildlife institute. Animals keep their names and personalities, and welfare comes from real causes rather than a meter. Up to eight hours of offline simulation, a bot that plays to five stars, and art and animated loops generated locally with Flux and Wan 2.2.",
        cs: "Od jednoho výběhu po institut pro divokou přírodu. Zvířata mají jména a povahy a jejich pohoda vychází ze skutečných příčin, ne z ukazatele. Až osm hodin offline simulace, bot, který hru dohraje na pět hvězd, a art i animace generované lokálně přes Flux a Wan 2.2.",
      },
      links: [],
    },
    {
      name: "My Garden",
      sub: { en: "Ecosystem-building game", cs: "Hra o budování ekosystému" },
      image: "assets/img/projects/mygarden.jpg",
      tags: ["Python", "NiceGUI", "SVG", "ComfyUI"],
      desc: {
        en: "Start by looking after one snail and grow a self-sustaining garden in five phases: soil, pests and predators, pollinators. The garden keeps living while you are away, and an inspector explains where every number comes from.",
        cs: "Začnete péčí o jednoho šneka a v pěti fázích vypěstujete soběstačnou zahradu: půda, škůdci a predátoři, opylovači. Zahrada žije i když jste pryč a inspektor vysvětlí, odkud se bere každé číslo.",
      },
      links: [],
    },
  ],

  rag: [
    {
      title: { en: "Measure retrieval before tuning prompts", cs: "Nejdřív měřit retrieval, pak ladit prompty" },
      body: {
        en: "Golden datasets and evaluation workflows come first. Hybrid retrieval (vector plus keyword) in Azure AI Search, grounding with citations, so every answer can be traced back to a source.",
        cs: "Nejdřív golden datasety a evaluační workflow. Hybridní retrieval (vektory plus klíčová slova) v Azure AI Search, grounding s citacemi, aby se každá odpověď dala dohledat ke zdroji.",
      },
    },
    {
      title: { en: "Agents with tools, not chat boxes", cs: "Agenti s nástroji, ne chatovací okna" },
      body: {
        en: "Multi-step LLM workflows with function calling, orchestrated with LangChain and LangGraph. Deterministic code wherever it can do the job; the model only where judgement is needed.",
        cs: "Vícekrokové LLM workflow s function callingem, orchestrované přes LangChain a LangGraph. Deterministický kód všude, kde stačí; model jen tam, kde je potřeba úsudek.",
      },
    },
    {
      title: { en: "Documents in, structure out", cs: "Dokumenty dovnitř, struktura ven" },
      body: {
        en: "Azure Document Intelligence and multimodal pipelines that turn PDFs, scans and spreadsheets into data the retrieval layer can actually use.",
        cs: "Azure Document Intelligence a multimodální pipeline, které z PDF, skenů a tabulek udělají data, se kterými retrieval vrstva umí pracovat.",
      },
    },
    {
      title: { en: "A platform, not a prototype", cs: "Platforma, ne prototyp" },
      body: {
        en: "FastAPI services and Streamlit fronts in Docker on Azure Container Apps. Secrets in Key Vault, images in Container Registry, telemetry in Log Analytics, CI/CD for every change.",
        cs: "FastAPI služby a Streamlit frontendy v Dockeru na Azure Container Apps. Tajemství v Key Vaultu, image v Container Registry, telemetrie v Log Analytics, CI/CD pro každou změnu.",
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

  chatSuggestions: {
    en: ["What does Michal do at ABB?", "What are his salary expectations?", "When can he start, and does he work remotely?", "Has he led a team?", "What are his hobbies?", "Tell me about his physics simulations."],
    cs: ["Co dělá Michal v ABB?", "Jaké má platové představy?", "Kdy může nastoupit a pracuje na dálku?", "Vedl už tým?", "Jaké má koníčky?", "Řekni mi o jeho fyzikálních simulacích."],
  },
};
