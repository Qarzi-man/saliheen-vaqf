"use client";

import { useState } from 'react';
import { ArrowUpRight, Check, Lock, QrCode, Smartphone } from 'lucide-react';
import type { Lang } from '@/i18n/config';
import type { Content } from '@/content/types';
import { officialDonateUrl, paymentMethods, type PaymentMethodId } from '@/config/payment';
import { Cited } from './Cite';
import { SectionHead } from './SectionHead';
import { cn } from '@/lib/cn';

const methodIcons = { qr: QrCode, 'alif-mobi': Smartphone } as const;

export function Support({ content, lang }: { content: Content; lang: Lang }) {
  const { support, ui } = content;
  const [activeId, setActiveId] = useState<PaymentMethodId>(paymentMethods[0].id);

  const method = paymentMethods.find((m) => m.id === activeId) ?? paymentMethods[0];

  return (
    <section id="support" className="section on-dark relative overflow-hidden bg-teal text-fixed-paper">
      <div aria-hidden="true" className="bg-star-dark pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(80%_70%_at_20%_20%,#000,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gold/25 blur-3xl" />

      <div className="container-x relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHead onDark eyebrow={support.eyebrow} title={support.title} lead={<Cited value={support.lead} label={ui.sourceWord} />} />

          <div className="reveal mt-10">
            <p id="method-label" className="text-xs font-semibold uppercase tracking-[0.18em] text-fixed-paper/55">
              {support.chooseLabel}
            </p>
            <div role="radiogroup" aria-labelledby="method-label" className="mt-4 grid gap-3">
              {paymentMethods.map((m) => {
                const Icon = methodIcons[m.id];
                const active = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setActiveId(m.id)}
                    className={cn(
                      'flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition',
                      active
                        ? 'border-gold-soft bg-paper text-ink shadow-lift'
                        : 'border-fixed-paper/20 bg-fixed-paper/5 text-fixed-paper hover:border-fixed-paper/40 hover:bg-fixed-paper/10',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                        active ? 'bg-teal text-fixed-paper' : 'bg-fixed-paper/10 text-gold-soft',
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold">{m.label[lang]}</span>
                      <span className={cn('block text-sm', active ? 'text-ink/60' : 'text-fixed-paper/60')}>{m.hint[lang]}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'flex h-5 w-5 items-center justify-center rounded-full border',
                        active ? 'border-teal bg-teal text-fixed-paper' : 'border-fixed-paper/35',
                      )}
                    >
                      {active && <Check className="h-3 w-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="reveal mt-8 flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-fixed-paper/70">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
            {support.secureNote}
          </p>
        </div>

        {/* Панель выбранного способа */}
        <div className="reveal self-start rounded-[2rem] border border-fixed-paper/15 bg-paper p-6 text-ink shadow-lift sm:p-9" style={{ '--d': '120ms' } as React.CSSProperties}>
          <div aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">{method.label[lang]}</p>
            <p className="mt-2 font-serif text-2xl font-medium leading-snug">{method.hint[lang]}</p>

            {method.kind === 'qr' && (
              <div className="mt-6">
                {/* bg-white намеренно фиксированный: под QR нужен буквально белый фон для надёжного сканирования */}
                <div className="mx-auto w-full max-w-[16rem] overflow-hidden rounded-2xl border border-ink/10 bg-white p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={method.qrImage} alt={method.label[lang]} className="h-auto w-full" />
                </div>
                <p className="mt-3 text-center text-sm text-ink/60">{support.qrCaption}</p>
                <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">{support.qrAppsNote}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {method.apps.map((app) => (
                    <span key={app} className="chip !bg-mist/70">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {method.kind === 'link' && (
              <div className="mt-6">
                <a href={method.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  {method.cta[lang]}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">{ui.external}</span>
                </a>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{support.stepsTitle}</p>
                  <ol className="mt-3 space-y-2.5">
                    {method.steps[lang].map((s, i) => (
                      <li key={s} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/80">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist text-xs font-semibold text-teal">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            <a href={officialDonateUrl(lang)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-7 w-full">
              {support.openOfficial}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{ui.external}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
