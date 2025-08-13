import '@/app/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import ShellLayout from '@/components/shell-layout';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Wahdat Ullah - DevOps Engineer',
  description: 'Portfolio of Wahdat Ullah',
  metadataBase: new URL('https://wahdat.dev')
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ShellLayout>{children}</ShellLayout>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Wahdat Ullah',
              url: 'https://wahdat.dev'
            })
          }}
        />
      </body>
    </html>
  );
}
