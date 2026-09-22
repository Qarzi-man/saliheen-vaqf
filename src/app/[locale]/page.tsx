import { notFound } from 'next/navigation';
import { langFromSegment, langPath } from '@/i18n/config';
import { getContent } from '@/content';
import { site } from '@/config/site';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { How } from '@/components/How';
import { Legal } from '@/components/Legal';
import { Share } from '@/components/Share';
import { Sharia } from '@/components/Sharia';
import { StickyCta } from '@/components/StickyCta';
import { Support } from '@/components/Support';
import { Transparency } from '@/components/Transparency';
import { Why } from '@/components/Why';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = langFromSegment(locale);
  if (!lang) notFound();

  const content = getContent(lang);

  // Структурированные данные: только подтверждённые сведения об организации.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site.url}${langPath(lang)}#page`,
        url: `${site.url}${langPath(lang)}`,
        name: content.meta.title,
        description: content.meta.description,
        inLanguage: lang,
        isPartOf: { '@id': `${site.mainSite}#org` },
      },
      {
        '@type': 'Organization',
        '@id': `${site.mainSite}#org`,
        name: site.orgName[lang],
        alternateName: site.brand[lang],
        url: site.mainSite,
        email: site.email,
        address: { '@type': 'PostalAddress', streetAddress: site.address, addressCountry: 'TJ' },
        sameAs: site.socials.map((s) => s.url),
      },
    ],
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {content.ui.skip}
      </a>
      <Header lang={lang} content={content} />
      <main id="main">
        <Hero content={content} />
        <About content={content} />
        <Why content={content} lang={lang} />
        <Sharia content={content} />
        <Legal content={content} lang={lang} />
        <How content={content} />
        <Transparency content={content} lang={lang} />
        <Support content={content} lang={lang} />
        <Share content={content} lang={lang} />
      </main>
      <Footer content={content} lang={lang} />
      <StickyCta label={content.ui.supportCta} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
