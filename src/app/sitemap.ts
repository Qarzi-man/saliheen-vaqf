import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { urlSegment } from '@/i18n/config';

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
