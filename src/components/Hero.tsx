import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { Content } from '@/content/types';
import { TreeIllustration } from './TreeIllustration';

export function Hero({ content }: { content: Content }) {
  const { hero, ui } = content;
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
      {/* тихий геометрический фон */}
      <div
        aria-hidden="true"
        className="bg-star-light pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_60%_at_75%_35%,#000,transparent)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="chip reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {hero.eyebrow}
          </p>

          <h1 className="reveal mt-7 font-serif" style={{ '--d': '80ms' } as React.CSSProperties}>
            <span className="block text-[clamp(1.4rem,3.6vw,2rem)] font-semibold tracking-[0.28em] text-teal">{hero.titleLead}</span>
            <span className="mt-3 block text-[clamp(2.5rem,7.4vw,4.75rem)] font-medium leading-[1.02] tracking-tight text-ink">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="lead reveal mt-8 max-w-xl" style={{ '--d': '160ms' } as React.CSSProperties}>
            {hero.lead}
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-3" style={{ '--d': '240ms' } as React.CSSProperties}>
            <a href="#support" className="btn btn-primary">
              {ui.supportCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="btn btn-ghost">
              {ui.learnMore}
            </a>
          </div>

          <div className="reveal mt-12 max-w-xl" style={{ '--d': '320ms' } as React.CSSProperties}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">{hero.pathTitle}</p>
            <ol className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {hero.path.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-[0.95rem] text-ink/80">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-paper/70 text-xs font-semibold tabular-nums text-gold-ink">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <p className="reveal mt-10 flex items-start gap-2.5 text-sm text-ink/60" style={{ '--d': '400ms' } as React.CSSProperties}>
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            {hero.byline}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-[3rem] border border-gold/30"
          />
          <div className="aspect-[480/560] overflow-hidden rounded-[2.5rem] border border-ink/10 shadow-lift">
            <TreeIllustration label={hero.illustrationLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
