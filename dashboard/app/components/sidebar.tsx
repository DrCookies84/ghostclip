'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/studio', label: 'Studio', tag: '// create' },
  { href: '/queue', label: 'Queue', tag: '// scheduled' },
  { href: '/analytics', label: 'Analytics', tag: '// performance' },
  { href: '/clip-log', label: 'CLIP Log', tag: '// agent trace' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-64 shrink-0 p-6 relative z-10"
      style={{ background: 'var(--bg-2)', borderRight: '1px solid var(--border-subtle)' }}
    >
      <div className="mb-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-2">
          // ghostclip v0.1
        </p>
        <div className="flex justify-center my-3">
          <Image
            src="/ghostclip-logo.png"
            alt="GhostClip"
            width={637}
            height={392}
            priority
            className="h-32 w-auto"
          />
        </div>
        <p className="font-mono text-[11px] text-[var(--text-dim)] mt-2">
          Agent: <span className="text-[var(--cyan)]">CLIP</span> · <span style={{ color: 'var(--text-dim)' }}>offline</span>
        </p>
      </div>

      <nav className="space-y-1">
        {NAV.map(item => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded transition-colors"
              style={{
                background: active ? 'var(--bg-3)' : 'transparent',
                borderLeft: active ? '2px solid var(--cyan)' : '2px solid transparent',
              }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className={
                    active
                      ? 'text-lg font-bold text-[var(--cyan)]'
                      : 'text-base font-medium text-[var(--text-primary)]'
                  }
                >
                  {item.label}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-secondary)]">
                  {item.tag}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
