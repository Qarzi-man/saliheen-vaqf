import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Нужно явно для статического экспорта (GitHub Pages и т. п.) — иначе Next.js
// считает этот файл динамическим из-за обращения к process.env внутри site.url.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
