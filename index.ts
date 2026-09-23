import type { Lang } from '@/i18n/config';
import type { Content } from './types';
import { ru } from './ru';
import { tg } from './tg';

/**
 * Единая точка получения текстов.
 * Чтобы подключить CMS (Sanity, Strapi, Directus, Supabase и т. п.), достаточно
 * заменить тело функции: загрузить данные из CMS и вернуть объект типа `Content`.
 * Компоненты про источник данных ничего не знают.
 */
export function getContent(lang: Lang): Content {
  return lang === 'ru' ? ru : tg;
}

export type { Content } from './types';
