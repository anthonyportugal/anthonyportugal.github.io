import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every collection is split by locale folder (en/, es/), so an entry's id starts
// with its language. src/lib/content.ts reads one language at a time.

const metric = z.object({
  value: z.string(),
  label: z.string(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    metric,
    metrics: z.array(metric),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const openSource = defineCollection({
  loader: glob({ base: './src/content/open-source', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.url(),
    highlight: z.string().optional(),
    liveUrl: z.url().optional(),
    liveUrlLabel: z.string().optional(),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    client: z.string().optional(),
    // ISO year-month; an entry without an end is the current position.
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z
      .string()
      .regex(/^\d{4}-\d{2}$/)
      .optional(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  openSource,
  experience,
};
