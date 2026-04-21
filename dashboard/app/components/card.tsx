import type { ReactNode } from 'react';

interface CardProps {
  title?: string;
  tag?: string;
  children: ReactNode;
}

export function Card({ title, tag, children }: CardProps) {
  return (
    <div className="glass-card p-6">
      {(title || tag) && (
        <div className="mb-5">
          {tag && (
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-1.5">
              {tag}
            </p>
          )}
          {title && <h2 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h2>}
        </div>
      )}
      {children}
    </div>
  );
}
