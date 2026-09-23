import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { urlSegment } from '@/i18n/config';

// Нужно явно для статического экспорта (GitHub Pages и т. п.) — иначе Next.js
// считает этот файл динамическим из-за обращения к process.env внутри site.url.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    tg: `${site.url}/${urlSegment.tg}`,
    ru: `${site.url}/${urlSegment.ru}`,
  };
  return [
    { url: languages.tg, changeFrequency: 'monthly', priority: 1, alternates: { languages } },
    { url: languages.ru, changeFrequency: 'monthly', priority: 1, alternates: { languages } },
  ];
}
