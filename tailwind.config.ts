import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B1220',
        primary: '#0EA5E9',
        accent: '#22D3EE',
        muted: '#94A3B8',
        text: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
