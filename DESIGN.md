# Jay Lee GitHub Pages Design System

## 1. Atmosphere & Identity

This site is Jay's living personal archive: work and GitHub activity, notes, reading and learning, places, career history, and current interests. It should feel like a research ledger rather than a portfolio deck: narrow, quiet, chronological, human, and easy to inspect.

The primary visual reference is `pi.website`: off-white paper, serif identity, monospaced body text, underlined navigation, a left timeline spine, and selective black-outlined entries. Maggie Appleton's site informs the content architecture only: a person should be legible through a garden, library, places, work, career, and dated Now archive. Do not copy either reference's branding, copy, illustrations, or exact layout.

## 2. Color

### Palette

| Role | Token | Light | Usage |
| --- | --- | --- | --- |
| Surface/page | `--paper` | `#f5f4ef` | Main paper background |
| Surface/panel | `--panel` | `#ffffff` | Archive cards and article rows |
| Text/ink | `--ink` | `#07090d` | Primary text and featured outlines |
| Text/muted | `--muted` | `#686868` | Dates, summaries, secondary text |
| Border/default | `--line` | `#d4d3cb` | Timeline, dividers, quiet outlines |
| Accent/green | `--green` | `#111827` | Kept as semantic active token, rendered as ink |
| Utility/white | `--white` | `#ffffff` | Text on dark surfaces |
| Utility/focus | `--focus-ring` | `rgba(7, 9, 13, 0.72)` | Keyboard focus outline |
| Surface/header | `--header-bg` | `transparent` | Non-sticky header |
| Surface/hover | `--panel-hover` | `rgba(255, 255, 255, 0.48)` | Quiet item hover |
| Surface/faint | `--panel-faint` | `rgba(255, 255, 255, 0.6)` | Secondary featured entries |
| Shadow/featured | `--shadow-featured` | `3px 3px 0 var(--ink)` | Featured archive entries |
| Shadow/quiet | `--shadow-quiet` | `3px 3px 0 var(--line)` | Secondary featured entries |

### Rules

- Keep the page off-white, low-saturation, and mostly monochrome. Avoid purple-blue AI gradients.
- The homepage should not rely on "proof grid" colors, metric boxes, or decorative thumbnails. Use chronology and text hierarchy as wayfinding.
- Raw color values belong in `:root` or SVG assets only. Component styles should use tokens.

## 3. Typography

### Scale

| Level | Size Token | Weight Token | Line Height Token | Tracking | Usage |
| --- | --- | --- | --- | --- | --- |
| Site title | `--text-brand` | `--weight-regular` | `--leading-brand` | `--tracking-flat` | Serif brand link |
| Page H1 | `--text-heading` | `--weight-bold` | `--leading-heading` | `--tracking-flat` | Section and page titles |
| H2 | `--text-heading` | `--weight-bold` | `--leading-heading` | `--tracking-flat` | Section headers |
| H3 | `--text-card-title` | `--weight-bold` | `--leading-card-title` | `--tracking-flat` | Timeline titles |
| Lead | `--text-lead` | `--weight-medium` | `--leading-lead` | `--tracking-flat` | Intro paragraphs |
| Body | `--text-body` | `--weight-regular` | `--leading-body` | `--tracking-flat` | Standard copy |
| Body small | `--text-small` | `--weight-regular` | `--leading-small` | `--tracking-flat` | Timeline summaries |
| Meta | `--text-kicker` | `--weight-regular` | `--leading-small` | `--tracking-flat` | Dates, labels |
| Article title | `--text-article-title` | `--weight-bold` | `--leading-article-title` | `--tracking-flat` | Long-form article H1 |

### Font Stack

- Identity: `Georgia, "Times New Roman", serif`
- Primary: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
- Korean fallback: `ui-monospace, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", system-ui, sans-serif`

### Rules

- Serif appears only in the site identity and footer identity. The archive itself is monospaced.
- Body copy stays short. Paragraphs should generally be under 62 characters wide.
- Timeline item summaries should be one sentence. Longer explanation belongs inside the note page.

## 4. Spacing & Layout

### Base Unit

Spacing derives from a 4px base.

| Token | Value | Usage |
| --- | --- | --- |
| `--space-2` | 8px | Tag gaps |
| `--space-3` | 12px | Compact inline padding |
| `--space-4` | 16px | Default inner spacing |
| `--space-5` | 20px | Mobile page padding |
| `--space-6` | 24px | Card spacing |
| `--space-8` | 32px | Section header gaps |
| `--space-10` | 40px | Card and page rhythm |

### Grid

- Max content width uses `--content-width` for archive pages, `--article-width` for long-form articles, and `--article-title-width` for long article titles.
- Content is left-aligned with a desktop margin near 48px, not centered.
- Homepage blocks are simple: identity statement, mixed Latest Trail timeline, Garden index, Now, Korean summary.
- Archive entries use one timeline column on all breakpoints.
- Mobile width switches to `--mobile-page-left` and `--mobile-content-width`.

### Layout Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--page-left` | `clamp(14px, 3.4vw, 48px)` | Left page gutter |
| `--content-width` | `576px` | Default readable archive column |
| `--article-width` | `680px` | Long-form article column |
| `--article-title-width` | `780px` | Long-form H1 width |
| `--paragraph-width` | `62ch` | Compact copy measure |
| `--lead-width` | `58ch` | Intro paragraph measure |
| `--grid-single-column` | `minmax(0, 1fr)` | Timeline and Now single-column grid |
| `--main-min-height` | `70dvh` | Main page vertical floor |
| `--mobile-page-left` | `14px` | Phone gutter |
| `--mobile-content-width` | `calc(100vw - 28px)` | Phone content width |

### Breakpoints

Breakpoints are kept as literal media queries because CSS custom properties cannot be used directly in media query conditions.

| Width | Usage |
| --- | --- |
| `900px` | Stack header and single-column supporting panels |
| `640px` | Use mobile gutter, tighter nav, and compact timeline item padding |

### Rules

- Avoid nested cards, metric grids, large hero typography, and policy blocks on the homepage.
- Use featured entry boxes only for the strongest archive items.
- Full-height blocks use `min-height: 100dvh` or calculated `dvh`, not `100vh`.

## 5. Components

### Header Navigation

- **Structure**: brand link plus landmark `nav`.
- **Labels**: `Home`, `Garden`, `Work`, `Now`, `About`, `한국어`, `GitHub`.
- **States**: underlined default links, thicker underline on hover/focus/active.
- **Accessibility**: visible focus state, real links, and a descriptive nav label.
- **Tokens**: `--nav-gap`, `--nav-gap-mobile`, `--nav-hit`, `--underline-thin`, `--underline-thick`, `--underline-offset`, `--underline-offset-compact`.

### Archive Timeline

- **Structure**: left spine, square marker, meta row, title, one-line summary.
- **Featured state**: white fill, 1px ink border, `3px 3px 0 var(--ink)` shadow.
- **Quiet state**: no box by default, optional soft fill on hover.
- **Text rule**: title stays one line where possible but wraps instead of clipping on narrow screens; summary stays one sentence.
- **Tokens**: `--timeline-inset`, `--timeline-fade`, `--timeline-entry-gap`, `--timeline-entry-x`, `--timeline-entry-y`, `--timeline-dot-size`, `--timeline-dot-left`, `--timeline-dot-top`, `--timeline-dot-outline`.

### Note Row

- **Structure**: same archive timeline component with note label and date.
- **Usage**: `Things I'm thinking about` and Notes page.
- **Text rule**: no long excerpts on list pages.

### Latest Trail

- **Structure**: the Archive Timeline primitive with mixed `Build`, `Note`, `Learning`, `Place`, and `Career` labels.
- **Purpose**: make recent GitHub work and personal learning visible in one chronological stream.
- **Content rule**: every row must be grounded in a public repository or a real dated source note; do not invent activity to balance categories.

### Garden Index

- **Structure**: a plain ruled list of `Notes`, `Library`, `Places`, and `Interests`, each with a one-sentence description and real link.
- **Purpose**: expose the site's content map without introducing a dashboard grid or decorative card system.
- **States**: underline and row-background feedback on hover/focus; the full row remains readable at phone width.

### Now Strip

- **Structure**: plain ruled panel with 3-4 plain-language items and one link to `/now/`.
- **Boundary**: public-safe only. No family, health, employer, finance, account, or private conversation details.

### About & Career Facts

- **Structure**: concise identity facts plus a dated Career timeline linked from About.
- **Tone**: human, specific, and non-corporate. Public résumé facts are allowed; internal projects, people, reporting lines, and exact private details are not.

### Article Diagrams

- **Structure**: wide diagrams may use a paired, vertically reflowed mobile source inside `<picture>`.
- **Legibility rule**: diagram labels must remain readable at phone width; do not shrink a desktop canvas until its text becomes annotation-sized.

### Content Taxonomy

- `Build`: public repositories, shipped tools, and commit-level updates.
- `Note`: published field notes and operating ideas.
- `Learning`: books, videos, lectures, and study packs actually processed by Jay.
- `Place`: broad country/city-level memories only when Jay has approved or previously made the fact public; never exact coordinates, lodging, companions, or private itinerary.
- `Career`: public résumé-level roles and education only.
- `Interest`: topic-level curiosity and methods, never raw browsing history, holdings, health, family, or inferred sensitive traits.

## 6. Motion & Interaction

### Timing

State changes are intentionally immediate. The archive should feel like a stable research ledger, without animated card movement or interpolated hover effects.

### Rules

- Keep every archive card spatially fixed.
- Use underline weight or quiet background changes for immediate hover/focus feedback.
- Preserve `prefers-reduced-motion` handling for smooth page scrolling.
- Every interactive element has hover/focus and active feedback.

## 7. Depth & Surface

### Strategy

Mostly flat, with one timeline spine and occasional hard black shadows. The site should feel like a readable ledger, not a deck of floating SaaS cards.

| Level | Value | Usage |
| --- | --- | --- |
| Border | `--rule` | Cards and dividers |
| Featured | `--shadow-featured` | Featured archive entries |

### Utility Tokens

| Token | Usage |
| --- | --- |
| `--rule` | Canonical one-pixel ruled border |
| `--radius-none` | Square Pi-like article and card edges |
| `--radius-focus` | Keyboard focus radius only |
| `--focus-outline`, `--focus-offset`, `--focus-ring` | Keyboard focus visibility |
| `--skip-link-padding`, `--skip-link-layer`, `--skip-link-offset` | Skip-link behavior |
| `--screen-reader-size`, `--screen-reader-offset` | Visually hidden text utility |
| `--stack-min-size` | Flex/grid minimum-size reset |
| `--link-weight` | Strong link weight in the monospaced system |

### Rules

- Use fewer bordered boxes than the previous dense design.
- Do not add decorative orbs, heavy gradients, or stock imagery.
- Privacy/public-safe boundaries live in About and Now, not as homepage proof blocks.
