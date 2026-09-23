import type { CSSProperties } from 'react';
import { Cite } from './Cite';
import type { Content } from '@/content/types';
import { SectionHead } from './SectionHead';

export function How({ content }: { content: Content }) {
  const { how, ui } = content;
  return (
    <section id="how" className="section overflow-hidden bg-mist/70">
      <div className="container-x">
        <SectionHead eyebrow={how.eyebrow} title={how.title} lead={how.lead} />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {how.steps.map((s, i) => (
            <li
              key={s.title}
              className="reveal relative overflow-hidden rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-8"
              style={{ '--d': `${(i % 3) * 90}ms` } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[6.5rem] font-medium leading-none text-gold/20"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-teal px-2 text-sm font-semibold tabular-nums text-paper">
                {i + 1}
              </span>
              <h3 className="relative mt-5 font-serif text-2xl font-medium leading-snug">{s.title}</h3>
              <p className="relative mt-3 text-[0.97rem] leading-relaxed text-ink/70">
                {s.text}
                <Cite ids={s.cite} label={ui.sourceWord} />
              </p>
            </li>
          ))}
        </ol>

        <p className="reveal mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-ink/65">{how.note}</p>
      </div>
    </section>
  );
}
