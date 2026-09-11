// ============================================================
// SITE CONTENT — populated from Hans Christian Cañadido's CV.
// Nothing here touches layout or styling, so it's safe to edit
// freely without breaking the components.
// ============================================================

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "tools", label: "Tools" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const LOGO_MARK = "Hans Christian Cañadido"; // Shown in the top-left corner of the nav bar and in the footer

export const HERO = {
  title: "Computer Science Graduate · Full-Stack & Mobile Developer",
  name: "Hans Christian Cañadido",
  intro:
    "I build across the stack — web, mobile, IoT, and AI/ML — with hands-on experience in UI/UX and graphic design as well. I like turning real-world problems into working software from end to end.",
};

export const ABOUT = {
  paragraphs: [
    "I'm a Computer Science graduate with hands-on experience across web development, mobile app development, IoT, computer networking, and AI/ML integration, complemented by skills in UI/UX design, graphic design, and image and video editing.",
    "I enjoy owning a project end to end — from designing the interface, to building the backend, to deploying and supporting it — and I'm always looking to apply technical and creative skills to real-world projects.",
  ],
  location: "San Antonio, Sto. Tomas, Pangasinan, Philippines",
};

// Shown in the scrolling marquee — a mix of your most-used languages,
// frameworks, and platforms from your tools & skills list.
//
// `logo` points at an official/recognized brand icon (via the devicon
// CDN). If a logo URL 404s or is left blank, TechStack.jsx automatically
// falls back to a placeholder box you can drop your own image into —
// see the "IMAGE:" comment in that file.
const ICONS = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
export const TECH_STACK = [
  { name: "React", code: "Re", logo: `${ICONS}/react/react-original.svg` },
  { name: "TypeScript", code: "TS", logo: `${ICONS}/typescript/typescript-original.svg` },
  { name: "JavaScript", code: "JS", logo: `${ICONS}/javascript/javascript-original.svg` },
  { name: "PHP", code: "Ph", logo: `${ICONS}/php/php-original.svg` },
  { name: "Laravel", code: "Lv", logo: `${ICONS}/laravel/laravel-original.svg` },
  { name: "Python", code: "Py", logo: `${ICONS}/python/python-original.svg` },
  { name: "Django", code: "Dj", logo: `${ICONS}/django/django-plain.svg` },
  { name: "Next.js", code: "Nx", logo: `${ICONS}/nextjs/nextjs-original.svg` },
  { name: "Node.js", code: "Nd", logo: `${ICONS}/nodejs/nodejs-original.svg` },
  { name: "Flutter", code: "Fl", logo: `${ICONS}/flutter/flutter-original.svg` },
  // TODO: no reliable official React Native mark on the icon CDN used
  // above — drop a logo file in /public/logos/ and set `logo` below,
  // e.g. logo: "/logos/react-native.svg"
  { name: "React Native", code: "RN", logo: `${ICONS}/react/react-original.svg` },
  { name: "Firebase", code: "Fb", logo: "/firebase.svg" },
  { name: "Supabase", code: "Sb", logo: `${ICONS}/supabase/supabase-original.svg` },
  { name: "MySQL", code: "My", logo: `${ICONS}/mysql/mysql-original.svg` },
  { name: "PostgreSQL", code: "Pg", logo: `${ICONS}/postgresql/postgresql-original.svg` },
  { name: "TensorFlow", code: "Tf", logo: `${ICONS}/tensorflow/tensorflow-original.svg` },
  { name: "Figma", code: "Fg", logo: `${ICONS}/figma/figma-original.svg` },
  { name: "Git", code: "Gt", logo: `${ICONS}/git/git-original.svg` },
];

// Tools & platforms, grouped the same way as the CV's "Tools and
// Platforms" section. Shown in the Tools section as hoverable/tappable
// category cards (like Skills) whose popover shows each tool's logo
// (like Tech Stack). Same fallback rule as TECH_STACK above: a missing
// or 404ing `logo` automatically becomes a placeholder box.
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";
export const TOOLS = [
  {
    category: "Version Control",
    tools: [
      { name: "Git", code: "Gt", logo: `${ICONS}/git/git-original.svg` },
      { name: "GitHub", code: "Gh", logo: `${ICONS}/github/github-original.svg` },
    ],
  },
  {
    category: "Development Environments",
    tools: [
      { name: "VS Code", code: "VS", logo: `${ICONS}/vscode/vscode-original.svg` },
      { name: "Android Studio", code: "AS", logo: `${ICONS}/androidstudio/androidstudio-plain.svg` },
      { name: "Antigravity", code: "Ag", logo: "/antigravity.svg" },
      { name: "Google Colab", code: "GC", logo: `${SIMPLE_ICONS}/googlecolab.svg` },
      { name: "Arduino IDE", code: "Ar", logo: `${ICONS}/arduino/arduino-original.svg` },
    ],
  },
  {
    category: "API Testing",
    tools: [{ name: "Postman", code: "Pm", logo: `${ICONS}/postman/postman-original.svg` }],
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", code: "Fg", logo: `${ICONS}/figma/figma-original.svg` },
      { name: "Adobe Photoshop", code: "Ps", logo: "/photoshop.svg" },
      { name: "Adobe Illustrator", code: "Ai", logo: "/illustrator.svg" },
      { name: "Adobe XD", code: "Xd", logo: `${ICONS}/xd/xd-plain.svg` },
      { name: "Canva", code: "Cv", logo: "canva.svg" }, // no official Canva mark in the icon CDN used above, so this is a local file in /public/logos/
    ],
  },
  {
    category: "Video Editing",
    tools: [
      // Alternative source: simple-icons added a CapCut mark — if it
      // 404s (icon set coverage changes over time), this falls back
      // to a placeholder automatically like everything else here.
      { name: "CapCut", code: "Cc", logo: "/capcut.svg" },
      { name: "DaVinci Resolve", code: "Dr", logo: `${SIMPLE_ICONS}/davinciresolve.svg` },
    ],
  },
  {
    category: "AI Assistants",
    tools: [
      { name: "Claude", code: "Cl", logo: `${SIMPLE_ICONS}/claude.svg` },
      { name: "Claude Code", code: "CC", logo: `${SIMPLE_ICONS}/claude.svg` },
      // Alternative source: no separate public Claude Code mark, so
      // this reuses Anthropic's Claude logo (same product family)
      // instead of leaving it blank.
      { name: "ChatGPT", code: "Ch", logo: `${SIMPLE_ICONS}/openai.svg` },
      { name: "Gemini", code: "Ge", logo: "/gemini.svg" },
      { name: "Cursor", code: "Cu", logo: `${SIMPLE_ICONS}/cursor.svg` },
      { name: "Github Copilot", code: "GC", logo: `${SIMPLE_ICONS}/githubcopilot.svg` },
    ],
  },
  {
    category: "Local LLM Tools",
    tools: [
      { name: "Ollama", code: "Ol", logo: `${SIMPLE_ICONS}/ollama.svg` },
      // Alternative source: simple-icons added an LM Studio mark — if
      // it 404s, this falls back to a placeholder automatically.
      { name: "LM Studio", code: "LM", logo: `${SIMPLE_ICONS}/lmstudio.svg` },
    ],
  },
];

// Skills, grouped to match the CV's "Tools and Platforms" section.
// Tabs render in this order in the Skills section.
export const SKILLS = [
  {
    category: "Web Development",
    items: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Laravel",
      "Django",
      "MERN Stack",
      "Next.js",
      "RESTful API",
      "Responsive Web Design",
    ],
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "React Native"],
  },
  {
    category: "Databases & Backend",
    items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "Firebase Integration"],
  },
  {
    category: "IoT & Networking",
    items: ["Internet of Things (IoT) Development", "Computer Networking"],
  },
  {
    category: "AI / ML",
    items: ["Model Training & Integration", "TensorFlow", "PyTorch"],
  },
  {
    category: "Design",
    items: [
      "UI/UX Design",
      "Graphic Design",
      "Image Editing",
      "Video Editing",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Canva",
    ],
  },
  {
    category: "Other Technical",
    items: [
      "Cybersecurity Fundamentals",
      "PC Building & Maintenance",
      "Git & GitHub",
      "Postman",
      "VS Code",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Problem-Solving",
      "Attention to Detail",
      "Self-Direction & Ownership",
      "Adaptability",
      "Time Management",
      "Client & User Support",
      "Communication",
      "Continuous Learning",
    ],
  },
];

// Certifications & eligibility — grouped by issuer, shown in the
// Certifications section as a set of cards.
export const CERTIFICATIONS = [
  {
    issuer: "Civil Service Commission",
    items: ["Career Service Professional Eligibility"],
  },
  {
    issuer: "Cisco Networking Academy — Course Completion Certificates",
    items: [
      "IT Customer Support Basics",
      "Computer Hardware Basics",
      "Introduction to Modern AI",
      "Getting Started with Cisco Packet Tracer",
      "Introduction to IoT and Digital Transformation",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Template Based Document Generator",
    description:
      "A web-based template based document generation system that automates document creation with dynamic templates. Designed the UI/UX, integrated Firebase with secure authentication, and handled testing, deployment, and ongoing support end to end.",
    tags: ["React", "TypeScript", "JavaScript", "Firebase"],
    link: "#",
  },
  {
    title: "Texant — Handwriting-to-Text-to-Speech App",
    description:
      "A mobile application that converts handwritten text into editable digital text, integrating OCR and text-to-speech technology, with text editing and document export built in.",
    tags: ["Mobile", "OCR", "Text-to-Speech"],
    link: "#",
  },
  {
    title: "E-Commerce Store Website",
    description:
      "A responsive online store with product browsing, cart, and checkout, including Messenger-based checkout for direct order submission and Firebase-managed products and orders.",
    tags: ["Web Frontend", "Supabase", "Messenger API"],
    link: "#",
  },
];

export const GRAPHIC_DESIGN = [
  { src: "/CAP.jpg", alt: "Graphic design piece 1" },
  { src: "/Chess.png", alt: "Graphic design piece 2" },
  { src: "/Table tennis.png", alt: "Graphic design piece 3" },
  { src: "/Petangue_.png", alt: "Graphic design piece 4" },
  { src: "/CODM.png", alt: "Graphic design piece 5" },
  { src: "/ML.png", alt: "Graphic design piece 6" },
  { src: "/MVP.png", alt: "Graphic design piece 7" },
];

// No formal work experience yet, so this timeline currently holds
// education — add roles above it as you gain them.
export const EXPERIENCE = [
  {
    year: "2022 — 2025",
    role: "Social Media Manager",
   company: "",
    description:
      "Managed organization, school, and personal social media pages by creating graphics, videos, announcements, and promotional content. Handled content scheduling, livestreaming, event coverage, and audience engagement.",
  },

  {
    year: "2023 — 2026",
    role: "Web Developer",
    company: "",
    description:
      "Developed websites and web applications such as document generators, inventory systems, administrative tools, and student-focused platforms, with database, API, and AI/OCR integrations.",
  },
  
  {
    year: "2023 — 2026",
    role: "IoT Developer",
    company: "",
    description:
      "Designed and developed IoT-based projects by integrating microcontrollers, sensors, cameras, and software applications to create connected and automated systems.",
  },

  {
    year: "2024 — 2026",
    role: " Mobile Developer",
    company: "",
    description:
      "Developed mobile applications for inventory management, student services, and IoT monitoring, including UI/UX design and AI features such as OCR, handwriting recognition, text-to-speech, and grammar checking.",
  }
];

export const CONTACT = {
  heading: "Let's work together",
  note: "Have a project in mind or just want to say hello? My inbox is open.",
  email: "hanscanadido@gmail.com",
};

export const SOCIALS = [
  { icon: "Github", label: "GitHub", href: "https://github.com/CH4kR45" },
  { icon: "Linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/hanschristianmc/" },
  { icon: "Mail", label: "Email", href: "mailto:hanscanadido@gmail.com" },
];

export const FOOTER_NAME = "Hans Christian Cañadido";
