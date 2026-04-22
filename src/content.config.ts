import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    image: image().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts: postsCollection,
};
