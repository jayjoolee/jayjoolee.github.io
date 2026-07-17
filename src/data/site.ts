export type WorkItem = {
  readonly title: string;
  readonly summary: string;
  readonly href: string;
  readonly kind: string;
  readonly date: string;
  readonly dateTime: string;
  readonly featured: boolean;
};

export type NoteLink = {
  readonly title: string;
  readonly summary: string;
  readonly href: string;
  readonly label: string;
  readonly date: string;
  readonly dateTime: string;
  readonly featured: boolean;
};

export type AboutFact = {
  readonly title: string;
  readonly body: string;
};

export const workItems = [
  {
    title: 'AI Memory Contract',
    summary: 'A note pattern for AI memory that helps judgment instead of imitating the person.',
    href: '/writing/ai-memory-contract/',
    kind: 'Memory system',
    date: 'June 29, 2026',
    dateTime: '2026-06-29',
    featured: true,
  },
  {
    title: 'Voice Memo Decision Notes',
    summary: 'A local audio workflow that turns transcripts into decisions, risks, and next questions without publishing the room.',
    href: '/writing/voice-memo-to-decision-note/',
    kind: 'Agent workflow',
    date: 'June 27, 2026',
    dateTime: '2026-06-27',
    featured: false,
  },
  {
    title: 'AI Workflow Audit Kit',
    summary: 'A public repo for turning messy workflow descriptions into inspectable AI experiment notes and eval gates.',
    href: 'https://github.com/jayjoolee/ai-workflow-audit-kit',
    kind: 'Public repo',
    date: 'June 20, 2026',
    dateTime: '2026-06-20',
    featured: true,
  },
  {
    title: 'Loop Lab',
    summary: 'A prototype direction for collect, draft, evaluate, and revise loops around everyday knowledge work.',
    href: '/now/',
    kind: 'Prototype',
    date: 'June 15, 2026',
    dateTime: '2026-06-15',
    featured: false,
  },
] satisfies readonly WorkItem[];

export const openSourceItems = [
  {
    title: 'context-trails',
    summary: 'Turns local browser history into a reviewable draft of current interests and activity changes, then exports only user-approved context for AI.',
    href: 'https://github.com/jayjoolee/context-trails',
    kind: 'Open source',
    date: 'July 18, 2026',
    dateTime: '2026-07-18',
    featured: true,
  },
  {
    title: 'photo-trip-timeline',
    summary: 'A local-first Apple Photos utility that turns trips into a shareable Markdown timeline without exporting GPS data.',
    href: 'https://github.com/jayjoolee/photo-trip-timeline',
    kind: 'Open source',
    date: 'July 3, 2026',
    dateTime: '2026-07-03',
    featured: false,
  },
  {
    title: 'claude-voice-memo',
    summary: 'A voice recording workflow for speaker-aware transcripts and key briefings using local transcription tools.',
    href: 'https://github.com/jayjoolee/claude-voice-memo',
    kind: 'Open source',
    date: 'July 3, 2026',
    dateTime: '2026-07-03',
    featured: false,
  },
  {
    title: 'dopamind',
    summary: 'An ADHD-friendly learning tool that turns long content into focused chunks, hooks, and catch-me-up recaps.',
    href: 'https://github.com/jayjoolee/dopamind',
    kind: 'Open source',
    date: 'July 3, 2026',
    dateTime: '2026-07-03',
    featured: false,
  },
] satisfies readonly WorkItem[];

export const noteLinks = [
  {
    title: 'AI memory needs a human-auditable contract',
    summary: 'Memory should surface sources, boundaries, and better questions, not become hidden personality capture.',
    href: '/writing/ai-memory-contract/',
    label: 'Memory',
    date: 'June 29, 2026',
    dateTime: '2026-06-29',
    featured: true,
  },
  {
    title: 'Turning voice memos into decision notes without leaking the room',
    summary: 'Local transcripts can become decisions, risks, and follow-ups without exposing raw conversations.',
    href: '/writing/voice-memo-to-decision-note/',
    label: 'Audio',
    date: 'June 27, 2026',
    dateTime: '2026-06-27',
    featured: false,
  },
  {
    title: 'From workflow descriptions to inspectable AI experiments',
    summary: 'Why the audit kit starts with owners, baselines, risk boundaries, and eval evidence.',
    href: '/writing/ai-workflow-audit-kit/',
    label: 'Build note',
    date: 'June 20, 2026',
    dateTime: '2026-06-20',
    featured: false,
  },
] satisfies readonly NoteLink[];

export const nowItems = [
  'designing AI memory that helps people notice, compare, and decide better',
  'turning meeting transcripts into insight without publishing the room',
  'keeping source notes reviewable before an agent is allowed to reuse them',
  'shaping this site into a compact archive of public-safe AI work',
] as const;

export const aboutFacts = [
  {
    title: 'What I make',
    body: 'Small AI tools, public-safe notes, and prototypes that turn messy context into inspectable decisions.',
  },
  {
    title: "What I'm learning",
    body: 'How memory, evaluation, voice notes, and human review can help judgment without becoming identity capture.',
  },
  {
    title: "What I don't publish",
    body: 'Private conversations, employer context, family or health details, financial account material, or identity capture.',
  },
] satisfies readonly AboutFact[];
