import { Card } from '../components/card';

export default function ClipLogPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-1">// clip log</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Agent activity</h1>
        <p className="text-base text-[var(--text-secondary)] mt-1">
          Transparent trace of every CLIP decision — research, script, generation, publish. Ghost Gate
          verification events surface here too.
        </p>
      </div>

      <Card tag="// most recent" title="Event stream">
        <div
          className="p-8 text-center rounded"
          style={{ background: 'var(--bg-2)', border: '1px solid var(--border-subtle)' }}
        >
          <p className="font-mono text-xs text-[var(--text-dim)]">
            // no events yet — CLIP agent not online
          </p>
        </div>
      </Card>
    </div>
  );
}
