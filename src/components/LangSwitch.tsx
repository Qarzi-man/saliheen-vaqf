'use client';

import { useEffect, useState } from 'react';
import { langPath, languageNames, otherLang, type Lang } from '@/i18n/config';
import { cn } from '@/lib/cn';

/** Переключатель языка: сохраняет текущий раздел страницы (#hash). */
export function LangSwitch({ lang, label, className }: { lang: Lang; label: string; className?: string }) {
  const [hash, setHash] = useState('');
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const target = otherLang(lang);
  return (
    <a
      href={`${langPath(target)}${hash}`}
      hrefLang={target === 'tg' ? 'tg' : 'ru'}
      lang={target === 'tg' ? 'tg' : 'ru'}
      aria-label={`${label}: ${languageNames[target]}`}
      className={cn(
        'inline-flex h-10 items-center rounded-full border border-ink/15 px-4 text-sm font-semibold text-ink/80 transition hover:border-ink/30 hover:bg-ink/5',
        className,
      )}
    >
      {languageNames[target]}
    </a>
  );
}
