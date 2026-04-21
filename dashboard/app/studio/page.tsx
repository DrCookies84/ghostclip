import { Card } from '../components/card';

const TEMPLATES = [
  { id: 'attack-catch', name: 'Attack Catch', hook: 'Dashboard screenshot + "The Ghost blocked this in real time"' },
  { id: 'stat-drop', name: 'Stat Drop', hook: 'Single metric animated with context (block rate, threats caught)' },
  { id: 'founder-story', name: 'Founder Story', hook: 'Short text-driven clip, no face required' },
  { id: 'threat-spotlight', name: 'Threat Spotlight', hook: 'One attack category explained in 30 seconds' },
  { id: 'challenge-taunt', name: 'Challenge Taunt', hook: '"Try to break it" hook → /challenge' },
];

export default function StudioPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-1">// studio</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Create a clip</h1>
        <p className="text-base text-[var(--text-secondary)] mt-1">
          Pick a template, upload source material, let CLIP handle the rest.
        </p>
      </div>

      <Card tag="// step 1" title="Source material">
        <div
          className="rounded p-8 text-center"
          style={{ background: 'var(--bg-2)', border: '1px dashed var(--border-default)' }}
        >
          <p className="font-mono text-xs text-[var(--text-dim)]">
            // upload an image or screenshot — wired in phase 2
          </p>
        </div>
      </Card>

      <Card tag="// step 2" title="Template">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              disabled
              className="text-left p-4 rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--border-subtle)' }}
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-1">
                {t.id}
              </div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">{t.hook}</div>
            </button>
          ))}
        </div>
      </Card>

      <Card tag="// step 3" title="Preview & approve">
        <p className="font-mono text-xs text-[var(--text-dim)]">
          // CLIP renders the clip, caption, hashtags, and platform targets here. Human approves before post.
        </p>
      </Card>
    </div>
  );
}
