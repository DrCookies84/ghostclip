import { Card } from '../components/card';

const SLOTS = [
  { label: 'Morning', time: '08:00 CST', status: 'empty' },
  { label: 'Afternoon', time: '13:00 CST', status: 'empty' },
  { label: 'Evening', time: '19:00 CST', status: 'empty' },
];

export default function QueuePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)] mb-1">// queue</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Scheduled posts</h1>
        <p className="text-base text-[var(--text-secondary)] mt-1">
          3 slots per day, Mexico time. CLIP fills them; you approve before publish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SLOTS.map(s => (
          <Card key={s.label} tag={`// ${s.time}`} title={s.label}>
            <div className="py-8 text-center">
              <p className="font-mono text-xs text-[var(--text-dim)]">// slot empty</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
