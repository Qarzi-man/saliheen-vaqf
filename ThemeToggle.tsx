'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/cn';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

/**
 * Переключатель светлой/тёмной темы. Сама тема хранится как атрибут
 * data-theme на <html> (см. инлайн-скрипт в layout.tsx — он выставляет его
 * ещё до первой отрисовки, чтобы не было мигания неверной темой) и в
 * localStorage, чтобы выбор запоминался между визитами.
 */
export function ThemeToggle({ labelDark, labelLight, className }: { labelDark: string; labelLight: string; className?: string }) {
  // На сервере тема неизвестна — рисуем нейтрально до маунта, затем считываем реальную.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function toggle() {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem('theme', next);
    } catch {
      /* localStorage недоступен (приватный режим и т. п.) — тема просто не запомнится между визитами */
    }
    setTheme(next);
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? labelLight : labelDark}
      title={isDark ? labelLight : labelDark}
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-gold/50 hover:text-gold-ink',
        className,
      )}
    >
      {/* До маунта показываем солнце (по умолчанию светлая тема) — избегаем мигания иконки при гидратации. */}
      {isDark ? <Sun className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" /> : <Moon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />}
    </button>
  );
}
