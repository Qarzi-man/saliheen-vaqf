import { Check, Minus } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Content } from '@/content/types';
import { Cite, Cited } from './Cite';
import { SectionHead } from './SectionHead';
import { flowIcons } from './icons';

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

        {/* Схема: имущество → вакф → управление → польза → общество */}
        <div className="mt-16 sm:mt-20">
          <div className="reveal flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="h3">{about.flowTitle}</h3>
            <p className="text-sm text-ink/55">{about.flowHint}</p>
          </div>

          <div className="relative mt-10">
            {/* соединительная линия с бегущей точкой — только на широких экранах */}
            <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 hidden lg:block">
              <div className="h-px w-full bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />
              <span className="flow-dot absolute -top-[5px] h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-gold shadow-[0_0_0_6px_rgb(var(--gold)/0.18)]" />
            </div>

            <ol className="grid gap-8 lg:grid-cols-5 lg:gap-5">
              {about.flow.map((step, i) => {
                const Icon = flowIcons[step.key];
                return (
                  <li
                    key={step.key}
                    className="reveal relative flex gap-5 lg:block lg:text-center"
                    style={{ '--d': `${i * 90}ms` } as CSSProperties}
                  >
                    {/* вертикальная линия на телефонах */}
                    {i < about.flow.length - 1 && (
                      <span aria-hidden="true" className="absolute left-7 top-16 -bottom-8 w-px bg-gold/30 lg:hidden" />
                    )}
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-paper text-teal shadow-soft lg:mx-auto">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[0.65rem] font-semibold tabular-nums text-paper">
                        {i + 1}
                      </span>
                    </span>
                    <div className="lg:mt-5">
                      <h4 className="font-serif text-xl font-medium leading-snug">{step.title}</h4>
                      <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-ink">{step.short}</p>
                      <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/70">
                        {step.text}
                        <Cite ids={step.cite} label={label} />
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Садака и вакф */}
        <div className="mt-20 sm:mt-28">
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
              className="reveal on-dark bg-star-dark relative overflow-hidden rounded-3xl border border-ink/10 bg-ink p-6 text-paper shadow-lift sm:p-8"
              style={{ '--d': '100ms' } as CSSProperties}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">{about.compare.waqf.title}</p>
              <p className="mt-3 font-serif text-2xl leading-snug">{about.compare.waqf.lead}</p>
              <ul className="mt-6 space-y-3.5">
                {about.compare.waqf.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-paper/85">
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
