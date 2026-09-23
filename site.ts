import type { Lang } from '@/i18n/config';
import { asset } from '@/lib/assets';

/**
 * Общие данные о сайте и организации.
 * Значения сверены с официальным сайтом https://saliheen.tj (подвал главной страницы) в сентябре 2026 г.
 */
export const site = {
  /** Публичный адрес ЭТОГО сайта (для Open Graph / sitemap). Задаётся в .env → NEXT_PUBLIC_SITE_URL */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://saliheen.tj').replace(/\/$/, ''),

  /** Основной сайт организации */
  mainSite: 'https://saliheen.tj',

  /** РМА № (на официальном сайте указан в подвале) */
  inn: '010106816',
  email: 'info@saliheen.tj',
  address: 'ш. Душанбе, к. М. Қурбонов 8',

  /** Логотип организации. Если файла нет/не загрузился — компонент Logo покажет текстовую метку вместо него. */
  logoSrc: asset('/logo.png') as string | null,

  orgName: {
    tg: 'Ташкилоти ҷамъиятии байналмилалии хайриявии «Салиҳин»',
    ru: 'Международная общественная благотворительная организация «Салихин»',
  } satisfies Record<Lang, string>,

  brand: {
    tg: 'Салиҳин',
    ru: 'Салихин',
  } satisfies Record<Lang, string>,

  socials: [
    { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/saliheenofficial' },
    { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@saliheenofficial' },
    { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/saliheenofficial' },
    { id: 'telegram', label: 'Telegram', url: 'https://t.me/saliheenofficial' },
    { id: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@saliheenofficial' },
  ],
} as const;

/**
 * Ссылка на страницу основного сайта.
 * На saliheen.tj таджикская версия живёт по адресу /tj, русская — /ru
 * (например, /tj/donate и /ru/donate).
 */
export function mainSiteUrl(lang: Lang, path = ''): string {
  const seg = lang === 'ru' ? 'ru' : 'tj';
  return `${site.mainSite}/${seg}${path}`;
}
