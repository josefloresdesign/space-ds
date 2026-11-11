import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// The site renders the Markdown docs that live at the repo root (../docs),
// so documentation is written once and shared by GitHub, the website and AI tools.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../docs' }),
});

export const collections = { docs };
