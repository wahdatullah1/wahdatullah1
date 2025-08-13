'use client';

import { ReactNode, useState } from 'react';

interface Tab {
  label: string;
  children: ReactNode;
}

export default function CodeTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-4">
      <div className="flex gap-2 mb-2 font-mono text-sm">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            className={`px-2 py-1 rounded ${i === active ? 'bg-primary text-background' : 'bg-primary/10 text-primary'}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="border rounded p-2 bg-black/20 overflow-x-auto">
        {tabs[active]?.children}
      </div>
    </div>
  );
}
