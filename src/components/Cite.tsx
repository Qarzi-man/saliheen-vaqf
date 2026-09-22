import { sourceNumber, type SourceId } from '@/content/sources';

/** Сноска-источник: [1], [2, 5]. Ведёт на раздел «Источники» (#src-n). */
export function Cite({ ids, label }: { ids?: readonly SourceId[]; label: string }) {
  if (!ids || ids.length === 0) return null;
  const nums = Array.from(new Set(ids.map(sourceNumber))).sort((a, b) => a - b);
  return (
    <span className="cite" role="note" aria-label={`${label}: ${nums.join(', ')}`}>
      [
      {nums.map((n, i) => (
        <span key={n}>
          {i > 0 && ', '}
          <a href={`#src-${n}`}>{n}</a>
        </span>
      ))}
      ]
    </span>
  );
}

/** Текст с необязательными сносками. */
export function Cited({
  value,
  label,
}: {
  value: { text: string; cite?: readonly SourceId[] };
  label: string;
}) {
  return (
    <>
      {value.text}
      <Cite ids={value.cite} label={label} />
    </>
  );
}
