import { ChevronDown } from 'lucide-react';
import type { Content } from '@/content/types';
import { Cite } from './Cite';
import { SectionHead } from './SectionHead';

/** Саволҳои маъмулӣ оиди Вақф — отдельный раздел (бывшая вкладка «Ҳуқуқи ислом» внутри Sharia). */
export function FAQ({ content }: { content: Content }) {
  const { faq, ui } = content;

  return (
    <section id="faq" className="section bg-mist/70">
      <div className="container-x">
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} lead={faq.lead} />

        <div className="mt-12 divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/10 bg-paper/80">
          {faq.items.map((it, i) => (
            <details key={it.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-serif text-lg font-medium leading-snug marker:hidden hover:bg-ink/5 sm:px-8 sm:text-xl [&::-webkit-details-marker]:hidden">
                {it.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold-ink transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-6 pb-6 text-[0.98rem] leading-relaxed text-ink/75 sm:px-8">
                {it.a}
                <Cite ids={it.cite} label={ui.sourceWord} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
