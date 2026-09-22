'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Lang } from '@/i18n/config';
import type { Content } from '@/content/types';
import { site } from '@/config/site';
import { cn } from '@/lib/cn';
import { Logo } from './Logo';
import { LangSwitch } from './LangSwitch';

const SECTION_IDS = ['about', 'sharia', 'legal', 'how', 'transparency', 'support'] as const;
type SectionId = (typeof SECTION_IDS)[number];

export function Header({ lang, content }: { lang: Lang; content: Content }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  const links: { id: Exclude<SectionId, 'support'>; label: string }[] = [
    { id: 'about', label: content.nav.about },
    { id: 'sharia', label: content.nav.sharia },
    { id: 'legal', label: content.nav.legal },
    { id: 'how', label: content.nav.how },
    { id: 'transparency', label: content.nav.transparency },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Подсветка текущего раздела в меню.
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Меню: Escape закрывает, прокрутка страницы блокируется.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled || open ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-x flex h-[4.25rem] items-center justify-between gap-4 sm:h-20">
          <a href="#top" aria-label={site.brand[lang]} className="shrink-0" onClick={() => setOpen(false)}>
            <Logo src={site.logoSrc} name={site.brand[lang]} />
          </a>

          <nav aria-label={content.ui.sectionsNav} className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-ink/10 bg-white/60 p-1.5 backdrop-blur">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={active === l.id ? 'true' : undefined}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink',
                      active === l.id && 'bg-ink text-paper hover:text-paper',
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LangSwitch lang={lang} label={content.ui.language} className="hidden sm:inline-flex" />
            <a href="#support" className="btn btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
              {content.ui.supportCta}
            </a>
            <LangSwitch lang={lang} label={content.ui.language} className="sm:hidden" />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? content.ui.closeMenu : content.ui.menu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/*
        Мобильное меню — НЕ вложено в <header>: у хедера при открытом меню
        включается backdrop-blur (backdrop-filter), а backdrop-filter/filter на
        предке создаёт новый containing block для position:fixed потомков.
        Будучи внутри <header> без явной высоты, меню растягивалось бы не на
        весь экран, а только на высоту хедера. Поэтому меню — отдельный
        fixed-элемент верхнего уровня, позиционированный от самого вьюпорта.
      */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-paper px-5 pb-10 pt-6 sm:top-20 lg:hidden"
      >
        <nav aria-label={content.ui.sectionsNav}>
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 rounded-2xl px-3 py-4 font-serif text-2xl text-ink hover:bg-ink/5"
                >
                  <span className="font-sans text-xs font-semibold tabular-nums text-gold-ink">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#support" onClick={() => setOpen(false)} className="btn btn-primary mt-8 w-full">
          {content.ui.supportCta}
        </a>
      </div>
    </>
  );
}
