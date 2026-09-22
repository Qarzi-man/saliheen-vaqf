'use client';

import { useEffect, useState } from 'react';
import { Check, Link2, MessageCircle, Send, Share2, Facebook } from 'lucide-react';
import type { Lang } from '@/i18n/config';
import { langPath } from '@/i18n/config';
import type { Content } from '@/content/types';
import { site } from '@/config/site';
import { XGlyph } from './icons';

export function Share({ content, lang }: { content: Content; lang: Lang }) {
  const { share, meta } = content;
  const [url, setUrl] = useState(`${site.url}${langPath(lang)}`);
  const [canNative, setCanNative] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(`${window.location.origin}${langPath(lang)}`);
    setCanNative(typeof navigator.share === 'function');
  }, [lang]);

  const enc = encodeURIComponent;
  const text = meta.shareText;
  const links = [
    { id: 'telegram', label: share.telegram, href: `https://t.me/share/url?url=${enc(url)}&text=${enc(text)}`, Icon: Send },
    { id: 'whatsapp', label: share.whatsapp, href: `https://wa.me/?text=${enc(`${text} ${url}`)}`, Icon: MessageCircle },
    { id: 'facebook', label: share.facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, Icon: Facebook },
    { id: 'x', label: share.x, href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`, Icon: XGlyph },
  ] as const;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title: meta.title, text, url });
    } catch {
      /* пользователь закрыл окно — это нормально */
    }
  }

  const pill =
    'inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft';

  return (
    <section id="share" className="section bg-paper-2 !py-16 sm:!py-20">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="h2 !text-[1.9rem] sm:!text-4xl">{share.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ink/70">{share.text}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {canNative && (
              <button type="button" onClick={nativeShare} className="btn btn-primary">
                <Share2 className="h-4 w-4" aria-hidden="true" />
                {share.native}
              </button>
            )}
            {links.map(({ id, label, href, Icon }) => (
              <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={pill} aria-label={`${share.shareVia} ${label}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
            <button type="button" onClick={copy} className={pill}>
              {copied ? <Check className="h-4 w-4 text-teal" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
              {copied ? share.copied : share.copyLink}
            </button>
          </div>
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={copied ? 'toast-in fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-2xl sm:bottom-8' : 'sr-only'}
      >
        {copied ? share.copied : ''}
      </div>
    </section>
  );
}
