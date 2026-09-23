'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, Info, Quote } from 'lucide-react';
import type { Content } from '@/content/types';
import { Cite, Cited } from './Cite';
import { SectionHead } from './SectionHead';
import { cn } from '@/lib/cn';

type TabId = 'quran' | 'sunnah' | 'companions' | 'law';
const TAB_ORDER: TabId[] = ['quran', 'sunnah', 'companions', 'law'];

export function Sharia({ content }: { content: Content }) {
  const { sharia, ui } = content;
  const label = ui.sourceWord;
  const [tab, setTab] = useState<TabId>('quran');
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ quran: null, sunnah: null, companions: null, law: null });

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = TAB_ORDER.indexOf(tab);
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % TAB_ORDER.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + TAB_ORDER.length) % TAB_ORDER.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TAB_ORDER.length - 1;
    else return;
    e.preventDefault();
    setTab(TAB_ORDER[next]);
    tabRefs.current[TAB_ORDER[next]]?.focus();
  };

  return (
    <section id="sharia" className="section on-dark relative overflow-hidden bg-fixed-ink text-fixed-paper">
      <div aria-hidden="true" className="bg-star-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHead
          onDark
          eyebrow={sharia.eyebrow}
          title={sharia.title}
          lead={<Cited value={sharia.lead} label={label} />}
        />

        {/* Табы */}
        <div className="reveal mt-12 -mx-5 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label={sharia.title}
            onKeyDown={onKeyDown}
            className="inline-flex min-w-max gap-1 rounded-full border border-fixed-paper/15 bg-fixed-paper/5 p-1.5"
          >
            {TAB_ORDER.map((id) => (
              <button
                key={id}
                ref={(el) => {
                  tabRefs.current[id] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${id}`}
                aria-selected={tab === id}
                aria-controls={`panel-${id}`}
                tabIndex={tab === id ? 0 : -1}
                onClick={() => setTab(id)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-semibold transition',
                  tab === id ? 'bg-fixed-paper text-fixed-ink' : 'text-fixed-paper/70 hover:text-fixed-paper',
                )}
              >
                {sharia.tabs[id]}
              </button>
            ))}
          </div>
        </div>

        {/* Коран */}
        <div role="tabpanel" id="panel-quran" aria-labelledby="tab-quran" hidden={tab !== 'quran'} className="mt-10">
          <div className="flex gap-3 rounded-2xl border border-gold-soft/30 bg-gold-soft/10 p-5 text-[0.95rem] leading-relaxed text-fixed-paper/85">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" aria-hidden="true" />
            <p>
              <Cited value={sharia.quran.callout} label={label} />
            </p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {sharia.quran.verses.map((v) => (
              <article key={v.ref} className="flex flex-col rounded-3xl border border-fixed-paper/12 bg-fixed-paper/[0.06] p-6 sm:p-8">
                <p className="chip !border-gold-soft/30 !bg-transparent !text-gold-soft">{v.ref}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-fixed-paper/45">{sharia.meaningLabel}</p>
                <p className="mt-2 font-serif text-xl leading-relaxed text-fixed-paper sm:text-[1.4rem]">
                  {v.meaning}
                  <Cite ids={v.cite} label={label} />
                </p>
                <p className="mt-5 border-t border-fixed-paper/10 pt-5 text-[0.92rem] leading-relaxed text-fixed-paper/65">{v.note}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Сунна */}
        <div role="tabpanel" id="panel-sunnah" aria-labelledby="tab-sunnah" hidden={tab !== 'sunnah'} className="mt-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {sharia.sunnah.items.map((it) => (
              <article key={it.title} className="flex flex-col rounded-3xl border border-fixed-paper/12 bg-fixed-paper/[0.06] p-6 sm:p-7">
                <p className="chip !border-gold-soft/30 !bg-transparent !text-gold-soft">{it.ref}</p>
                <h3 className="mt-5 font-serif text-2xl font-medium leading-snug">{it.title}</h3>
                <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-fixed-paper/85">
                  <Quote className="mr-2 inline h-4 w-4 -translate-y-0.5 text-gold-soft/80" aria-hidden="true" />
                  {it.text}
                </p>
                <p className="mt-5 border-t border-fixed-paper/10 pt-5 text-[0.9rem] leading-relaxed text-fixed-paper/65">
                  <Cited value={it.note} label={label} />
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Сподвижники */}
        <div role="tabpanel" id="panel-companions" aria-labelledby="tab-companions" hidden={tab !== 'companions'} className="mt-10">
          <p className="max-w-3xl text-lg leading-relaxed text-fixed-paper/80">{sharia.companions.lead}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {sharia.companions.items.map((it) => (
              <article key={it.title} className="rounded-3xl border border-fixed-paper/12 bg-fixed-paper/[0.06] p-6 sm:p-7">
                <h3 className="font-serif text-xl font-medium leading-snug">{it.title}</h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-fixed-paper/80">{it.text}</p>
                <p className="mt-4 border-t border-fixed-paper/10 pt-4 text-[0.88rem] leading-relaxed text-fixed-paper/60">
                  <Cited value={it.note} label={label} />
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Исламское право */}
        <div role="tabpanel" id="panel-law" aria-labelledby="tab-law" hidden={tab !== 'law'} className="mt-10">
          <p className="max-w-3xl text-lg leading-relaxed text-fixed-paper/80">{sharia.law.lead}</p>
          <div className="mt-8 divide-y divide-fixed-paper/10 overflow-hidden rounded-3xl border border-fixed-paper/12 bg-fixed-paper/[0.06]">
            {sharia.law.items.map((it, i) => (
              <details key={it.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-serif text-lg font-medium leading-snug marker:hidden hover:bg-fixed-paper/5 sm:px-8 sm:text-xl [&::-webkit-details-marker]:hidden">
                  {it.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold-soft transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-6 pb-6 text-[0.98rem] leading-relaxed text-fixed-paper/80 sm:px-8">
                  {it.a}
                  <Cite ids={it.cite} label={label} />
                </p>
              </details>
            ))}
          </div>

          <h3 className="mt-16 font-serif text-2xl font-medium sm:text-3xl">{sharia.law.differencesTitle}</h3>
          <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-fixed-paper/70">{sharia.law.differencesLead}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sharia.law.differences.map((d) => (
              <article key={d.title} className="rounded-3xl border border-gold-soft/25 bg-gold-soft/[0.07] p-6 sm:p-7">
                <h4 className="font-serif text-xl font-medium text-gold-soft">{d.title}</h4>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-fixed-paper/80">
                  {d.text}
                  <Cite ids={d.cite} label={label} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
