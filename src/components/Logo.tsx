'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/** Восьмиконечная звезда — тихий геометрический знак (используется, если логотип недоступен). */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <rect x="9" y="9" width="22" height="22" rx="1.5" />
        <rect x="9" y="9" width="22" height="22" rx="1.5" transform="rotate(45 20 20)" />
      </g>
      <circle cx="20" cy="20" r="3.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Логотип организации. Пробует загрузить изображение (см. site.logoSrc),
 * а если его нет или оно не загрузилось — показывает текстовую метку со знаком.
 */
export function Logo({
  src,
  name,
  className,
  imgClassName,
  tone = 'dark',
}: {
  src: string | null;
  name: string;
  className?: string;
  imgClassName?: string;
  /** 'fixed-*' — не переключается темой; для мест, где фон вокруг логотипа сам не меняется (напр. светлая плашка в подвале). */
  tone?: 'dark' | 'light' | 'fixed-dark' | 'fixed-light';
}) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);

  // Если картинка упала ещё до гидратации, onError не сработает — проверяем вручную.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (!failed && src) {
    return (
      <span className="inline-flex overflow-hidden rounded-xl shadow-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className={cn('h-9 w-auto sm:h-10', imgClassName)}
          decoding="async"
        />
      </span>
    );
  }

  const light = tone === 'light' || tone === 'fixed-light';
  const textTone = tone === 'fixed-light' ? 'text-fixed-paper' : tone === 'fixed-dark' ? 'text-fixed-ink' : light ? 'text-paper' : 'text-ink';

  return (
    <span className={cn('inline-flex items-center gap-2.5', textTone, className)}>
      <StarMark className={cn('h-8 w-8 sm:h-9 sm:w-9', light ? 'text-gold-soft' : 'text-teal')} />
      <span className="font-serif text-[1.35rem] font-semibold leading-none tracking-tight sm:text-2xl">{name}</span>
    </span>
  );
}
