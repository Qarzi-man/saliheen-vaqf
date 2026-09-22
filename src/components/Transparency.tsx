import { ArrowUpRight, Clock, FileText } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Lang } from '@/i18n/config';
import type { Content } from '@/content/types';
import { charterUrl, metrics, transparencyLinks, vaqfTermsUrl } from '@/config/transparency';
import { Cited } from './Cite';
import { SectionHead } from './SectionHead';

export function Transparency({ content, lang }: { content: Content; lang: Lang }) {
  const { transparency: t, ui } = content;

  const docs = [
    { label: t.charterLabel, url: charterUrl },
    { label: t.termsLabel, url: vaqfTermsUrl },
  ];

  return (
    <section id="transparency" className="section">
      <div className="container-x">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={<Cited value={t.lead} label={ui.sourceWord} />} />

        {/* Где смотреть */}
        <h3 className="reveal mt-14 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{t.linksTitle}</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {transparencyLinks.map((l, i) => (
            <li key={l.id} className="reveal" style={{ '--d': `${i * 70}ms` } as CSSProperties}>
              <a
                href={l.href(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-teal">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-serif text-xl font-medium">{l.title[lang]}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{l.text[lang]}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  {t.open}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span className="sr-only">{ui.external}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Показатели: только подтверждённые данные */}
        <div className="mt-16">
          <h3 className="h3 reveal">{t.metricsTitle}</h3>
          <p className="reveal mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink/65">{t.metricsNote}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.length > 0
              ? metrics.map((m) => (
                  <li key={m.label[lang]} className="reveal card !p-6">
                    <p className="font-serif text-4xl font-medium text-teal">{m.value}</p>
                    <p className="mt-2 text-sm font-semibold text-ink/80">{m.label[lang]}</p>
                    {m.note && <p className="mt-1 text-xs leading-relaxed text-ink/55">{m.note[lang]}</p>}
                  </li>
                ))
              : t.metricsPlaceholders.map((label) => (
                  <li key={label} className="reveal rounded-3xl border border-dashed border-gold/50 bg-paper-2/60 p-6">
                    <p className="font-serif text-4xl font-medium text-ink/25" aria-hidden="true">
                      —
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink/75">{label}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink/50">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.metricsEmpty}
                    </p>
                  </li>
                ))}
          </ul>
        </div>

        {/* Документы */}
        <div className="mt-16">
          <h3 className="h3 reveal">{t.documentsTitle}</h3>
          <ul className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/10 bg-white/70">
            {docs.map((d) => (
              <li key={d.label} className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
                <span className="flex items-center gap-3 font-medium">
                  <FileText className="h-5 w-5 text-teal" aria-hidden="true" />
                  {d.label}
                </span>
                {d.url ? (
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
                  >
                    {t.open}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{ui.external}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gold-ink">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {t.pendingDoc}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
