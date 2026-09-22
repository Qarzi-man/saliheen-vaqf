'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

/** Плавающая кнопка «Поддержать» на телефонах: появляется после первого экрана и прячется у блока оплаты. */
export function StickyCta({ label }: { label: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [atSupport, setAtSupport] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const target = document.getElementById('support');
    let io: IntersectionObserver | undefined;
    if (target && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => setAtSupport(entry.isIntersecting), { threshold: 0.15 });
      io.observe(target);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  const visible = pastHero && !atSupport;
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 transition duration-300 sm:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <a
        href="#support"
        tabIndex={visible ? 0 : -1}
        className="btn btn-primary w-full !py-4 shadow-2xl shadow-ink/30"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
