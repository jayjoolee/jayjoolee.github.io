# Publishing a new note

You do not need to edit a page template or a data file. A note is one Markdown file, and Astro creates its page and archive entries automatically.

## 1. Create the file

From the project folder, run:

```sh
npm run new:post
```

The prompts create `src/content/writing/your-slug.md`. A new note starts as a draft unless you answer yes to the publish question.

## 2. Write and preview

Keep the metadata between the two `---` lines, then write the body in Markdown:

```md
---
title: "A clear title"
summary: "One sentence used on archive lists and in search previews."
published: 2026-07-18
kind: "Field note"
kicker: "Field note / Topic"
featured: false
draft: true
---

<p class="lead">A short opening that says why the note matters.</p>

## First section

The rest is ordinary Markdown.
```

Start the local site with `npm run dev`. Drafts appear locally, but production builds leave them out. When the note is ready, change `draft: true` to `draft: false`.

## 3. Check and publish

```sh
npm run check
npm run build
git add src/content/writing/your-slug.md
git commit -m "Add note: A clear title"
git push
```

GitHub Pages deploys the updated site after the push. The filename becomes the URL, so `your-slug.md` becomes `/writing/your-slug/`.

## Publishing from GitHub.com

You can also add a file directly in the GitHub website under `src/content/writing/`. Copy an existing note, change its filename, metadata, and body, set `draft: false`, and commit it to the default branch. The same automatic build runs without a local editor.

## Public boundary

- Use public or synthetic material only.
- Keep employer, customer, family, medical, financial, and private conversation details out of posts.
- Travel notes should omit exact itineraries, lodging, companions, and coordinates.
