import type { ArchiveItem, GardenPath, NowGroup, TextItem } from './types';

export const communicationPsychology = {
  slug: 'turn-taking-and-looking-together',
  title: 'Turn-taking, waiting, and looking together',
  summary: 'A communication psychology lecture became a practical frame for meetings, leadership, and AI education.',
  href: '/library/#turn-taking-and-looking-together',
  kind: 'Learning note',
  date: 'July 8, 2026',
  dateTime: '2026-07-08',
  section: 'learning',
  featured: true,
} satisfies ArchiveItem;

export const tasteAndWonder = {
  slug: 'taste-and-wonder',
  title: 'Taste, rest, making, and wonder',
  summary: 'A lecture on choosing a life through what I keep studying, making, and learning to appreciate.',
  href: '/library/#taste-and-wonder',
  kind: 'Learning note',
  date: 'July 6, 2026',
  dateTime: '2026-07-06',
  section: 'learning',
  featured: false,
} satisfies ArchiveItem;

export const aiAndMemory = {
  slug: 'ai-and-memory',
  title: 'AI and Memory',
  summary: 'A lecture note on how AI bottlenecks may spread from GPUs toward memory, power, devices, and physical systems.',
  href: '/library/#ai-and-memory',
  kind: 'Lecture note',
  date: 'July 1, 2026',
  dateTime: '2026-07-01',
  section: 'learning',
  featured: false,
} satisfies ArchiveItem;

export const redevelopmentStudy = {
  slug: 'redevelopment-step-one',
  title: '재개발 모르면 부자될 수 없다 · STEP 1',
  summary: 'Turned the first section of a Korean redevelopment book into a focused study pack instead of claiming it finished.',
  href: '/library/#redevelopment-step-one',
  kind: 'Book in progress',
  date: 'June 30, 2026',
  dateTime: '2026-06-30',
  section: 'learning',
  featured: false,
} satisfies ArchiveItem;

export const masteringClaude = {
  slug: 'mastering-claude-ai',
  title: 'Mastering Claude AI',
  summary: 'Restructured a 401-page PDF into short learning sessions, with prompting chapters queued first.',
  href: '/library/#mastering-claude-ai',
  kind: 'Study pack',
  date: 'June 23, 2026',
  dateTime: '2026-06-23',
  section: 'learning',
  featured: false,
} satisfies ArchiveItem;

export const sunTzu = {
  slug: 'sun-tzu-at-work',
  title: 'Sun Tzu as a guide to fewer, better-chosen fights',
  summary: 'A classic-strategy commentary became a note about preparation, judgment, and knowing when to step back.',
  href: '/library/#sun-tzu-at-work',
  kind: 'Classics note',
  date: 'June 15, 2026',
  dateTime: '2026-06-15',
  section: 'learning',
  featured: false,
} satisfies ArchiveItem;

export const learningItems = [
  communicationPsychology,
  tasteAndWonder,
  aiAndMemory,
  redevelopmentStudy,
  masteringClaude,
  sunTzu,
] satisfies readonly ArchiveItem[];

export const thailand = {
  slug: 'thailand-2026',
  title: 'Thailand',
  summary: 'A 2026 work trip that widened how I think about new-market organizations and cross-cultural learning.',
  href: '/places/#thailand-2026',
  kind: 'Work trip',
  date: '2026',
  dateTime: '2026-01-01',
  section: 'place',
  featured: true,
} satisfies ArchiveItem;

export const tripArchiveMethod = {
  slug: 'trips-as-timelines',
  title: 'Trips as timelines, not location dumps',
  summary: 'I made a small tool that turns photo dates and place names into a story while keeping GPS coordinates local.',
  href: 'https://github.com/jayjoolee/photo-trip-timeline',
  kind: 'Archive method',
  date: 'June 24, 2026',
  dateTime: '2026-06-24',
  section: 'place',
  featured: false,
} satisfies ArchiveItem;

export const placeItems = [thailand, tripArchiveMethod] satisfies readonly ArchiveItem[];

export const careerItems = [
  {
    slug: 'kia',
    title: 'HRD and AI education · Kia',
    summary: 'Leadership development, onboarding, workplace learning, and practical AI education.',
    href: '/career/#kia',
    kind: 'Career',
    date: '2024–Now',
    dateTime: '2024-06-01',
    section: 'career',
    featured: true,
  },
  {
    slug: 'korea-university',
    title: 'M.Eng. in Big Data Convergence · Korea University',
    summary: 'Graduate study connecting data analysis with the questions I meet in work and learning systems.',
    href: '/career/#korea-university',
    kind: 'Education',
    date: '2026',
    dateTime: '2026-02-01',
    section: 'career',
    featured: false,
  },
  {
    slug: 'lotte-chemical',
    title: 'HRD · Lotte Chemical',
    summary: 'Six years working on corporate learning and development before moving into my current role.',
    href: '/career/#lotte-chemical',
    kind: 'Career',
    date: '2018–2024',
    dateTime: '2018-02-01',
    section: 'career',
    featured: false,
  },
  {
    slug: 'sogang-university',
    title: 'Communication and Business · Sogang University',
    summary: 'Undergraduate studies in how people, organizations, media, and markets shape one another.',
    href: '/career/#sogang-university',
    kind: 'Education',
    date: 'Before 2018',
    dateTime: '2017-01-01',
    section: 'career',
    featured: false,
  },
] satisfies readonly ArchiveItem[];

export const gardenPaths = [
  {
    title: 'Notes',
    body: 'Field notes behind the tools: memory, audio, evaluation, and human review.',
    href: '/writing/',
    count: '3 notes',
  },
  {
    title: 'Library',
    body: 'Books, lectures, videos, and study packs I have actually processed.',
    href: '/library/',
    count: '6 entries',
  },
  {
    title: 'Places',
    body: 'Broad travel memories and the methods I use to keep them without publishing private itineraries.',
    href: '/places/',
    count: '2 entries',
  },
  {
    title: 'Career',
    body: 'A public résumé-level timeline of work and education.',
    href: '/career/',
    count: '4 stops',
  },
] satisfies readonly GardenPath[];

export const interestItems = [
  {
    title: 'AI and agents',
    body: 'Memory, evaluation, local-first tools, and where human review belongs in an agent loop.',
  },
  {
    title: 'Learning and organizations',
    body: 'How adults learn at work, how leaders shape attention, and how new tools change the job itself.',
  },
  {
    title: 'Robotics and space',
    body: 'The path from software intelligence into machines, infrastructure, and unfamiliar environments.',
  },
  {
    title: 'Hidden structures',
    body: 'I tend to follow a topic past the headline, compare the original claim with rebuttals, and test what I can.',
  },
] satisfies readonly TextItem[];

export const nowGroups = [
  {
    title: 'Building',
    items: [
      'turning this site into a living archive instead of an AI-only portfolio',
      'making personal context reviewable and user-owned before an agent can reuse it',
      'keeping small public tools connected to the notes and questions that produced them',
    ],
  },
  {
    title: 'Learning',
    items: [
      'how turn-taking and shared attention change meetings, leadership, and AI education',
      'where AI bottlenecks move as models spread into memory, devices, robotics, and physical systems',
    ],
  },
  {
    title: 'Practicing',
    items: [
      'choosing fewer projects and leaving a clearer trail of what changed',
      'turning long material into short sessions without pretending a summary equals finishing the source',
    ],
  },
] satisfies readonly NowGroup[];

export const aboutFacts = [
  {
    title: 'What I do',
    body: 'I work in HRD and AI education, and I make small tools for learning, memory, and inspectable knowledge work.',
  },
  {
    title: 'What this archive is for',
    body: 'It keeps public work, reading, places, and changing questions connected instead of scattering them across apps.',
  },
  {
    title: 'How I learn',
    body: 'I compare original claims, rebuttals, and official sources, then test the parts that can become a tool or practice.',
  },
] satisfies readonly TextItem[];
