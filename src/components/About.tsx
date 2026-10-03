import { Check, Minus } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Content } from '@/content/types';
import { Cite, Cited } from './Cite';
import { SectionHead } from './SectionHead';

export function About({ content }: { content: Content }) {
  const { about, ui } = content;
  const label = ui.sourceWord;

  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow={about.eyebrow}
          title={about.title}
          lead={<Cited value={about.lead} label={label} />}
        />

        {/* Садака и вакф */}
        <div className="mt-16 sm:mt-20">
          <h3 className="h3 reveal">{about.compareTitle}</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="reveal card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{about.compare.sadaqa.title}</p>
              <p className="mt-3 font-serif text-2xl leading-snug">{about.compare.sadaqa.lead}</p>
              <ul className="mt-6 space-y-3.5">
                {about.compare.sadaqa.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75">
                    <Minus className="mt-1 h-4 w-4 shrink-0 text-ink/35" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>

            <article
              className="reveal on-dark bg-star-dark relative overflow-hidden rounded-3xl border border-fixed-ink/10 bg-fixed-ink p-6 text-fixed-paper shadow-lift sm:p-8"
              style={{ '--d': '100ms' } as CSSProperties}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">{about.compare.waqf.title}</p>
              <p className="mt-3 font-serif text-2xl leading-snug">{about.compare.waqf.lead}</p>
              <ul className="mt-6 space-y-3.5">
                {about.compare.waqf.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-fixed-paper/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="reveal mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-ink/65">
            <Cited value={about.compare.note} label={label} />
          </p>
        </div>
      </div>
    </section>
  );
}
