import type { CSSProperties } from 'react';
import type { Content } from '@/content/types';
import { Cite } from './Cite';
import { flowIcons } from './icons';

/** «Лоиҳаи Вақфи Солиҳин чӣ гуна амал мекунад» — бывшая диаграмма внутри About, вынесена отдельно. */
export function WaqfFlow({ content }: { content: Content }) {
  const { waqfFlow, ui } = content;
  const label = ui.sourceWord;

  return (
    <section id="waqf-flow" className="section bg-paper-2">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <p className="eyebrow">{waqfFlow.eyebrow}</p>
            <h2 className="h2 mt-5">{waqfFlow.title}</h2>
          </div>
          <p className="text-sm text-ink/55">{waqfFlow.hint}</p>
        </div>

        <div className="relative mt-12">
          {/* соединительная линия с бегущей точкой — только на широких экранах */}
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 hidden lg:block">
            <div className="h-px w-full bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />
            <span className="flow-dot absolute -top-[5px] h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-gold shadow-[0_0_0_6px_rgb(var(--gold)/0.18)]" />
          </div>

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-5">
            {waqfFlow.flow.map((step, i) => {
              const Icon = flowIcons[step.key as keyof typeof flowIcons];
              return (
                <li
                  key={step.key}
                  className="reveal relative flex gap-5 lg:block lg:text-center"
                  style={{ '--d': `${i * 90}ms` } as CSSProperties}
                >
                  {/* вертикальная линия на телефонах */}
                  {i < waqfFlow.flow.length - 1 && (
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
    </section>
  );
}
