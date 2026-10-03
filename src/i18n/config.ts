/**
 * Языки сайта.
 * Внутренний код таджикского — "tg" (ISO 639-1, его же ждут <html lang> и hreflang),
 * а в адресе — "tj", как на saliheen.tj:  /tj, /ru, /en.
 * Таджикский — основной (эталонный) язык: все остальные версии переводятся с него.
 */
export const locales = ['tg', 'ru', 'en'] as const;
export type Lang = (typeof locales)[number];

export const defaultLocale: Lang = 'tg';

/** Сегмент адреса для каждого языка. */
export const urlSegment: Record<Lang, string> = { tg: 'tj', ru: 'ru', en: 'en' };
export const urlSegments = Object.values(urlSegment);

/** Локаль для Open Graph. */
export const ogLocale: Record<Lang, string> = { tg: 'tg_TJ', ru: 'ru_RU', en: 'en_US' };

export const languageNames: Record<Lang, string> = {
  tg: 'Тоҷикӣ',
  ru: 'Русский',
  en: 'English',
};

/** Из сегмента адреса ("tj" | "ru" | "en") получить язык; для неизвестного значения — null. */
export function langFromSegment(segment: string): Lang | null {
  const found = (Object.entries(urlSegment) as [Lang, string][]).find(([, s]) => s === segment);
  return found ? found[0] : null;
}

/** Публичный путь страницы: /tj, /ru или /en. */
export const langPath = (lang: Lang): string => `/${urlSegment[lang]}`;

/** Остальные языки, кроме текущего — для переключателя (порядок фиксирован: tg → ru → en). */
export function otherLangs(lang: Lang): Lang[] {
  return locales.filter((l) => l !== lang);
}
