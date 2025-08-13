'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/lab', label: 'Lab' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<{ slug: string; title: string; tags: string[] }[]>([]);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === 'K') {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (open && projects.length === 0) {
      fetch('/api/projects')
        .then(res => res.json())
        .then(setProjects)
        .catch(() => {});
    }
  }, [open, projects.length]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button aria-label="Command Palette" className="btn">
          <Search className="h-4 w-4" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 w-80 rounded-md bg-background p-4 shadow-lg">
          <Command
            autoFocus
            onKeyDown={e => {
              if (e.key === 'Escape') setOpen(false);
            }}
          >
            <Command.Input placeholder="Search..." />
            <Command.List>
              <Command.Empty>No results.</Command.Empty>
              <Command.Group heading="Pages">
                {pages.map(p => (
                  <Command.Item
                    key={p.href}
                    onSelect={() => {
                      router.push(p.href);
                      setOpen(false);
                    }}
                  >
                    {p.label}
                  </Command.Item>
                ))}
              </Command.Group>
              {projects.length > 0 && (
                <Command.Group heading="Projects">
                  {projects.map(pr => (
                    <Command.Item
                      key={pr.slug}
                      value={`${pr.title} ${pr.tags.join(' ')}`}
                      onSelect={() => {
                        router.push(`/projects/${pr.slug}`);
                        setOpen(false);
                      }}
                    >
                      {pr.title}
                    </Command.Item>
                  ))}
                </Command.Group>
              )}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
