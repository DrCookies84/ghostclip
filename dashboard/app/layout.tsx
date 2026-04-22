import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Sidebar } from './components/sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'GhostClip — Ghost Layer social content agent',
  description: 'Social content agent for Ghost Layer, operated via Claude Code.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen relative">
          <Sidebar />
          <main className="flex-1 p-8 relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
