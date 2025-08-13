#!/bin/bash
npx create-next-app@latest wahdat-portfolio \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd wahdat-portfolio
npm install framer-motion @radix-ui/react-dialog clsx lucide-react next-mdx-remote gray-matter remark-gfm cmdk next-themes zod next-sitemap @react-three/fiber three valtio
