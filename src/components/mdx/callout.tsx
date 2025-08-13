import { ReactNode } from 'react';

export default function Callout({ children }: { children: ReactNode }) {
  return <div className="border-l-4 border-primary bg-primary/10 p-4 my-4">{children}</div>;
}
