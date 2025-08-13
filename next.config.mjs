import nextMDX from '@next/mdx';
import { createLoader } from 'next-mdx-remote/webpack';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [import('remark-gfm').then(m => m.default)],
    rehypePlugins: []
  }
});

const nextConfig = {
  experimental: {
    appDir: true
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    domains: []
  }
};

export default withMDX(nextConfig);
