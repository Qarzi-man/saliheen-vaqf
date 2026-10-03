import type { Lang } from '@/i18n/config';
import type { Content } from './types';
import { en } from './en';
import { ru } from './ru';
import { tg } from './tg';

/**
 * Единая точка получения текстов.
 * Чтобы подключить CMS (Sanity, Strapi, Directus, Supabase и т. п.), достаточно
 * заменить тело функции: загрузить данные из CMS и вернуть объект типа `Content`.
 * Компоненты про источник данных ничего не знают.
 */
export function getContent(lang: Lang): Content {
  if (lang === 'ru') return ru;
  if (lang === 'en') return en;
  return tg;
}

export type { Content } from './types';
