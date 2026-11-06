import type { TechIconName } from "@/components/tech-icons";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
  icons: TechIconName[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  points: string[];
};

export type Project = {
  title: string;
  category: "Web" | "UI/UX" | "Network & IT" | "Blender" | "Media";
  context: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  cover: {
    src: string;
    alt: string;
  };
  video?: string;
  gallery: {
    src: string;
    alt: string;
    label: string;
  }[];
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: string;
  file: string;
  thumbnail: string;
  pages: number;
};

export const profile = {
  name: "Bimas Buky",
  firstName: "Bimas",
  lastName: "Buky",
  initials: "BB",
  role: "Junior Full Stack Engineer",
  location: "South Jakarta, Indonesia",
  timezone: "GMT+7",
  email: "bimasbuky3rd@gmail.com",
  github: "https://github.com/bimas2nd",
  githubLabel: "github.com/bimas2nd",
  linkedin: "https://www.linkedin.com/in/bimas-buky-861154204/",
  linkedinLabel: "in/bimas-buky",
  cv: "/CV_Bimas_Buky.pdf",
  portrait: "/profile-portrait.jpg",
  availability: "Open to full-stack & IT roles",
  tagline:
    "I build full-stack products — and the secure infrastructure that keeps them running.",
  summary:
    "Informatics graduate with 2+ years of experience building full-stack web applications and secure systems. I work across Python, TypeScript, Next.js, PHP and SQL, with hands-on experience in PostgreSQL, MySQL, SQL Server, Oracle and Redis. I also integrate AI services such as Gemini and OpenAI, and keep infrastructure safe with Wazuh, Wireshark, Zabbix, OPNsense and WireGuard.",
  currently:
    "Building internal tools for a university laboratory, and exploring AI-assisted workflows with Gemini and OpenAI.",
  stats: [
    { label: "Experience", value: "2+ years building web apps and internal tools" },
    { label: "Education", value: "S1 Informatika — Universitas Gunadarma" },
    { label: "GPA", value: "3.82 / 4.00" },
    { label: "Certifications", value: "15 across networking, security, data and code" },
    { label: "Based in", value: "South Jakarta, Indonesia" },
  ],
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL", "Go", "Java", "C++", "HTML", "CSS"],
    icons: ["python", "typescript", "javascript", "php", "go", "java", "cpp"],
  },
  {
    id: "web",
    title: "Web & Backend",
    items: ["Next.js", "React.js", "Node.js", "Express", "FastAPI", "Flask", "CodeIgniter 4", "REST API"],
    icons: ["nextjs", "react", "nodejs", "express", "fastapi", "flask", "codeigniter"],
  },
  {
    id: "data",
    title: "Databases",
    items: ["PostgreSQL 16 + pgvector", "MySQL", "SQL Server", "Oracle", "Redis"],
    icons: ["postgresql", "mysql", "sqlserver", "oracle", "redis"],
  },
  {
    id: "ai",
    title: "AI & Data",
    items: ["Gemini API", "OpenAI API", "TensorFlow", "NLTK", "Vector search", "Data pipelines"],
    icons: ["gemini", "openai", "tensorflow", "nltk", "vector", "pipeline"],
  },
  {
    id: "infra",
    title: "Systems & Networking",
    items: ["Linux", "Ubuntu", "Docker", "Nginx", "Vercel", "Cisco", "MikroTik", "TCP/IP", "WAN / LAN / WLAN"],
    icons: ["linux", "ubuntu", "docker", "nginx", "vercel", "cisco", "mikrotik"],
  },
  {
    id: "security",
    title: "Cybersecurity",
    items: ["Wazuh", "Wireshark", "Zabbix", "OPNsense", "WireGuard", "SIEM", "DevSecOps"],
    icons: ["wazuh", "wireshark", "zabbix", "opnsense", "wireguard"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Laboratory Admin Assistant",
    company: "Universitas Gunadarma",
    location: "Depok",
    period: "Oct 2025 — Sep 2026",
    type: "Contract",
    points: [
      "Designed, built and maintained an internal web application supporting laboratory operations with a MySQL backend, from data management to information delivery for users.",
      "Monitored infrastructure security and login protocols with Wazuh, analysed network traffic with Wireshark, and processed logs to detect anomalies and keep data accurate.",
      "Built internal systems with Python, Go, Java and C++.",
      "Supported day-to-day lab operations, device handling and network connectivity alongside lecturers, staff and lab users.",
    ],
  },
  {
    role: "IT Support",
    company: "SMK Muhammadiyah 7 Tebet",
    location: "South Jakarta",
    period: "Mar 2020 — Oct 2025",
    type: "Freelance",
    points: [
      "Troubleshot internet connectivity, expanded and strengthened school Wi-Fi coverage, and performed routine hardware and network maintenance across computer labs.",
      "Taught hands-on TJK practicum sessions, from LAN cabling to MikroTik router configuration, preparing students for professional certification (LSP).",
    ],
  },
  {
    role: "Media Crew",
    company: "Futureloka",
    location: "Jakarta",
    period: "Nov 2025 — Aug 2026",
    type: "Freelance",
    points: [
      "Responsible for photo and video documentation across Futureloka events.",
      "Edited, archived and delivered visual assets to the internal team on time, coordinating with the team and on-site organisers.",
    ],
  },
  {
    role: "Driver Partner",
    company: "PT Shopee International Indonesia",
    location: "Jakarta",
    period: "Apr 2023 — Aug 2026",
    type: "Freelance",
    points: [
      "Managed dozens of daily deliveries independently with efficient route planning, ensuring orders arrived safely and on time.",
      "Maintained customer communication and resolved on-site issues directly.",
    ],
  },
];

export const organizations: ExperienceItem[] = [
  {
    role: "Informatics Laboratory Assistant",
    company: "Universitas Gunadarma",
    location: "Depok",
    period: "Aug 2024 — Oct 2025",
    type: "Contract",
    points: [
      "Led Database Systems and Web Programming practicum sessions per the syllabus, covering database design and management, SQL queries and web application development.",
      "Provided personal tutorials for students struggling with computing concepts, with clear and structured explanations.",
    ],
  },
  {
    role: "Cyber Team",
    company: "SMK Muhammadiyah 7 Tebet",
    location: "South Jakarta",
    period: "Mar 2019 — Aug 2025",
    type: "Organization",
    points: [
      "Supported academic and technical school activities as an active team member.",
      "Joined weekly sessions on the latest IT trends and shared knowledge on cybersecurity, networking and web development.",
    ],
  },
];

export const projects: Project[] = [
  // ==========================================
  // 1. WEB
  // ==========================================
  {
    title: "SAKUIN (Tameh)",
    category: "Web",
    context: "AI personal finance tracker",
    period: "2026",
    role: "Full-stack & AI integration",
    description:
      "A web-based personal finance tracker integrated with an AI Chat Assistant powered by the Google Gemini API. Built to help users log daily transactions, track budgets, and consult on spending habits through natural conversation.",
    highlights: [
      "Conversational AI assistant powered by Gemini API",
      "Real-time cashflow analytics and monthly budget tracking",
      "End-to-end full-stack thesis build deployed on Vercel",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "PostgreSQL",
      "Vercel",
    ],
    cover: {
      src: "/projects/sakuin/cover.webp.png",
      alt: "SAKUIN personal finance dashboard and AI chat assistant interface",
    },
    video: "/projects/sakuin/demo.mp4",
    gallery: [],
    links: [
      {
        label: "Launch live app",
        href: "https://sakuin-y4.vercel.app/",
        external: true,
      },
    ],
  },
  {
    title: "Anti-Phish",
    category: "Web",
    context: "Phishing detection & security platform",
    period: "2026",
    role: "Full-stack & security build",
    description:
      "A web-based cybersecurity platform built to inspect suspicious links, simulate phishing indicators, and help users identify malicious URLs before interacting with them.",
    highlights: [
      "Interactive URL inspection and phishing risk scoring",
      "Real-time visual breakdown of threat indicators",
      "Responsive security awareness interface deployed on Vercel",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cybersecurity",
      "Vercel",
    ],
    cover: {
      src: "/projects/anti-phish/cover.webp.png",
      alt: "Anti-Phish landing page and URL threat analysis interface",
    },
    video: "/projects/anti-phish/demo.mp4.mp4",
    gallery: [],
    links: [
      {
        label: "Launch live app",
        href: "https://anti-phish-eight.vercel.app/",
        external: true,
      },
    ],
  },
  {
    title: "Biams",
    category: "Web",
    context: "Client–server file platform",
    period: "2026",
    role: "Solo full-stack build",
    description:
      "A cinematic file-management platform with real-time chat, presence and push notifications. I designed the Spring Boot API and React client, then connected them over HTTP REST and WebSocket/STOMP.",
    highlights: [
      "JWT + email OTP authentication",
      "STOMP chat, presence and push notifications",
      "HTTP 206 byte-range video streaming",
    ],
    stack: [
      "Spring Boot",
      "Java 22",
      "React 19",
      "TypeScript",
      "WebSocket",
      "H2",
    ],
    cover: {
      src: "/projects/biams-cover.webp",
      alt: "Biams landing page showing secure storage, smart scanning and real-time sync features",
    },
    gallery: [
      {
        src: "/projects/biams-dashboard.webp",
        alt: "Biams dashboard with upload actions, a video file and real-time notifications",
        label: "Dashboard and notifications",
      },
      {
        src: "/projects/biams-chat.webp",
        alt: "Biams real-time chat with online presence and message history",
        label: "STOMP chat",
      },
    ],
    links: [],
  },
  {
    title: "BrewMetrics",
    category: "Web",
    context: "Coffee shop BI dashboard",
    period: "2026",
    role: "Solo full-stack build",
    description:
      "A sales and operations dashboard that turns raw transaction rows into revenue KPIs, peak-hour insights, category mix and payment trends. Includes CSV import/export, CRUD and a Prisma-backed SQLite dataset.",
    highlights: [
      "Revenue, peak-hour and payment KPIs",
      "CSV import/export and transaction CRUD",
      "Prisma + SQLite data layer",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Recharts",
      "Tailwind CSS",
    ],
    cover: {
      src: "/projects/brewmetrics-dashboard.webp",
      alt: "BrewMetrics coffee shop sales dashboard with revenue KPIs and charts",
    },
    gallery: [
      {
        src: "/projects/brewmetrics-transactions.webp",
        alt: "BrewMetrics transactions table with search, category filters and CSV actions",
        label: "Transaction management",
      },
    ],
    links: [
      {
        label: "Ask for a walkthrough",
        href: "mailto:bimasbuky3rd@gmail.com?subject=BrewMetrics%20walkthrough",
      },
    ],
  },

  // ==========================================
  // 2. UI/UX
  // ==========================================
  {
    title: "AO Shuttle — Booking Experience Redesign",
    category: "UI/UX",
    context: "Transport & ticketing mobile redesign",
    period: "2026",
    role: "UI/UX Designer",
    description:
      "A comprehensive UI/UX redesign of the AO Shuttle booking platform. Focused on simplifying route selection, seat reservation, and departure scheduling through a clean visual hierarchy and reduced booking friction.",
    highlights: [
      "Streamlined end-to-end ticket booking and seat selection flow",
      "Modernized component system with high-contrast typography and generous whitespace",
      "Designed intuitive schedule comparison and digital boarding pass views",
    ],
    stack: [
      "Figma",
      "UI Redesign",
      "Design System",
      "User Flow",
      "Mobile App Design",
    ],
    cover: {
      src: "/projects/ao-shuttle/cover.webp.png",
      alt: "AO Shuttle Redesign interface screens in Figma",
    },
    gallery: [],
    links: [
      {
        label: "Open Figma Design",
        href: "https://www.figma.com/design/hyOyuQt8clL7CgnwJhzSuM/Ao-Shuttle-Redesign?node-id=120-1152&t=58qUcNFrc3H94rpL-1",
        external: true,
      },
    ],
  },
  {
    title: "Health Informatics — Digital Healthcare App",
    category: "UI/UX",
    context: "Medical records & patient care interface",
    period: "2026",
    role: "UI/UX Designer",
    description:
      "A mobile healthcare application interface tailored for health informatics workflows. Designed to help patients and practitioners navigate medical records, teleconsultations, and health monitoring with clarity and accessibility.",
    highlights: [
      "Accessible medical dashboard and patient health metric cards",
      "Clear visual hierarchy for appointment scheduling and prescriptions",
      "Structured information architecture for rapid clinical data lookup",
    ],
    stack: [
      "Figma",
      "Health Informatics",
      "Information Architecture",
      "Wireframing",
      "UI/UX",
    ],
    cover: {
      src: "/projects/health-app/cover.webp.png",
      alt: "App Informatika Kesehatan UI screens in Figma",
    },
    gallery: [],
    links: [
      {
        label: "Open Figma Design",
        href: "https://www.figma.com/design/GouXvnPjN2ptkAybfM0sPl/App-Informatika-Kesehatan?node-id=0-1&t=BZHu02JBLyZ9MiAd-1",
        external: true,
      },
    ],
  },
  {
    title: "Interactive Product Prototype",
    category: "UI/UX",
    context: "High-fidelity interactive user flow",
    period: "2026",
    role: "Product & Interaction Designer",
    description:
      "An end-to-end interactive mobile prototype built in Figma to validate core user journeys, micro-interactions, and screen transitions before frontend implementation.",
    highlights: [
      "Interactive screen-to-screen transitions and state management in Figma",
      "Touch-target optimization and mobile-first layout stacking",
      "Clickable flow ready for usability testing and developer handoff",
    ],
    stack: [
      "Figma Prototype",
      "Interaction Design",
      "Usability Flow",
      "High-Fidelity UI",
    ],
    cover: {
      src: "/projects/prototype-1/cover.webp.png",
      alt: "Interactive mobile prototype flow in Figma",
    },
    gallery: [],
    links: [
      {
        label: "Try Interactive Prototype",
        href: "https://www.figma.com/proto/CW2Xys70yWcoyqMjrlWltN/Prototype-1?node-id=3-743&p=f&t=GJQ6gTtFSuc3C2jP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A743",
        external: true,
      },
    ],
  },

  // ==========================================
  // 3. NETWORK & IT
  // ==========================================
  {
    title: "Computer Lab Infrastructure & LAN Deployment",
    category: "Network & IT",
    context: "Physical network cabling & workstation maintenance",
    period: "2025",
    role: "IT Support & Network Technician",
    description:
      "End-to-end physical network maintenance and workstation troubleshooting across school and university computer laboratories. Executed structured UTP cabling, RJ45 termination, signal continuity testing, and hardware diagnostics to keep dozens of lab PCs online and exam-ready.",
    highlights: [
      "Structured Belden UTP Cat5e/Cat6 cabling, RJ45 crimping, and line verification with LAN testers",
      "Workstation hardware troubleshooting, OS maintenance, and local network restoration",
      "Minimized lab downtime during daily practicum sessions and competency assessments",
    ],
    stack: [
      "Structured Cabling",
      "UTP / RJ45",
      "LAN Tester",
      "Hardware Diagnostics",
      "TCP/IP",
      "Workstation Maintenance",
    ],
    cover: {
      src: "/projects/lab-network/cover.jpeg",
      alt: "On-site LAN cabling and computer laboratory hardware troubleshooting",
    },
    gallery: [],
    links: [],
  },
  {
    title: "MikroTik RouterOS & Hotspot Gateway Configuration",
    category: "Network & IT",
    context: "Router management, DHCP & bandwidth allocation",
    period: "2025",
    role: "Network Administrator",
    description:
      "Configured and deployed MikroTik RouterBoard devices using WinBox to manage local laboratory and institutional networks. Set up multi-interface IP addressing, DHCP servers, NAT firewall rules, and hotspot user management for stable and secure internet distribution.",
    highlights: [
      "Multi-interface IP addressing, subnetting, and DHCP server deployment via WinBox",
      "Hotspot gateway setup, user profile management, and bandwidth queue optimization",
      "Hands-on network configuration for lab infrastructure and TJK practicum instruction",
    ],
    stack: [
      "MikroTik RouterOS",
      "WinBox",
      "DHCP & DNS",
      "Hotspot Gateway",
      "NAT & Firewall",
      "Subnetting",
    ],
    cover: {
      src: "/projects/mikrotik-config/cover2.jpeg",
      alt: "MikroTik RouterOS configuration via WinBox alongside RouterBoard hardware",
    },
    gallery: [],
    links: [],
  },

  // ==========================================
  // 4. BLENDER
  // ==========================================
  {
    title: "Metaversitas — Borobudur 3D LOD & Collider Optimization",
    category: "Blender",
    context: "3D game asset optimization & Unity 6 URP pipeline",
    period: "2026",
    role: "3D Technical Artist",
    description:
      "Optimized a high-density 3D architectural model of Candi Borobudur in Blender for real-time rendering in Unity 6 (URP). Built a multi-stage Level of Detail (LOD0–LOD3) hierarchy and custom low-poly physics collision meshes to maintain smooth frame rates and accurate player traversal across complex temple stairs and stupas.",
    highlights: [
      "Multi-stage polygon reduction (LOD0 to LOD3) via planar decimation while preserving stupa and relief silhouettes",
      "Custom low-poly mesh collider generation for accurate character stepping without physics clipping",
      "Clean FBX export pipeline with material slot consolidation and UV preservation for Unity 6 URP",
    ],
    stack: [
      "Blender",
      "Unity 6 (URP)",
      "LOD Group",
      "Mesh Collider",
      "Planar Decimation",
      "3D Optimization",
    ],
    cover: {
      src: "/projects/Lod/Screenshot 2026-09-25 111152.png",
      alt: "Candi Borobudur 3D model final LOD optimization in Blender viewport",
    },
    gallery: [
      {
        src: "/projects/Lod/Screenshot 2026-09-22 125828.png",
        alt: "Initial dense wireframe mesh inspection of Candi Borobudur",
        label: "Base Wireframe",
      },
      {
        src: "/projects/Lod/Screenshot 2026-09-24 140246.png",
        alt: "Full monument scale and surrounding terrain setup in Blender",
        label: "Scene Layout",
      },
      {
        src: "/projects/Lod/Screenshot 2026-09-25 103541.png",
        alt: "Topology cleanup and structural segmentation in solid view",
        label: "Topology Split",
      },
      {
        src: "/projects/Lod/Screenshot 2026-09-25 104011.png",
        alt: "LOD0 high-detail monument mesh with full architectural geometry",
        label: "LOD 0 (High)",
      },
      {
        src: "/projects/Lod/Screenshot 2026-09-25 110949.png",
        alt: "LOD1 medium-distance decimated geometry",
        label: "LOD 1 (Med)",
      },
      {
        src: "/projects/Lod/Screenshot 2026-09-25 111008.png",
        alt: "LOD2 optimized mesh for mid-to-far camera distance",
        label: "LOD 2 (Low)",
      },
      {
        src: "/projects/Lod/Screenshot 2026-09-25 111044.png",
        alt: "LOD3 ultra-lightweight distant mesh and custom physics collider",
        label: "LOD 3 & Collider",
      },
    ],
    links: [],
  },

  // ==========================================
  // 5. MEDIA
  // ==========================================
  {
    title: "Indocomtech & PBNC — Esports & Tech Media Coverage",
    category: "Media",
    context: "On-site press documentation & event journalism",
    period: "2026",
    role: "Media Representative · 4bytes.media",
    description:
      "On-site media coverage, stage photography, and press interviews during Indocomtech and the Point Blank National Championship (PBNC) at JICC. Produced visual documentation, speaker and player highlights, and event reports for digital publication.",
    highlights: [
      "Captured main-stage tournament moments, booth installations, and keynote sessions",
      "Conducted on-site interviews and press Q&A sessions with speakers and talent",
      "Curated and edited visual assets for rapid digital media publishing",
    ],
    stack: [
      "Event Photography",
      "Tech Journalism",
      "Press Coverage",
      "Visual Storytelling",
      "Media Production",
    ],
    cover: {
      src: "/projects/EvnetPB/cover.jpeg",
      alt: "Indocomtech and PBNC main stage media documentation at JICC",
    },
    gallery: [
      {
        src: "/projects/EvnetPB/doc-1.jpeg",
        alt: "Main stage lighting and tournament setup at Indocomtech",
        label: "Main Stage",
      },
      {
        src: "/projects/EvnetPB/doc-2.jpeg",
        alt: "On-site interview and press session during the event",
        label: "Press Session",
      },
      {
        src: "/projects/EvnetPB/doc-3.jpeg",
        alt: "Point Blank National Championship (PBNC) arena entrance booth",
        label: "PBNC Arena",
      },
      {
        src: "/projects/EvnetPB/doc-4.jpeg",
        alt: "Stage guests and speakers at Indocomtech JICC",
        label: "Stage Lineup",
      },
      {
        src: "/projects/EvnetPB/doc-5.jpeg",
        alt: "Keynote speaker presentation on the Indocomtech stage",
        label: "Keynote Highlight",
      },
    ],
    links: [],
  },
  {
    title: "ASUS ROG — Product Briefing & Media Session",
    category: "Media",
    context: "Hardware launch briefing & tech journalism",
    period: "2026",
    role: "Media Representative · 4bytes.media",
    description:
      "Attended an exclusive ASUS media briefing covering next-generation gaming hardware, WiFi 7 networking architecture, display innovations, and thermal control design. Documented technical presentations and key product specifications for 4bytes.media readers.",
    highlights: [
      "Covered deep-dive technical sessions on WiFi 7 connectivity, display panels, and system control",
      "Documented product showcases, speaker presentations, and media campaign highlights",
      "Synthesized hardware specifications and feature breakdowns into editorial coverage",
    ],
    stack: [
      "Tech Journalism",
      "Hardware Coverage",
      "Press Briefing",
      "Event Photography",
      "Editorial Content",
    ],
    cover: {
      src: "/projects/asus/cover.jpeg",
      alt: "ASUS media briefing and Shoot & Win campaign presentation",
    },
    gallery: [
      {
        src: "/projects/asus/doc-1.jpeg",
        alt: "ASUS next-gen WiFi 7 gaming router and architecture breakdown",
        label: "WiFi 7 Architecture",
      },
      {
        src: "/projects/asus/doc-2.jpeg",
        alt: "Speaker presenting ASUS hardware features during media session",
        label: "Feature Presentation",
      },
      {
        src: "/projects/asus/doc-3.jpeg",
        alt: "Display, Control and Design pillars showcased on screen",
        label: "Display & Control",
      },
      {
        src: "/projects/asus/doc-4.jpeg",
        alt: "Technical specifications and performance metrics comparison",
        label: "Spec Breakdown",
      },
    ],
    links: [],
  },
  {
    title: "Acer Day — Product Showcase & Hands-On Coverage",
    category: "Media",
    context: "Event coverage & laptop lineup hands-on",
    period: "2026",
    role: "Media Representative · 4bytes.media",
    description:
      "On-site media coverage and hands-on product documentation during the Acer Day showcase. Covered the main stage keynote and inspected the latest Acer Swift, Aspire, and Predator gaming laptop lineups for hardware and design editorial features.",
    highlights: [
      "Documented main-stage event highlights and brand announcements during Acer Day",
      "Conducted hands-on visual inspections of Acer consumer and Predator gaming laptops",
      "Produced high-resolution product photography and hardware impressions for 4bytes.media",
    ],
    stack: [
      "Tech Journalism",
      "Product Photography",
      "Hands-On Review",
      "Press Coverage",
      "Media Production",
    ],
    cover: {
      src: "/projects/acer/cover.jpeg",
      alt: "Acer Day main stage event lighting and crowd documentation",
    },
    gallery: [
      {
        src: "/projects/acer/doc-1.jpeg",
        alt: "Acer laptop lineup display on the experience table",
        label: "Laptop Lineup",
      },
      {
        src: "/projects/acer/doc-2.jpeg",
        alt: "Predator gaming laptop hands-on unit and build inspection",
        label: "Predator Gaming",
      },
      {
        src: "/projects/acer/doc-3.jpeg",
        alt: "Dual-unit display comparison at the Acer experience booth",
        label: "Display Showcase",
      },
    ],
    links: [],
  },
];

export const certifications: Certification[] = [
  {
    title: "Computer & Network Security",
    issuer: "Infinite Learning · Kampus Merdeka",
    year: "2025",
    category: "Security",
    file: "/certificates/computer-network-security.pdf",
    thumbnail: "/certificates/computer-network-security.webp",
    pages: 3,
  },
  {
    title: "Internship Program · Computer & Network Security",
    issuer: "Infinite Learning",
    year: "2025",
    category: "Internship",
    file: "/certificates/internship-infinite-learning.pdf",
    thumbnail: "/certificates/internship-infinite-learning.webp",
    pages: 1,
  },
  {
    title: "Junior Computer Network Technician",
    issuer: "LSP Universitas Gunadarma",
    year: "2026",
    category: "Networking",
    file: "/certificates/junior-computer-network-technician.pdf",
    thumbnail: "/certificates/junior-computer-network-technician.webp",
    pages: 1,
  },
  {
    title: "Implementation of Computer Networks Using Switch Device",
    issuer: "Universitas Gunadarma",
    year: "2026",
    category: "Networking",
    file: "/certificates/network-switch-implementation.pdf",
    thumbnail: "/certificates/network-switch-implementation.webp",
    pages: 2,
  },
  {
    title: "Network Design & Configuration Using Switch Device",
    issuer: "Universitas Gunadarma",
    year: "2025",
    category: "Networking",
    file: "/certificates/network-switch-design.pdf",
    thumbnail: "/certificates/network-switch-design.webp",
    pages: 2,
  },
  {
    title: "Computer Network Engineering · Level II",
    issuer: "LSP SMK Cyber Media",
    year: "2022",
    category: "Networking",
    file: "/certificates/computer-network-engineering-2022.pdf",
    thumbnail: "/certificates/computer-network-engineering-2022.webp",
    pages: 1,
  },
  {
    title: "SQL Server for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    category: "Database",
    file: "/certificates/sql-server-intermediate.pdf",
    thumbnail: "/certificates/sql-server-intermediate.webp",
    pages: 2,
  },
  {
    title: "SQL Server for Beginner",
    issuer: "Universitas Gunadarma",
    year: "2024",
    category: "Database",
    file: "/certificates/sql-server-beginner.pdf",
    thumbnail: "/certificates/sql-server-beginner.webp",
    pages: 2,
  },
  {
    title: "Go-Lang for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    category: "Programming",
    file: "/certificates/go-intermediate.pdf",
    thumbnail: "/certificates/go-intermediate.webp",
    pages: 2,
  },
  {
    title: "Go-Lang for Beginner",
    issuer: "Universitas Gunadarma",
    year: "2024",
    category: "Programming",
    file: "/certificates/go-beginner.pdf",
    thumbnail: "/certificates/go-beginner.webp",
    pages: 2,
  },
  {
    title: "Fundamental DBMS",
    issuer: "Universitas Gunadarma",
    year: "2023",
    category: "Database",
    file: "/certificates/fundamental-dbms.pdf",
    thumbnail: "/certificates/fundamental-dbms.webp",
    pages: 2,
  },
  {
    title: "Building Website Using HTML5",
    issuer: "Universitas Gunadarma",
    year: "2025",
    category: "Web",
    file: "/certificates/html5-website.pdf",
    thumbnail: "/certificates/html5-website.webp",
    pages: 2,
  },
  {
    title: "Fundamental Web Programming",
    issuer: "Universitas Gunadarma",
    year: "2023",
    category: "Web",
    file: "/certificates/fundamental-web-programming.pdf",
    thumbnail: "/certificates/fundamental-web-programming.webp",
    pages: 2,
  },
  {
    title: "Python Programming · Samsung Innovation Campus",
    issuer: "Samsung Innovation Campus",
    year: "2025",
    category: "Programming",
    file: "/certificates/samsung-python.pdf",
    thumbnail: "/certificates/samsung-python.webp",
    pages: 2,
  },
  {
    title: "Aptitude Test",
    issuer: "Universitas Gunadarma",
    year: "2026",
    category: "Assessment",
    file: "/certificates/aptitude-test.pdf",
    thumbnail: "/certificates/aptitude-test.webp",
    pages: 2,
  },
];

export const education = {
  school: "Universitas Gunadarma",
  degree: "Bachelor of Informatics (S1)",
  faculty: "Faculty of Industrial Technology",
  location: "Depok, Indonesia",
  period: "Graduated 28 October 2026",
  gpa: "3.82 / 4.00",
};