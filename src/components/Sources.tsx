import { ArrowUpRight, Info } from 'lucide-react';
import type { Lang } from '@/i18n/config';
import type { Content } from '@/content/types';
import { categoryOrder, sourceList, sourceUrl } from '@/content/sources';
import { SectionHead } from './SectionHead';

export function Sources({ content, lang }: { content: Content; lang: Lang }) {
  const { sources, ui } = content;

  const numbered = sourceList.map((source, i) => ({ source, n: i + 1 }));

  return (
    <section id="sources" className="section">
      <div className="container-x">
        <SectionHead eyebrow={sources.eyebrow} title={sources.title} lead={sources.lead} />

        <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-2">
          {categoryOrder.map((cat) => {
            const items = numbered.filter((x) => x.source.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} className="reveal">
                <h3 className="font-serif text-2xl font-medium">{sources.categories[cat]}</h3>
                <ol className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {items.map(({ source, n }) => (
                    <li key={source.id} id={`src-${n}`} className="src-item flex scroll-mt-28 gap-4 px-2 py-4">
                      <span className="mt-0.5 flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-ink px-1.5 text-xs font-semibold tabular-nums text-paper">
                        {n}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.96rem] font-medium leading-snug">{source.title[lang]}</p>
                        {source.note && <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{source.note[lang]}</p>}
                        <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                          <a
                            href={sourceUrl(source, lang)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline"
                          >
                            {ui.openSource}
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            <span className="sr-only">{ui.external}</span>
                          </a>
                          {source.alt && (
                            <a
                              href={source.alt.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-semibold text-teal/80 hover:underline"
                            >
                              {source.alt.label[lang]}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                              <span className="sr-only">{ui.external}</span>
                            </a>
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-14 flex gap-4 rounded-3xl border border-ink/10 bg-paper-2 p-6 sm:p-8">
          <Info className="mt-1 h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
          <div>
            <h3 className="font-serif text-xl font-medium">{sources.disclaimerTitle}</h3>
            <p className="mt-2 max-w-4xl text-[0.95rem] leading-relaxed text-ink/70">{sources.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
