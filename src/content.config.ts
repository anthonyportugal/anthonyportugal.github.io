import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    clientType: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    tags: z.array(z.string()),
    featured: z.boolean().default(true),
    order: z.number(),
    accentColor: z.enum(['mauve', 'teal', 'sky']).default('mauve'),
  }),
});

const openSource = defineCollection({
  loader: glob({ base: './src/content/open-source', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tagline: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string(),
    liveUrl: z.string().optional(),
    liveUrlLabel: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(true),
    accentColor: z.enum(['mauve', 'teal', 'sky', 'peach', 'green']).default('sky'),
  }),
});

export const collections = {
  projects,
  openSource,
};
