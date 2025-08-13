'use client';

import Link from 'next/link';
import { ReactNode, useState, useEffect } from 'react';
import ThemeToggle from './theme-toggle';
import CommandPalette from './command-palette';
import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/lab', label: 'Lab' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function ShellLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">
        Skip to content
      </a>
      <header className="flex items-center justify-between px-4 py-3 backdrop-blur-md bg-background/80">
        <Link href="/" className="font-mono font-bold text-primary">
          Wahdat Ullah
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 rounded hover:bg-primary/10 focus:bg-primary/10 focus:outline-none ${
                pathname === link.href ? 'text-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CommandPalette />
          <ThemeToggle />
        </div>
      </header>
      <motion.main
        id="main"
        className="flex-1 container mx-auto px-4"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.18 }}
      >
        {children}
      </motion.main>
      <footer className="text-center py-4 text-sm text-muted">
        © {new Date().getFullYear()} Wahdat Ullah
      </footer>
    </div>
  );
}
