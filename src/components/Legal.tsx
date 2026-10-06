import { ArrowUpRight, Clock } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Lang } from '@/i18n/config';
import type { Content, LegalDoc } from '@/content/types';
import { getSource, sourceUrl } from '@/content/sources';
import { Cite } from './Cite';
import { SectionHead } from './SectionHead';

function DocCard({
  doc,
  lang: _lang,
  content,
  href,
  index,
}: {
  doc: LegalDoc;
  lang: Lang;
  content: Content;
  href: string | null;
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
  const { legal } = content;

  const law = getSource('law-charity');

  return (
    <section id="legal" className="section">
      <div className="container-x">
        <SectionHead eyebrow={legal.eyebrow} title={legal.title} lead={legal.lead} />

        <div className="mt-10">
          <DocCard index={0} doc={legal.docs.charity} lang={lang} content={content} href={sourceUrl(law, lang)} />
        </div>

        {/* Механизм: предпринимательская деятельность → доход → цели */}
        <div className="mt-16 sm:mt-20">
          <div className="reveal max-w-3xl">
            <h3 className="h3">{legal.mechanism.title}</h3>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">{legal.mechanism.lead}</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {legal.mechanism.steps.map((s, i) => (
              <li
                key={s.label}
                className="reveal relative flex flex-col rounded-3xl border border-ink/10 bg-paper/70 p-5"
                style={{ '--d': `${i * 80}ms` } as CSSProperties}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-serif text-base text-paper">{i + 1}</span>
                <p className="mt-4 font-serif text-lg font-medium leading-snug">{s.label}</p>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-ink/60">{s.ref}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
