// ─────────────────────────────────────────────────────────────
// All editable club content lives here. Update this file to
// change events, team, games, and socials across the whole site.
// ─────────────────────────────────────────────────────────────

export type EventStatus = "shipped" | "live" | "upcoming";
export interface ClubEvent {
  slug: string;
  title: string;
  status: "shipped" | "live" | "upcoming" | "archived";
  version: string;
  date: string;
  dateSort: string;
  location: string;
  summary: string;
  tags: string[];
  image: string;
  registerUrl?: string;
  floatingAssets?: string[];
}
export const events: ClubEvent[] = [
  // --- 2026 VOLUMES ---
  {
    slug: "college-rivals-2026",
    title: "College Rivals 4 X SRM",
    status: "shipped",
    version: "v4.0",
    date: "3rd September 2026",
    dateSort: "2026-09-03",
    location: "Vendhar Square Lane, SRMIST KTR",
    summary:
      "India's largest college esports talent hunt featuring BGMI, FC Mobile, FC 26, and Blitz Chess with competitive matches, arcade games, and attractive prize money.",
    tags: ["esports", "bgmi", "fc mobile", "tournament"],
    image: "/college rivals.jpeg",
    floatingAssets: ["/cr (1).png", "/cr (2).png","/cr (3).png","/cr (4).png","/cr (5).png", ],
  },
  {
    slug: "iridescence-game-jam-2026",
    title: "Iridescence Game Jam",
    status: "shipped",
    version: "v3.0",
    date: "Sept 7th to 8th, 2026",
    dateSort: "2026-09-08",
    location: "TP2 7th Floor, SRMIST KTR, Chennai",
    summary:
      "A 36-hour space-themed game jam with a 30k prize pool, organized by the School of Computing and GDC.",
    tags: ["game jam", "36hr", "space", "unity"],
    image: "/iridescence.jpeg",
    floatingAssets: ["/iredence (1).png", "/iredence (2).png","/iredence (3).png","/iredence (4).png", ],
    
  },
  {
    slug: "pokemon-event-2026",
    title: "Pokémon Event",
    status: "upcoming",
    version: "v1.0",
    date: "September 20, 2026",
    dateSort: "2026-09-20",
    location: "Campus Ground",
    summary:
      "A special community gathering and themed event celebrating all things Pokémon for club members and gaming enthusiasts.",
    tags: ["community", "pokemon", "meetup"],
    image: "/pokemon.png",
    floatingAssets: ["/pokemon-1.png", "/pokemon-2.png", "/pokemon-3.png", "/pokemon-4.png", ],
  },
  {
    slug: "free-fire-watch-party-2026",
    title: "Free Fire Watch Party",
    status: "upcoming",
    version: "v1.0",
    date: "September 26, 2026",
    dateSort: "2026-09-26",
    location: "Club Auditorium",
    summary:
      "A live screening and community watch party for major Free Fire competitive matches, tournaments, and giveaways.",
    tags: ["esports", "watch party", "free fire"],
    image: "/free fire.png",
    floatingAssets: ["/FreeFire (1).png", "/FreeFire (2).png","/FreeFire (3).png","/FreeFire (4).png","/FreeFire (5).png", ],
  },
];
export type Role = "core" | "faculty";
export interface Member {
  name: string;
  role: string;
  team: Role | string;
  bio: string;
  focus: string[]; // areas: design, programming, art, production, etc
  level: 0 | 1 | 2 | 3 | 4; // Operational hierarchy level for the skill tree
  image?: string;
}

export const team: Member[] = [
  {
    name: "Dr. Sindhu S",
    role: "Faculty Incharge",
    team: "faculty",
    bio: "Oversees club operations, approves budgets and venue bookings, and mentors project direction across every jam cycle.",
    focus: ["mentorship", "administration"],
    level: 0,
    image: "/team/Dr-Sindhu.png",
  },
  {
    name: "Ananya Burra",
    role: "President",
    team: "core",
    bio: "Sets the club's yearly roadmap, represents GDC to the student council, and runs core team meetings.",
    focus: ["leadership", "production"],
    level: 1,
  },
  {
    name: "Pranshu Verma",
    role: "Vice President",
    team: "core",
    bio: "Runs day-to-day operations and steps in on event logistics, sponsorships, and cross-club coordination.",
    focus: ["operations", "logistics"],
    level: 2,
    
  },
  {
    name: "Ankit Mandal",
    role: "Technical Head",
    team: "core",
    bio: "Owns the engine workshops and reviews team prototypes for architecture and scope before jam deadlines.",
    focus: ["programming", "engines"],
    level: 4,
    image: "/team/Ankit.jpeg",
  },
  {
    name: "Devi Prasad Nayak",
    role: "Creative Head",
    team: "core",
    bio: "Curates the visual identity of club showcases and mentors members on pixel art, shaders, and UI polish.",
    focus: ["art", "ui/ux"],
    level: 4,
  },
  {
    name: "Avinav Priyadarshi",
    role: "Content Head",
    team: "core",
    bio: "Manages storytelling, documentation, and narrative alignment across club projects and communications.",
    focus: ["content", "writing"],
    level: 4,
  },
  {
    name: "Havish Nadella",
    role: "PR Head",
    team: "core",
    bio: "Leads public relations strategies, manages community perception, and amplifies club milestones.",
    focus: ["outreach", "public relations"],
    level: 4,
  },
  {
    name: "Aditya Anumod",
    role: "Corporate Head",
    team: "core",
    bio: "Handles sponsorships, industry partnerships, and external corporate relations for club events.",
    focus: ["corporate", "sponsorships"],
    level: 4,
  },
  {
    name: "Hari Bhaskar",
    role: "Event Head",
    team: "core",
    bio: "Plans and oversees Club Wars, jams, and major workshops end-to-end from scheduling to execution.",
    focus: ["events", "production"],
    level: 4,
  },
  {
    name: "Saanvi Ghosh",
    role: "Technical Executive",
    team: "executives",
    bio: "Assists with engine development, code reviews, and technical setups during workshops and game jams.",
    focus: ["programming", "development"],
    level: 3,
  },
  {
    name: "Vihaan Johann Ajay",
    role: "Content Executive",
    team: "executives",
    bio: "Creates written copy, blog posts, and documentation for club events, workshops, and showcases.",
    focus: ["content", "copywriting"],
    level: 3,
    image: "/team/Vihaan.jpg",
  },
  {
    name: "Dakshesh",
    role: "PR Executive",
    team: "executives",
    bio: "Drives social media presence, student outreach, and community engagement across digital channels.",
    focus: ["outreach", "social media"],
    level: 3,
  },
  {
    name: "Saurav Pal",
    role: "Corporate Executive",
    team: "executives",
    bio: "Assists with outreach to corporate sponsors and manages logistics for industry partner collaborations.",
    focus: ["corporate", "outreach"],
    level: 3,
  },
  {
    name: "Yadunandan P",
    role: "Event Executive",
    team: "executives",
    bio: "Coordinates venue setups, participant check-ins, and schedule management during club events and jams.",
    focus: ["events", "logistics"],
    level: 3,
  },
];


export interface Game {
  slug: string;
  title: string;
  status: "shipped" | "in-development" | "prototype";
  version: string;
  authors: string[];
  engine: string;
  genre: string;
  summary: string;
  tags: string[];
  image?: string | null;
  playUrl?: string;
}
export const games: Game[] = [
  {
    slug: "flow",
    title: "Flow",
    status: "shipped",
    version: "v1.0",
    authors: ["Cass"],
    engine: "HTML5 Canvas",
    genre: "Zen / Particle Sim",
    summary:
      "A meditative particle playground — draw currents across the canvas and watch thousands of particles respond in real time. No score, no fail state, just flow.",
    tags: ["casual", "generative", "browser"],
    image: "/Flow.png",
    playUrl: "https://itch.io",
  },
  {
    slug: "signal-loss",
    title: "Signal Loss",
    status: "in-development",
    version: "v0.6",
    authors: ["Club Wars Team Alpha"],
    engine: "Godot 4",
    genre: "Puzzle / Stealth",
    summary:
      "Navigate a decommissioned research station using only sound cues — your flashlight draws enemies in. Built during Club Wars 2026, now in post-jam expansion.",
    tags: ["stealth", "puzzle", "audio-driven"],
    image: "/Signal lost.png",
    playUrl: "https://itch.io",
  },
  {
    slug: "orbit-drift",
    title: "Orbit Drift",
    status: "shipped",
    version: "v1.2",
    authors: ["Spring Jam Team"],
    engine: "Unity",
    genre: "Arcade / Physics",
    summary:
      "A one-button gravity game — slingshot your ship between orbits to collect fuel before it runs out. Built in 36 hours for Spring Game Jam.",
    tags: ["arcade", "physics", "one-button"],
    image: "/Orbit Drift.png",
    playUrl: "https://itch.io",
  },
  {
    slug: "last-light",
    title: "Last Light",
    status: "prototype",
    version: "v0.2",
    authors: ["Fall Jam Prep Squad"],
    engine: "Godot 4",
    genre: "Survival / Roguelite",
    summary:
      "An early prototype exploring a light-management roguelite — every light source you carry attracts danger. Built as a pre-jam scoping exercise.",
    tags: ["roguelite", "prototype", "survival"],
    image: "/Last-Light.png",
    playUrl: "https://itch.io",
  },
  {
    slug: "cyber-drift-88",
    title: "Cyber Drift '88",
    status: "shipped",
    version: "v1.0",
    authors: ["Pixel Wave Interactive"],
    engine: "Unity",
    genre: "Synthwave / Racing",
    summary:
      "Race through neon-drenched gridlines in this retro arcade racer. Drift around sharp corners to charge up boost meters.",
    tags: ["racing", "synthwave", "arcade"],
    image: "/cyber-drift.png",
    playUrl: "https://itch.io",
  },
  {
    slug: "echoes-of-the-abyss",
    title: "Echoes of the Abyss",
    status: "in-development",
    version: "v0.4",
    authors: ["Void Craft Studios"],
    engine: "Unreal Engine 5",
    genre: "Atmospheric / Exploration",
    summary:
      "Descend into an underwater alien ecosystem. Manage oxygen, scan bioluminescent fauna, and uncover sunken structures.",
    tags: ["exploration", "scifi", "3d"],
    image: "/abyss.png",
    playUrl: "https://itch.io",
  },
  {
    slug: "clockwork-dungeon",
    title: "Clockwork Dungeon",
    status: "prototype",
    version: "v0.1",
    authors: ["Gearhead Devs"],
    engine: "Godot 4",
    genre: "Turn-Based / Strategy",
    summary:
      "Every step you take turns the gears of the room. Rotate rooms and align doorways to outsmart mechanical guardians.",
    tags: ["turn-based", "puzzle", "steampunk"],
    image: "/clockwork.png",
    playUrl: "https://itch.io",
  },
];
export const socials = [
  {
    label: "Instagram",
    handle: "@gdc.college",
    url: "https://instagram.com/",
  },
  {
    label: "LinkedIn",
    handle: "Game Developer's Community",
    url: "https://linkedin.com/",
  },
  {
    label: "Unstop",
    handle: "GDC Club Page",
    url: "https://unstop.com/",
  },
  {
    label: "Discord",
    handle: "Join the server",
    url: "https://discord.com/",
  },
  {
    label: "GitHub",
    handle: "@gdc-college",
    url: "https://github.com/",
  },
];

export const clubMeta = {
  name: "Game Developer's Community",
  shortName: "GDC",
  tagline: "Code, Create, Game.",
  email: "gdc@college.edu",
};
