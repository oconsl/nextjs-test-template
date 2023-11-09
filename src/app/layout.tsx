import './globals.css';
import { NavBar } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Todo App 👨🏻‍💻',
  description: 'A simple todo app built with Next for testing purposes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar />
        <main className="mx-auto max-w-xl p-4 bg-stone-200 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
