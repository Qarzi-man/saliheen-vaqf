import type { Lang } from '@/i18n/config';
import { mainSiteUrl } from '@/config/site';

/**
 * Данные блока «Прозрачность».
 *
 * Ссылки ниже реальные (страницы существующего сайта). Числовые показатели НЕ выдумываются:
 * пока `metrics` пуст, на странице показываются аккуратные заглушки. Когда появятся
 * подтверждённые данные — добавьте их сюда, например:
 *   { label: { tg: 'Объектҳо', ru: 'Объекты Вакфа' }, value: '3', note: { tg: '…', ru: '…' } }
 */
export interface Metric {
  label: Record<Lang, string>;
  value: string;
  note?: Record<Lang, string>;
}

export const metrics: Metric[] = [];

export interface DocLink {
  id: string;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  href: (lang: Lang) => string;
}

export const transparencyLinks: DocLink[] = [
  {
    id: 'reports',
    title: { tg: 'Ҳисоботҳо', ru: 'Отчёты' },
    text: {
      tg: 'Ҳисоботҳои молиявӣ ва фаъолияти Салиҳин дар сомонаи расмӣ.',
      ru: 'Финансовые отчёты и отчёты о деятельности Салихин на официальном сайте.',
    },
    href: (lang) => mainSiteUrl(lang, '/reports'),
  },
  {
    id: 'projects',
    title: { tg: 'Лоиҳаҳо', ru: 'Проекты' },
    text: {
      tg: 'Ҳамаи лоиҳаҳои амалкунандаи ташкилот бо тавсифи муфассал.',
      ru: 'Все действующие проекты организации с подробным описанием.',
    },
    href: (lang) => mainSiteUrl(lang, '/projects'),
  },
  {
    id: 'stories',
    title: { tg: 'Ҳикояҳо', ru: 'Истории' },
    text: {
      tg: 'Ҳикояҳои воқеӣ аз хонаҳое, ки кумак ба онҳо расидааст.',
      ru: 'Реальные истории семей, до которых дошла помощь.',
    },
    href: (lang) => mainSiteUrl(lang, '/stories'),
  },
  {
    id: 'about',
    title: { tg: 'Дар бораи ташкилот', ru: 'Об организации' },
    text: {
      tg: 'Қисса, дурнамо, рисолат ва арзишҳои Салиҳин (PDF).',
      ru: 'История, видение, миссия и ценности Салихин (PDF).',
    },
    href: () => 'https://saliheen.tj/about-saliheen.pdf',
  },
];

/**
 * Документы Вакфа (Устав, положение о Вакфе и т.п.).
 * Добавьте сюда ссылки — они появятся в блоке «Правовая основа» и «Прозрачность».
 */
export const charterUrl: string | null = null;
export const vaqfTermsUrl: string | null = null;
