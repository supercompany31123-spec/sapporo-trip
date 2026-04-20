import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const spots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/spots' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    address: z.string(),
    transportation: z.string(),
    opening_hours: z.string().optional(),
    official_url: z.string().optional(),
    image: z.string(),
    image_credit: z.string(),
    featured: z.boolean().default(false),
  }),
});

const restaurants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/restaurants' }),
  schema: z.object({
    name: z.string(),
    name_cn: z.string().optional(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    address: z.string(),
    transportation: z.string(),
    opening_hours: z.string().optional(),
    price_range: z.string().optional(),
    official_url: z.string().optional(),
    reservation: z.string().optional(),
    image: z.string(),
    image_credit: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { spots, restaurants };
