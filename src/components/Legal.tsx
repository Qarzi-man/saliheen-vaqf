import { ArrowRight, ArrowUpRight, Clock, Info, Scale } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Lang } from '@/i18n/config';
import type { Content, LegalDoc } from '@/content/types';
import { getSource, sourceUrl } from '@/content/sources';
import { charterUrl } from '@/config/transparency';
import { Cite, Cited } from './Cite';
import { SectionHead } from './SectionHead';

function DocCard({
  doc,
  lang,
  content,
  href,
  alt,
  index,
}: {
  doc: LegalDoc;
  lang: Lang;
  content: Content;
  href: string | null;
  alt?: { label: string; url: string };
  index: number;
}) {
  const { legal, ui } = content;
  return (
    <article
      className="reveal card grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-12"
      style={{ '--d': `${index * 60}ms` } as CSSProperties}
    >
      <div>
        <p className="chip !border-gold/40 !text-gold-ink">{doc.badge}</p>
        <h3 className="mt-5 font-serif text-2xl font-medium leading-snug sm:text-[1.7rem]">{doc.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">{doc.meta}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-2.5 !text-sm">
              {legal.readDoc}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{ui.external}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-gold/60 px-4 py-2 text-sm font-medium text-gold-ink">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {legal.pending}
            </span>
          )}
          {alt && (
            <a
              href={alt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-5 !py-2.5 !text-sm"
            >
              {alt.label}
              <span className="sr-only">{ui.external}</span>
            </a>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{doc.regulatesTitle}</p>
        <ul className="mt-4 divide-y divide-ink/10">
          {doc.points.map((p) => (
            <li key={(p.ref ?? '') + p.text} className="grid gap-x-5 gap-y-1 py-4 first:pt-0 sm:grid-cols-[7.5rem_1fr]">
              <span className="text-[0.8rem] font-semibold tabular-nums text-gold-ink">{p.ref ?? '•'}</span>
              <span className="text-[0.96rem] leading-relaxed text-ink/80">{p.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-mist/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{doc.relationTitle}</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">
            {doc.relation}
            <Cite ids={doc.cite} label={ui.sourceWord} />
          </p>
        </div>
      </div>
    </article>
  );
}

export function Legal({ content, lang }: { content: Content; lang: Lang }) {
  const { legal, ui } = content;
  const label = ui.sourceWord;

  const civil = getSource('civil-code');
  const law = getSource('law-charity');

  return (
    <section id="legal" className="section">
      <div className="container-x">
        <SectionHead eyebrow={legal.eyebrow} title={legal.title} lead={legal.lead} />

        {/* Честное уточнение: отдельного закона о вакфе нет */}
        <div className="reveal mt-12 flex gap-4 rounded-r-3xl border-l-4 border-gold bg-gold-soft/25 p-6 sm:gap-5 sm:p-8">
          <Scale className="mt-1 h-6 w-6 shrink-0 text-gold-ink" aria-hidden="true" />
          <div>
            <h3 className="font-serif text-xl font-medium sm:text-2xl">{legal.honest.title}</h3>
            <p className="mt-3 max-w-4xl text-[0.98rem] leading-relaxed text-ink/80">
              <Cited value={legal.honest.text} label={label} />
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <DocCard
            index={0}
            doc={legal.docs.civil}
            lang={lang}
            content={content}
            href={sourceUrl(civil, lang)}
          />
          <DocCard
            index={1}
            doc={legal.docs.charity}
            lang={lang}
            content={content}
            href={sourceUrl(law, lang)}
            alt={law.alt ? { label: law.alt.label[lang], url: law.alt.url } : undefined}
          />
          <DocCard index={2} doc={legal.docs.charter} lang={lang} content={content} href={charterUrl} />
        </div>

        {/* Механизм: предпринимательская деятельность → доход → цели */}
        <div className="mt-20 sm:mt-28">
          <div className="reveal max-w-3xl">
            <h3 className="h3">{legal.mechanism.title}</h3>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">{legal.mechanism.lead}</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {legal.mechanism.steps.map((s, i) => (
              <li
                key={s.label}
                className="reveal relative flex flex-col rounded-3xl border border-ink/10 bg-white/70 p-5"
                style={{ '--d': `${i * 80}ms` } as CSSProperties}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-serif text-base text-paper">{i + 1}</span>
                <p className="mt-4 font-serif text-lg font-medium leading-snug">{s.label}</p>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-ink/60">{s.ref}</p>
                {i < legal.mechanism.steps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-[1.1rem] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-paper text-gold lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
          <div className="reveal mt-6 flex gap-3 rounded-2xl border border-ink/10 bg-paper-2 p-5 text-[0.95rem] leading-relaxed text-ink/75">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <p>
              <Cited value={legal.mechanism.note} label={label} />
            </p>
          </div>
        </div>

        {/* Термины */}
        <div className="mt-20 sm:mt-28">
          <h3 className="h3 reveal">{legal.terms.title}</h3>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {legal.terms.items.map((t, i) => (
              <div
                key={t.term}
                className="reveal rounded-3xl border border-ink/10 bg-white/70 p-6"
                style={{ '--d': `${(i % 2) * 70}ms` } as CSSProperties}
              >
                <dt className="font-serif text-xl font-medium text-teal">{t.term}</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                  {t.def}
                  <Cite ids={t.cite} label={label} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
