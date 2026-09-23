import { ArrowUp, Mail, MapPin } from 'lucide-react';
import type { Lang } from '@/i18n/config';
import type { Content } from '@/content/types';
import { site, mainSiteUrl } from '@/config/site';
import { Logo } from './Logo';

export function Footer({ content, lang }: { content: Content; lang: Lang }) {
  const { footer, nav, ui } = content;
  const year = new Date().getFullYear();

  const links = [
    { id: 'about', label: nav.about },
    { id: 'sharia', label: nav.sharia },
    { id: 'legal', label: nav.legal },
    { id: 'how', label: nav.how },
    { id: 'transparency', label: nav.transparency },
    { id: 'support', label: nav.support },
  ];

  return (
    <footer className="on-dark relative bg-fixed-ink pb-28 pt-16 text-fixed-paper sm:pb-12">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="inline-flex rounded-2xl bg-fixed-paper px-4 py-2.5">
              <Logo src={site.logoSrc} name={site.brand[lang]} tone="fixed-dark" />
            </span>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-fixed-paper/70">{footer.about}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fixed-paper/50">
              {site.orgName[lang]}
              <br />
              РМА №{site.inn}
            </p>
          </div>

          <nav aria-label={ui.sectionsNav}>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-[0.95rem] text-fixed-paper/75 transition hover:text-gold-soft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fixed-paper/45">{footer.contacts}</p>
            <ul className="mt-4 space-y-3 text-[0.95rem] text-fixed-paper/75">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-soft">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                {site.address}
              </li>
            </ul>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-fixed-paper/45">{footer.social}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-fixed-paper/20 px-3.5 py-1.5 text-sm text-fixed-paper/80 transition hover:border-gold-soft hover:text-gold-soft"
                  >
                    {s.label}
                    <span className="sr-only">{ui.external}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-fixed-paper/10 pt-6 text-sm text-fixed-paper/50">
          <p>
            © {year} {site.orgName[lang]}. {footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <a href={mainSiteUrl(lang)} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
              {footer.mainSite}
              <span className="sr-only">{ui.external}</span>
            </a>
            <a href="#top" className="inline-flex items-center gap-1.5 hover:text-gold-soft">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              {ui.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
