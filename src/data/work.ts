import type { ArchiveItem } from './types';

export const contextTrails = {
  slug: 'context-trails',
  title: 'Context Trails',
  summary: 'A local-first tool for reviewing, rewriting, or rejecting interest hypotheses before any context reaches AI.',
  href: 'https://github.com/jayjoolee/context-trails',
  kind: 'Open source',
  date: 'July 18, 2026',
  dateTime: '2026-07-18',
  section: 'work',
  featured: true,
} satisfies ArchiveItem;

export const workflowAuditKit = {
  slug: 'ai-workflow-audit-kit',
  title: 'AI Workflow Audit Kit',
  summary: 'A public repo for turning messy workflow descriptions into inspectable AI pilot notes and evaluation gates.',
  href: 'https://github.com/jayjoolee/ai-workflow-audit-kit',
  kind: 'Public repo',
  date: 'June 20, 2026',
  dateTime: '2026-06-20',
  section: 'work',
  featured: true,
} satisfies ArchiveItem;

export const photoTripTimeline = {
  slug: 'photo-trip-timeline',
  title: 'photo-trip-timeline',
  summary: 'A local-first Apple Photos utility that makes shareable travel timelines without exporting GPS coordinates.',
  href: 'https://github.com/jayjoolee/photo-trip-timeline',
  kind: 'Open source',
  date: 'June 24, 2026',
  dateTime: '2026-06-24',
  section: 'work',
  featured: false,
} satisfies ArchiveItem;

export const claudeVoiceMemo = {
  slug: 'claude-voice-memo',
  title: 'claude-voice-memo',
  summary: 'A local workflow for speaker-aware transcripts and key briefings using on-device transcription tools.',
  href: 'https://github.com/jayjoolee/claude-voice-memo',
  kind: 'Open source',
  date: 'June 20, 2026',
  dateTime: '2026-06-20',
  section: 'work',
  featured: false,
} satisfies ArchiveItem;

export const dopamind = {
  slug: 'dopamind',
  title: 'Dopamind',
  summary: 'An attention-friendly learning tool that turns long material into focused chunks, hooks, and catch-up recaps.',
  href: 'https://github.com/jayjoolee/dopamind',
  kind: 'Open source',
  date: 'June 13, 2026',
  dateTime: '2026-06-13',
  section: 'work',
  featured: false,
} satisfies ArchiveItem;

export const githubUpdates = [
  {
    slug: 'context-trails-user-owned-context',
    title: 'Reframed Context Trails around user-owned AI context',
    summary: 'Made review, correction, and explicit approval the center of the public tool.',
    href: 'https://github.com/jayjoolee/context-trails/commit/c417d8d',
    kind: 'GitHub · context-trails',
    date: 'July 18, 2026',
    dateTime: '2026-07-18',
    section: 'work',
    featured: true,
  },
  {
    slug: 'context-trails-guided-flow',
    title: 'Added a guided browser-history context flow',
    summary: 'Connected local analysis, human review, and standalone export into one inspectable path.',
    href: 'https://github.com/jayjoolee/context-trails/commit/d20dd1f',
    kind: 'GitHub · context-trails',
    date: 'July 18, 2026',
    dateTime: '2026-07-18',
    section: 'work',
    featured: false,
  },
  {
    slug: 'site-context-trails',
    title: 'Added Context Trails to this archive',
    summary: 'Connected a new public repository to the site instead of leaving GitHub activity detached.',
    href: 'https://github.com/jayjoolee/jayjoolee.github.io/commit/75a4392',
    kind: 'GitHub · this site',
    date: 'July 18, 2026',
    dateTime: '2026-07-18',
    section: 'work',
    featured: false,
  },
  {
    slug: 'audit-kit-rag-demo',
    title: 'Added a synthetic RAG evaluation demo',
    summary: 'Made the workflow audit kit testable with public-safe fixtures rather than private work data.',
    href: 'https://github.com/jayjoolee/ai-workflow-audit-kit/commit/ab1013f',
    kind: 'GitHub · audit kit',
    date: 'June 21, 2026',
    dateTime: '2026-06-21',
    section: 'work',
    featured: false,
  },
  {
    slug: 'dopamind-korean-ui',
    title: 'Added a localized Korean demo to Dopamind',
    summary: 'Made the reading prototype usable in Korean with an explicit English and Korean interface toggle.',
    href: 'https://github.com/jayjoolee/dopamind/commit/086d854',
    kind: 'GitHub · dopamind',
    date: 'June 16, 2026',
    dateTime: '2026-06-16',
    section: 'work',
    featured: false,
  },
] satisfies readonly ArchiveItem[];
