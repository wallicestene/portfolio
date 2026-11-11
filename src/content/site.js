// Site content. Components read facts from here instead of hard-coding them.

export const person = {
  name: "Wallicestene Waweru",
  firstName: "Wallicestene",
  city: "Nairobi",
  country: "Kenya",
  timeZone: "Africa/Nairobi",
  email: "wallicestenewaweru@gmail.com",
  phone: "+254 794 848 717",
  phoneHref: "tel:+254794848717",
  resume: {
    href: "/Wallicestene_Waweru_Developer_Resume.pdf",
    filename: "Wallicestene_Waweru_Developer_Resume.pdf",
  },
  links: {
    github: "https://github.com/wallicestene",
    linkedin: "https://www.linkedin.com/in/wallicestene",
    x: "https://twitter.com/wallicestene",
    apify: "https://apify.com/tangerine_loom",
    upwork: "https://www.upwork.com/freelancers/wallicestene",
  },
};

export const education = {
  school: "KCA University",
  degree: "BSc Applied Computing",
  focus: "Software Development",
  period: "Sept 2021 – Nov 2025",
  honours: "Second Class Upper Division",
  certifications: [
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "LFS101: Introduction to Linux",
    "Data Structures & Algorithms",
    "Front-end Development",
  ],
};

// Roles, newest first.
export const experience = [
  {
    id: "safaricom",
    label: "Safaricom",
    company: "Safaricom",
    logo: "safaricom",
    role: "Software Engineer",
    team: "API Engineering, Mini Apps and partner ecosystem",
    start: "May 2026",
    end: "Present",
    location: "Nairobi",
    summary: "Mini apps that run inside M-PESA, and the tools partner teams use to build their own.",
    points: [
      "Built a 70+ component library on Ant Design Mini that Safaricom teams and partners install as a package.",
      "Kept our changes in a layer above it, so upstream releases still come in.",
      "Wrote the docs and release pipeline partner developers ship with.",
      "Tested every change in sandbox mini apps before release.",
    ],
    tools: ["TypeScript", "React", "Ant Design Mini", "Alipay+ framework", "Mini Program Studio", "Dumi", "pnpm", "GitLab"],
  },
  {
    id: "freelance",
    label: "Freelance",
    company: "Upwork",
    role: "Freelance Software Engineer",
    team: "Full-stack development and data pipelines",
    start: "Oct 2025",
    end: "Present",
    location: "Remote",
    summary: "Full-stack products and data pipelines for teams in Denmark, the UK, the US and Canada.",
    points: [
      "Built front ends, APIs and data models for Responsibly, GO10 Limited and clients in the US and Canada.",
      "Built 20+ Apify actors; the ones in production feed clients’ AI systems and agents.",
      "Over 99% of runs succeed, with proxy rotation, session pooling and retries.",
    ],
    clients: ["responsibly", "go10"],
    tools: ["React", "Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Apify SDK", "Crawlee", "Playwright"],
  },
  {
    id: "kra",
    label: "KRA",
    company: "Kenya Revenue Authority",
    logo: "kra",
    role: "ICT Intern",
    team: "Portal security and pension modules",
    start: "June 2025",
    end: "Sept 2025",
    location: "Nairobi",
    summary: "Security and pension features for a staff portal used by thousands.",
    points: [
      "Added two-step sign-in, CAPTCHA and safer registration during a system-wide upgrade.",
      "Shipped pension calculators and contribution filters with a team of 8+ developers.",
    ],
    tools: ["MFA", "CAPTCHA", "System integration", "Agile"],
  },
  {
    id: "unity-homes",
    label: "Unity Homes",
    company: "Unity Homes",
    logo: "unity",
    role: "IT Intern",
    team: "OCF Internship Program",
    start: "June 2024",
    end: "Aug 2024",
    location: "Nairobi",
    summary: "React screens and Node.js APIs for property tools.",
    points: ["Built interfaces and REST APIs, and scripted workflows that cut manual work."],
    tools: ["React", "Node.js", "REST APIs"],
  },
];

// Grouped as on the résumé.
export const stack = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Radix UI", "Ant Design Mini"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "FastAPI", "Prisma"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { group: "APIs and auth", items: ["REST API design", "BetterAuth", "JWT", "Firebase", "Groq LLM API"] },
  { group: "Data and automation", items: ["Apify SDK", "Crawlee", "Playwright", "Cheerio"] },
  { group: "Cloud and tooling", items: ["AWS S3", "Docker", "Git", "CI/CD", "pnpm", "GitLab"] },
];

// Public Upwork reviews, quoted word for word. On Upwork he is "Wallace W.".
export const upwork = {
  jobSuccess: "100%",
  badge: "Top Rated",
  endorsements: ["Reliable", "Collaborative", "Solution Oriented", "Clear Communicator", "Accountable for Outcomes"],
  reviews: [
    {
      name: "Eva Kuentz",
      company: "Responsibly",
      country: "Denmark",
      job: "Typescript Scraper Development using Crawlee",
      date: "Oct 2026",
      rating: 5,
      quote:
        "Wallace is very meticulous and always provides insightful comments. The work is always of high quality. It is a pleasure to work with him !",
    },
    {
      name: "Jefferson Yong",
      company: "GO10 Limited",
      country: "UK",
      job: "Boots Scraper Update",
      date: "Mar 2026",
      rating: 5,
      quote:
        "Wallace is swift with responses and gets the job done in the quickest straight-line. Will work with him again.",
    },
    {
      name: "Eva Kuentz",
      company: "Responsibly",
      country: "Denmark",
      job: "Typescript Scraper Development using Crawlee",
      date: "Apr 2026",
      rating: 5,
      quote:
        "I have a great experience working with Wallace. The quality of the work was excellent, and everything was delivered accurately and efficiently. Wallace is very helpful throughout the process, always responsive, and quick to address any questions or adjustments. Communication was smooth, and he consistently worked fast without compromising on quality.\n\nI would definitely recommend him and would be happy to work together again.",
    },
    { name: "Aksel Birkoe", rating: 5, quote: null },
  ],
};
// Public Apify actors; `snapshot` is the fallback when the API is unreachable.
export const actors = [
  {
    id: "hotpads",
    apiId: "tangerine_loom~Hotpads-Scraper",
    name: "Hotpads Scraper",
    store: "https://apify.com/tangerine_loom/hotpads-scraper",
    summary:
      "Rental listings from HotPads.com for any US city: price, beds, baths, address, photos, amenities, pet policy and nearby schools.",
    snapshot: { date: "2026-10-20", users: 30, runs: 461, rating: 5, reviews: 1 },
  },
  {
    id: "gmaps",
    apiId: "tangerine_loom~google-maps-leads-scraper",
    name: "Google Maps Leads Scraper",
    store: "https://apify.com/tangerine_loom/google-maps-leads-scraper",
    summary:
      "Business leads from Google Maps in one run: emails, phone numbers, named staff, opening hours, coordinates and six social networks.",
    snapshot: { date: "2026-10-20", users: 1, runs: 52, rating: 0, reviews: 0 },
  },
];

// Flagship projects.
export const flagship = [
  {
    slug: "dapi",
    brand: { bg: "#f1efe4", surface: "#ffffff", ink: "#16222f", muted: "#545c66", accent: "#9bd22a", line: "rgb(22 34 47 / 0.12)" },
    name: "Dapi",
    tagline: "Web data you can prove.",
    status: "Live",
    year: "2026",
    role: "Built solo",
    summary:
      "Tell Dapi what data you need, by typing it, uploading a brief or just saying it, and it delivers the dataset with a receipt for every value: the exact page it came from, sealed the moment it arrived.",
    problem:
      "Web data is only useful if you can stand behind it. Dapi is for people who need that and don’t write scrapers: a compliance officer checking a public register, an analyst tracking competitors, a researcher, a team gathering training data that has to show where every value came from.",
    built: [
      "An investigation agent on Meta’s Muse Wonder that opens the site and watches what it loads. When a page is fed by the site’s own data feed, Dapi reads the feed instead of scraping the page.",
      "Extraction code written by Muse Spark and tested against your sample rows before anything runs. A run that breaks is stopped, repaired from its log and started again.",
      "A receipt for every value. Each response is sealed with SHA-256 as it arrives; click a value and the captured page opens with that value outlined. Rows are counted against the source’s own total, and anything missing is named.",
      "Voice briefs: press the mic and say what you need. Muse Voice Transcribe hears it and Muse Spark writes it up as a spec.",
    ],
    decisions: [
      "Public data only. No logins, no paywalls.",
      "A check that wants a person, like a CAPTCHA, is set aside, never solved.",
      "robots.txt is obeyed, including the pause it asks for between requests.",
      "Receipts show only the fields a job delivers, never everything else a site sent.",
    ],
    result: {
      value: "503 / 503",
      label: "FDA warning letters delivered and counted, read from the feed behind a page that shows 11 at a time",
      short: "FDA letters delivered, every one counted",
    },
    stack: ["Next.js", "Node.js", "Meta Muse models", "Apify", "Crawlee", "Playwright", "Fly.io"],
    image: "dapi-home",
    gallery: [
      { image: "dapi-new-job", caption: "Ask by typing, uploading a brief or saying it." },
      { image: "dapi-investigation", caption: "The FDA page shows its letters a few at a time. Dapi found the feed behind it and reads all 503." },
      { image: "dapi-receipt", caption: "A receipt: the visitor count, outlined on the Wikipedia page as Dapi captured it." },
    ],
    live: "https://dapi.fly.dev",
    repo: "https://github.com/wallicestene/Dapi",
    video: "https://youtu.be/2pqyYwJvAuI",
  },
  {
    slug: "soko-mbele",
    brand: { bg: "#0f1715", surface: "#16211e", ink: "#eef3ef", muted: "#93a69d", accent: "#e3b23c", line: "rgb(238 243 239 / 0.1)" },
    name: "Soko Mbele",
    tagline: "Sell where it pays.",
    status: "Working app",
    year: "2026",
    role: "Built the whole app, for our team at the Safaricom interns’ hackathon",
    summary:
      "Soko Mbele helps a Kenyan farmer decide where to sell a harvest, whether waiting will pay, and how much they take home after transport. It compares every market within a day’s trip of the farm, using the Ministry of Agriculture’s market prices and a price forecast trained on them.",
    problem:
      "Farmers usually sell to whichever broker turns up at the farm gate, on the day he turns up. Prices differ a lot between markets and move from week to week, and the farmer sees neither.",
    built: [
      "A decision engine that compares every market within reach on what the farmer actually takes home after freight, loading, the market fee and their own fare and time.",
      "A price forecast: LightGBM trained on 336,972 checked KAMIS market reports from 2005 to 2026, forecasting one to four weeks ahead with an 80% range. The app acts on the low end of that range, not the middle.",
      "A weekly pipeline that pulls new prices, rainfall (NASA POWER), diesel prices (EPRA) and road distances (OpenStreetMap), then retrains and checks the model. A model that fails any check is never published.",
      "Coverage of 16 crops, 7,862 towns and villages in all 47 counties, and 75 markets. A market that has gone quiet is never recommended.",
    ],
    decisions: [
      "It only says move or wait if the cautious numbers still pay at least KSh 1,000, or 10% more than the nearest market.",
      "A market whose price is far out of line with its neighbours is never recommended.",
      "The results page shows where the model loses too: it trails the simple guess on 3 of 16 crops.",
    ],
    result: {
      value: "70%",
      label: "of big price moves (10% or more) called the right way. A guess that the price stays put can call none.",
      short: "of big price moves called the right way",
    },
    stack: ["Next.js", "TypeScript", "Python", "LightGBM", "GitLab CI", "OpenStreetMap"],
    image: "soko-desktop",
    phones: [
      { image: "soko-phone-home", caption: "Pick a crop, how much and the nearest town. The answer comes back in shillings, after transport." },
      { image: "soko-phone-sell-answer", caption: "The full answer, with the price at each market and what to ask a broker for at the gate." },
      { image: "soko-phone-insights", caption: "The Results page: every step from government prices to one answer, each one something you can check." },
    ],
    live: null,
    repo: "https://github.com/wallicestene/soko-mbele",
  },
  {
    slug: "earnest-motors",
    brand: { bg: "#15110f", surface: "#211b18", ink: "#f4efe6", muted: "#a89f92", accent: "#c08a14", line: "rgb(244 239 230 / 0.1)" },
    name: "Earnest Motors",
    tagline: "A car dealer’s showroom, online.",
    status: "Live",
    year: "2026",
    role: "Frontend, with Andrew Kinyua on the Django backend",
    client: "Earnest Motors Ltd, Kenya",
    summary:
      "The website for Earnest Motors, a car dealer in Kenya. Buyers browse the cars in stock, filter by make, model, year, price and type, open any car for its details, and talk to the dealer on WhatsApp.",
    built: [
      "The React frontend, end to end: the home page and stock search, the car detail pages, About, and the Import Process page.",
      "Search and filters wired to the dealer’s own inventory through the backend’s API.",
      "Built with my friend Andrew Kinyua, who built the Django backend.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Django"],
    image: "earnest-home",
    gallery: [
      { image: "earnest-s1", caption: "The stock page: every car with its mileage, fuel, gearbox and price." },
    ],
    live: "https://earnestmotorsltd.com/",
    repo: null,
  },
];

// Other projects.
export const featured = [
  {
    slug: "wesh",
    brand: { bg: "#1e4637", surface: "#0b2a22", ink: "#c7efdd", muted: "#8fb8a6", accent: "#e8a92a", line: "rgb(199 239 221 / 0.14)" },
    name: "Wesh",
    tagline: "San Francisco rentals, hunted for you.",
    status: "In development",
    year: "2026",
    summary:
      "Wesh watches San Francisco’s rental platforms and pulls everything into one curated feed. When something fits, renters talk to a real local, not a portal.",
    built: [
      "A pipeline that watches HotPads, normalises every listing and stores one clean feed in PostgreSQL.",
      "A neighbourhood-first browse experience on a live map, with verified and flagged sources kept apart.",
      "An admin for curating, featuring and verifying listings, and one-tap WhatsApp or email to close a lead.",
    ],
    stack: ["Next.js", "TanStack Query", "MapLibre", "Express", "Prisma", "PostgreSQL"],
    image: "wesh",
    position: "0% 0%",
    repo: null,
    live: null,
  },
  {
    slug: "vesper",
    brand: { bg: "#f4f4f1", surface: "#ffffff", ink: "#141414", muted: "#5e6259", accent: "#556148", line: "rgb(20 20 20 / 0.1)" },
    name: "Vesper",
    tagline: "Social media management, in one workspace.",
    status: "In development",
    year: "2025",
    summary:
      "A Buffer-style platform for planning and scheduling posts across social channels, with a content calendar, analytics and a shared media library.",
    built: [
      "The landing page with Framer Motion, and a full dashboard: content calendar, analytics views and a central media library.",
      "Background scheduling with node-cron and engagement analytics on Express and PostgreSQL.",
      "Session-based sign-in with BetterAuth and Prisma.",
    ],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "BetterAuth"],
    image: "vesper",
    position: "50% 22%",
    repo: null,
    live: null,
  },
  {
    slug: "pesapal-rdbms",
    brand: { bg: "#0d0f0e", surface: "#151817", ink: "#e6ece9", muted: "#8a918d", accent: "oklch(0.9 0.05 165)", line: "rgb(230 236 233 / 0.1)" },
    name: "Pesapal RDBMS",
    tagline: "A relational database, written from scratch.",
    status: "Open source",
    year: "2026",
    summary:
      "My entry for the Pesapal Junior Dev Challenge ’26: a working relational database with its own SQL parser, an interactive REPL, a REST API and a hotel booking app that runs on it.",
    built: [
      "A SQL parser for CREATE TABLE, INSERT, SELECT with WHERE, UPDATE, DELETE and JOIN across five data types.",
      "Primary keys, unique constraints, auto-increment and indexing.",
      "A REPL, a REST API layer and a React hotel booking demo running end to end on the engine.",
    ],
    stack: ["TypeScript", "Node.js", "Express", "React"],
    image: null,
    diagram: true,
    position: "50% 50%",
    repo: "https://github.com/wallicestene/pesapal-rdbms-challenge",
    live: null,
  },
  {
    slug: "bookify",
    brand: { bg: "#fbfaf8", surface: "#ffffff", ink: "#111827", muted: "#5b6270", accent: "#f07010", line: "rgb(17 24 39 / 0.1)" },
    name: "Bookify",
    tagline: "Find a place, book it, done.",
    status: "Live",
    year: "2024",
    summary:
      "An Airbnb-style booking platform with advanced search filters, image carousels, date and guest pickers, and booking dashboards.",
    built: [
      "Search with filters, carousels, date pickers, guest selectors and owner dashboards.",
      "JWT auth, Joi validation, Helmet and rate limiting, with image uploads to AWS S3 through Multer.",
      "Query and interface tuning that lifted user engagement by 20%.",
    ],
    result: { value: "+20%", label: "user engagement after tuning backend queries and the interface" },
    stack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Tailwind CSS"],
    image: "bookify",
    position: "50% 0%",
    repo: "https://github.com/wallicestene/Bookify",
    live: "https://appbookify.netlify.app/",
  },
];

export const moreProjects = [
  {
    name: "iSDA Soil Analysis Tool",
    kind: "Python CLI with a Groq LLM",
    detail: "Fetches soil data from the iSDA Africa API, classifies N/P/K/pH, recommends fertiliser and explains it in plain words.",
    year: null,
    repo: null,
    live: null,
  },
  {
    name: "MetaBlog",
    kind: "Publishing with roles",
    detail: "Blogging with role-based access control and sanitised input.",
    year: "2024",
    repo: "https://github.com/wallicestene/Blog",
    live: "https://the-metablog.netlify.app/",
  },
  {
    name: "E-shop",
    kind: "Fashion store",
    detail: "Clothing and accessories store with a cart and checkout flow.",
    year: "2023",
    repo: "https://github.com/wallicestene/Ecommerce-shop",
    live: "https://my-e-commerce-shop.netlify.app/",
  },
  {
    name: "TinyUrl",
    kind: "URL shortener",
    detail: "Shortens links and redirects through its own API.",
    year: "2023",
    repo: "https://github.com/wallicestene/Url-shortener-app",
    live: "https://tinyurls.netlify.app/",
  },
];

// A real REPL session (wide columns trimmed, values unchanged).
export const pesapalSession = [
  { prompt: "SELECT * FROM rooms WHERE status = 'Booked'" },
  {
    output: [
      "┌────────┬──────────┬───────┬──────────┬────┐",
      "│ number │ type     │ price │ status   │ id │",
      "├────────┼──────────┼───────┼──────────┼────┤",
      "│ '101'  │ 'Single' │ 5000  │ 'Booked' │ 1  │",
      "│ '105'  │ 'Double' │ 8000  │ 'Booked' │ 5  │",
      "└────────┴──────────┴───────┴──────────┴────┘",
    ],
  },
  { prompt: "SELECT * FROM bookings JOIN rooms ON bookings.roomId = rooms.id" },
  {
    output: [
      "┌─────────────────┬──────────────────┬──────────────┬────────────┬─────────────┐",
      "│ bookings.roomId │ bookings.guestId │ rooms.number │ rooms.type │ rooms.price │",
      "├─────────────────┼──────────────────┼──────────────┼────────────┼─────────────┤",
      "│ 1               │ 1                │ '101'        │ 'Single'   │ 5000        │",
      "│ 5               │ 3                │ '105'        │ 'Double'   │ 8000        │",
      "└─────────────────┴──────────────────┴──────────────┴────────────┴─────────────┘",
    ],
  },
];

// Capability layers, top to bottom; every `stack` tool appears in one.
export const layers = [
  {
    id: "interface",
    name: "Interface",
    line: "What people touch.",
    proof: "Interfaces that feel fast, read clearly and work for everyone. Built from reusable components, for the web and for mini apps.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Ant Design Mini", "Alipay+ framework", "Mini Program Studio", "Dumi", "pnpm"],
  },
  {
    id: "product",
    name: "Product",
    line: "The app around it.",
    proof: "Full stack, front end to back end. I design the API and the data model together with the screens, so the app holds together as it grows.",
    tools: ["JavaScript", "Node.js", "Express", "NestJS", "FastAPI", "Prisma", "PostgreSQL", "MongoDB", "MySQL", "REST API design", "AWS S3", "Docker", "CI/CD", "Git", "GitLab"],
  },
  {
    id: "agents",
    name: "Agents",
    line: "What thinks and acts for it.",
    proof: "Tool-calling agents inside workflows that actually work. The agent calls real tools, and the pipeline around it checks every result before anything depends on it.",
    tools: ["Meta Muse models", "Vertex AI", "Agent Development Kit", "LLM tool calling", "Groq LLM API"],
  },
  {
    id: "data",
    name: "Data",
    line: "What runs underneath.",
    proof: "Pipelines built for scale. Proxy rotation, session pooling, retries and batching keep over 99% of runs succeeding.",
    tools: ["Python", "SQL", "Apify SDK", "Crawlee", "Playwright", "Cheerio"],
  },
  {
    id: "security",
    name: "Security",
    line: "Who gets in.",
    proof: "Sign-in that keeps the wrong people out: multi-factor authentication, CAPTCHA and secure registration, for portals used by thousands.",
    tools: ["BetterAuth", "JWT", "Firebase", "MFA", "CAPTCHA"],
  },
];

// Practice rules for the hero card.
export const practices = [
  {
    icon: "layers",
    title: "Build on top of a library, never against it.",
    detail: "Customise in a layer above it, so every upstream release still comes in without breaking your changes.",
    from: "Components",
    to: "#capabilities",
  },
  {
    icon: "flask",
    title: "Prove it in a sandbox before it ships.",
    detail: "Every change runs in a real test app first, in each environment it will live in.",
    from: "Shipping",
    to: "#capabilities",
  },
  {
    icon: "retry",
    title: "Build runs that finish.",
    detail: "Backoff, pooled sessions and rotated proxies keep over 99% of client runs succeeding.",
    from: "Pipelines",
    to: "#data",
  },
  {
    icon: "feed",
    title: "Read the feed before you read the page.",
    detail: "Most sites load their data from a feed of their own. Reading it is faster and more exact than reading the page.",
    from: "Data",
    to: "#data",
  },
  {
    icon: "agent",
    title: "Give the agent real tools, then check its work.",
    detail: "Agents call real tools, and every result is tested before anything runs on it.",
    from: "Agents",
    to: "#capabilities",
  },
  {
    icon: "receipt",
    title: "Every value should say where it came from.",
    detail: "Seal each response as it arrives, so any number can be traced back to its source.",
    from: "Data",
    to: "#data",
  },
  {
    icon: "check",
    title: "Never ship a model that fails its checks.",
    detail: "Retrain on fresh data, test it, and only publish what passes.",
    from: "Machine learning",
    to: "#capabilities",
  },
];

// Every project with a case-study page.
export const allProjects = [...flagship, ...featured];
