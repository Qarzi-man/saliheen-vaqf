import type { Lang } from '@/i18n/config';
import { mainSiteUrl } from '@/config/site';

/**
 * Данные блока «Прозрачность».
 *
 * Ссылки ниже реальные (страницы существующего сайта). Числовые показатели НЕ выдумываются:
 * пока `metrics` пуст, на странице показываются аккуратные заглушки. Когда появятся
 * подтверждённые данные — добавьте их сюда, например:
 *   { label: { tg: '…', ru: 'Объекты Вакфа', en: '…' }, value: '3', note: { tg: '…', ru: '…', en: '…' } }
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
    title: { tg: 'Ҳисоботҳо', ru: 'Отчёты', en: 'Reports' },
    text: {
      tg: 'Ҳисоботҳои молиявӣ ва фаъолияти Салиҳин дар сомонаи расмӣ.',
      ru: 'Финансовые отчёты и отчёты о деятельности Салихин на официальном сайте.',
      en: "Saliheen's financial and activity reports on the official website.",
    },
    href: (lang) => mainSiteUrl(lang, '/reports'),
  },
  {
    id: 'projects',
    title: { tg: 'Лоиҳаҳо', ru: 'Проекты', en: 'Projects' },
    text: {
      tg: 'Ҳамаи лоиҳаҳои амалкунандаи ташкилот бо тавсифи муфассал.',
      ru: 'Все действующие проекты организации с подробным описанием.',
      en: "All of the organization's active projects, with detailed descriptions.",
    },
    href: (lang) => mainSiteUrl(lang, '/projects'),
  },
  {
    id: 'stories',
    title: { tg: 'Ҳикояҳо', ru: 'Истории', en: 'Stories' },
    text: {
      tg: 'Ҳикояҳои воқеӣ аз хонаҳое, ки кумак ба онҳо расидааст.',
      ru: 'Реальные истории семей, до которых дошла помощь.',
      en: 'Real stories of families the help has reached.',
    },
    href: (lang) => mainSiteUrl(lang, '/stories'),
  },
  {
    id: 'about',
    title: { tg: 'Дар бораи ташкилот', ru: 'Об организации', en: 'About the organization' },
    text: {
      tg: 'Қисса, дурнамо, рисолат ва арзишҳои Салиҳин (PDF).',
      ru: 'История, видение, миссия и ценности Салихин (PDF).',
      en: "Saliheen's story, vision, mission and values (PDF).",
    },
    href: () => 'https://saliheen.tj/about-saliheen.pdf',
  },
];
