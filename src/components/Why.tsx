import { ArrowUpRight, Hourglass, Sparkles } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Lang } from '@/i18n/config';
import type { Content } from '@/content/types';
import { allProjectsUrl, projects, projectUrl, vaqfDirections } from '@/config/projects';
import { Cite, Cited } from './Cite';
import { SectionHead } from './SectionHead';
import { projectIcons } from './icons';

export function Why({ content, lang }: { content: Content; lang: Lang }) {
  const { why, ui } = content;
  const label = ui.sourceWord;

  return (
    <section id="why" className="section bg-paper-2">
      <div className="container-x">
        <SectionHead eyebrow={why.eyebrow} title={why.title} lead={<Cited value={why.lead} label={label} />} />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {why.benefits.map((b, i) => (
            <li
              key={b.title}
              className="reveal rounded-3xl border border-ink/10 bg-paper p-6"
              style={{ '--d': `${(i % 3) * 80}ms` } as CSSProperties}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-soft/60 text-gold-ink">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium">{b.title}</h3>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-ink/70">
                {b.text}
                <Cite ids={b.cite} label={label} />
              </p>
            </li>
          ))}
        </ul>

        {/* Проекты Салихин */}
        <div className="mt-20">
          <div className="reveal max-w-3xl">
            <h3 className="h3">{why.projectsTitle}</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/70">{why.projectsLead}</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => {
              const Icon = projectIcons[p.icon];
              return (
                <li key={p.slug} className="reveal" style={{ '--d': `${(i % 4) * 70}ms` } as CSSProperties}>
                  <a
                    href={projectUrl(lang, p.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-teal transition group-hover:bg-teal group-hover:text-paper">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 font-serif text-lg font-medium leading-snug">{p.name[lang]}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{p.blurb[lang]}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                      {why.viewProject}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      <span className="sr-only">{ui.external}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-6">
            <a
              href={allProjectsUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal underline-offset-4 hover:underline"
            >
              {why.allProjects}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{ui.external}</span>
            </a>
          </p>
        </div>

        {/* Направления Вакфа: показываем только подтверждённые организацией */}
        <div className="mt-20">
          <h3 className="h3 reveal">{why.directionsTitle}</h3>
          {vaqfDirections.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vaqfDirections.map((d) => {
                const Icon = projectIcons[d.icon];
                return (
                  <li key={d.title[lang]} className="reveal card">
                    <Icon className="h-6 w-6 text-teal" aria-hidden="true" />
                    <h4 className="mt-4 font-serif text-xl font-medium">{d.title[lang]}</h4>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">{d.text[lang]}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="reveal mt-8 flex flex-col gap-4 rounded-3xl border border-dashed border-gold/60 bg-paper p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft/60 text-gold-ink">
                <Hourglass className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-xl font-medium">{why.placeholderTitle}</p>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink/70">{why.placeholderText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
