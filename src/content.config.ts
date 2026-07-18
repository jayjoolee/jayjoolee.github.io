import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '*.md' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    published: z.coerce.date(),
    kind: z.string().min(1),
    kicker: z.string().min(1).default('Field note'),
    locale: z.enum(['en', 'ko']).default('en'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

export const collections = { writing };
