import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubRepositoryLink: z.string(),
    technologies: z.array(z.string()),
    slug: z.string(),
  }),
});

export const collections = { projects };
