# Wahdat Ullah Portfolio

Animated portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion and MDX.

## Getting Started

```bash
npm install
npm run dev
```

## Adding a Project

1. Create an MDX file in `src/content/projects` with frontmatter:
   ```mdx
   ---
   title: Example Project
   summary: Short summary.
   tags: ["tag1", "tag2"]
   year: 2024
   ---
   ```
2. The project automatically appears on `/projects`.

## Disable 3D / Reduce Motion

The app respects `prefers-reduced-motion` and disables animations. To force-disable the Three.js background, remove the dynamic import in `src/app/page.tsx`.

## Deploy

Deploy on [Vercel](https://vercel.com):

```bash
npm run build
vercel deploy
```
