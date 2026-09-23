import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/onest';
import '@fontsource-variable/source-serif-4';
import '../globals.css';
import { langFromSegment, ogLocale, otherLang, urlSegment, urlSegments } from '@/i18n/config';
import { getContent } from '@/content';
import { site } from '@/config/site';
import { ScrollEffects } from '@/components/ScrollEffects';

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return urlSegments.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = langFromSegment(locale);
  if (!lang) return {};
  const c = getContent(lang);
  const canonical = `/${urlSegment[lang]}`;
  const image = `/og/og-${lang}.png`;

  return {
    metadataBase: new URL(site.url),
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    applicationName: site.brand[lang],
    alternates: {
      canonical,
      languages: { tg: `/${urlSegment.tg}`, ru: `/${urlSegment.ru}`, 'x-default': `/${urlSegment.tg}` },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: site.brand[lang],
      title: c.meta.title,
      description: c.meta.description,
      locale: ogLocale[lang],
      alternateLocale: [ogLocale[otherLang(lang)]],
      images: [{ url: image, width: 1200, height: 630, alt: c.meta.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.title,
      description: c.meta.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F0',
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = langFromSegment(locale) ?? 'tg';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Включает анимации появления только при работающем JS (иначе всё видно сразу). */}
        {/*
          Тема выставляется здесь, до первой отрисовки: если сделать это в
          React-компоненте (после гидратации), будет заметное мигание светлой
          темой перед переключением на сохранённую тёмную. Порядок: сохранённый
          выбор в localStorage → иначе системная настройка prefers-color-scheme.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}",
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
