import { Card } from '../components/card';

const PLATFORMS = ['TikTok', 'Instagram', 'X', 'LinkedIn', 'YouTube'];
const METRICS = [
  { label: 'Posts published', value: '—' },
  { label: 'Total views', value: '—' },
  { label: 'Total likes', value: '—' },
  { label: 'Avg. engagement', value: '—' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-1">// analytics</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Performance</h1>
        <p className="text-base text-[var(--text-secondary)] mt-1">
          Pulled from Ayrshare per platform. Wired in phase 3.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div
            key={m.label}
            className="p-5 rounded"
            style={{ background: 'var(--bg-3)', border: '1px solid var(--border-subtle)' }}
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-dim)]">
              {m.label}
            </p>
            <p className="font-mono text-2xl font-bold text-[var(--cyan)] mt-1">{m.value}</p>
          </div>
        ))}
      </div>

      <Card tag="// per platform" title="Platform breakdown">
        <div className="space-y-2">
          {PLATFORMS.map(p => (
            <div
              key={p}
              className="flex items-center justify-between px-4 py-3 rounded"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--border-subtle)' }}
            >
              <span className="text-sm text-[var(--text-primary)]">{p}</span>
              <span className="font-mono text-xs text-[var(--text-dim)]">// no data yet</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
