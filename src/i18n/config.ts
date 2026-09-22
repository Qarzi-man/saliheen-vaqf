/**
 * Языки сайта.
 * Внутренний код таджикского — "tg" (ISO 639-1, его же ждут <html lang> и hreflang),
 * а в адресе — "tj", как на saliheen.tj:  /tj  и  /ru.
 */
export const locales = ['tg', 'ru'] as const;
export type Lang = (typeof locales)[number];

export const defaultLocale: Lang = 'tg';

/** Сегмент адреса для каждого языка (совпадает с saliheen.tj). */
export const urlSegment: Record<Lang, string> = { tg: 'tj', ru: 'ru' };
export const urlSegments = Object.values(urlSegment);

/** Локаль для Open Graph. */
export const ogLocale: Record<Lang, string> = { tg: 'tg_TJ', ru: 'ru_RU' };

export const languageNames: Record<Lang, string> = {
  tg: 'Тоҷикӣ',
  ru: 'Русский',
};

/** Из сегмента адреса ("tj" | "ru") получить язык; для неизвестного значения — null. */
export function langFromSegment(segment: string): Lang | null {
  const found = (Object.entries(urlSegment) as [Lang, string][]).find(([, s]) => s === segment);
  return found ? found[0] : null;
}

/** Публичный путь страницы: /tj или /ru. */
export const langPath = (lang: Lang): string => `/${urlSegment[lang]}`;

export const otherLang = (lang: Lang): Lang => (lang === 'tg' ? 'ru' : 'tg');
