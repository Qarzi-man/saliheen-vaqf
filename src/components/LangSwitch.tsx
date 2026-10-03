'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { langPath, languageNames, locales, otherLangs, type Lang } from '@/i18n/config';
import { asset } from '@/lib/assets';
import { cn } from '@/lib/cn';

/** Переключатель языка (3 варианта): выпадающий список, сохраняет текущий раздел страницы (#hash). */
export function LangSwitch({ lang, label, className }: { lang: Lang; label: string; className?: string }) {
  const [hash, setHash] = useState('');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-ink/15 px-4 text-sm font-semibold text-ink/80 transition hover:border-ink/30 hover:bg-ink/5"
      >
        {languageNames[lang]}
        <ChevronDown className={cn('h-3.5 w-3.5 transition', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-full z-50 mt-2 min-w-[9rem] overflow-hidden rounded-2xl border border-ink/10 bg-paper py-1.5 shadow-lift"
        >
          {locales.map((l) => (
            <li key={l}>
              <a
                href={`${asset(langPath(l))}${hash}`}
                role="option"
                aria-selected={l === lang}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition hover:bg-ink/5',
                  l === lang ? 'font-semibold text-ink' : 'text-ink/70',
                )}
              >
                {languageNames[l]}
                {l === lang && <Check className="h-3.5 w-3.5 text-teal" aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
