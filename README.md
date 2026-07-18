# Jay Lee - Personal Archive

Astro site for Jay Lee's living personal archive: work and GitHub activity, notes, reading and learning, places, career, and current interests.

Primary URL after GitHub Pages deployment:

```text
https://jayjoolee.github.io
```

## Structure

```text
/
├── .github/workflows/deploy.yml
├── public/
│   └── assets/
├── src/
│   ├── layouts/
│   ├── content/
│   ├── pages/
│   └── styles/
├── PUBLISHING.md
└── package.json
```

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run new:post` | Create a new Markdown note |
| `npm run preview` | Preview production build |

## Publishing Model

This site is the canonical home for Jay's public archive. It should read like a compact research ledger rather than a portfolio brochure: real activity, learning traces, and dated observations first; claims second.

Notes live in `src/content/writing/`. See [PUBLISHING.md](PUBLISHING.md) for the no-template publishing workflow.

## Content Boundaries

- Use synthetic or public material only.
- Do not publish employer, customer, or private operational data.
- Keep career material at public résumé level.
- Keep travel at broad place and year level; omit companions, itinerary, lodging, and coordinates.
- Link public repositories and inspectable artifacts wherever possible.
