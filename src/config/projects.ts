import type { Lang } from '@/i18n/config';

import { mainSiteUrl } from '@/config/site';

/**
 * Проекты Салихин, которые уже реализуются на официальном сайте (saliheen.tj/ru/projects).
 * Здесь выбраны проекты, связанные с инфраструктурой и социальной сферой (вода, здоровье, образование,
 * дороги, электричество, мосты, жильё). Названия и описания — как на официальном сайте (сверено в сентябре 2026 г.);
 * slug — адрес страницы проекта. Всего на сайте 18 проектов: полный список — по ссылке «Все проекты».
 * Официальный сайт существует только на тадж./рус. — английские названия ниже являются переводом
 * для нашего сайта, а не официальным наименованием.
 *
 * ВАЖНО: список — это реальные проекты организации, а не утверждение, что именно они
 * финансируются из Вакфа. Когда направления Вакфа будут утверждены, заполните `vaqfDirections`
 * ниже — и блок «Направления Вакфа» заменит заглушку автоматически.
 */
export type ProjectIcon = 'water' | 'health' | 'education' | 'road' | 'power' | 'bridge' | 'home';

export interface Project {
  slug: string;
  icon: ProjectIcon;
  name: Record<Lang, string>;
  blurb: Record<Lang, string>;
}

export const projectUrl = (lang: Lang, slug: string) => mainSiteUrl(lang, `/projects/${slug}`);
export const allProjectsUrl = (lang: Lang) => mainSiteUrl(lang, '/projects');

export const projects: Project[] = [
  {
    slug: 'obi-kavsar',
    icon: 'water',
    name: { tg: 'Оби Кавсар', ru: 'Вода Кавсара', en: 'Water of Kawsar' },
    blurb: {
      tg: 'Об — сарчашмаи ҳаёт ва садақаест, ки манфиати он метавонад солҳо идома ёбад.',
      ru: 'Вода — источник жизни и садака, польза которой может продолжаться годами.',
      en: 'Water is the source of life and a charity whose benefit can last for years.',
    },
  },
  {
    slug: 'shifoi-umed',
    icon: 'health',
    name: { tg: 'Шифои умед', ru: 'Шифа надежды', en: 'Healing of Hope' },
    blurb: {
      tg: 'Пунктҳои тиббӣ ва беморхонаҳоро месозем ва таъмир мекунем, онҳоро бо чизҳои зарурӣ таъмин менамоем ва ба мардум дар гирифтани кумаки тиббӣ ёрӣ мерасонем.',
      ru: 'Строим и ремонтируем медицинские пункты и больницы, обеспечиваем их необходимым и помогаем людям получать медицинскую помощь.',
      en: 'We build and repair medical centres and hospitals, equip them with what they need, and help people get medical care.',
    },
  },
  {
    slug: 'nuri-ilm',
    icon: 'education',
    name: { tg: 'Нури илм', ru: 'Свет знаний', en: 'Light of Knowledge' },
    blurb: {
      tg: 'Маориф — рӯшноии зиндагӣ ва мероси наслҳои оянда.',
      ru: 'Образование — свет жизни и наследие для будущих поколений.',
      en: 'Education is the light of life and a legacy for future generations.',
    },
  },
  {
    slug: 'rohi-barakat',
    icon: 'road',
    name: { tg: 'Роҳи баракат', ru: 'Путь благодати', en: 'Path of Blessing' },
    blurb: {
      tg: 'Роҳ ба деҳаҳои дурдаст — роҳ ба зиндагии дастрасу бехатартар.',
      ru: 'Дорога к отдалённым сёлам — дорога к более доступной и безопасной жизни.',
      en: 'A road to remote villages is a road to a more accessible, safer life.',
    },
  },
  {
    slug: 'nuri-zindagi',
    icon: 'power',
    name: { tg: 'Нури зиндагӣ', ru: 'Свет жизни', en: 'Light of Life' },
    blurb: {
      tg: 'Ба хонаҳо, мактабҳо ва деҳаҳои дурдаст рӯшноӣ меорем ва одамонро бо барқи зарурӣ таъмин мекунем.',
      ru: 'Приносим свет в дома, школы и отдалённые сёла, обеспечивая людей необходимой электроэнергией.',
      en: 'We bring light to homes, schools and remote villages, providing people with the electricity they need.',
    },
  },
  {
    slug: 'puli-sirot',
    icon: 'bridge',
    name: { tg: 'Пули сирот', ru: 'Мост сирот', en: "Orphans' Bridge" },
    blurb: {
      tg: 'Сохтани пулҳо, ки деҳаҳои дурдастро мепайвандад ва роҳи мардумро ба зиндагии беҳтар осон мекунад.',
      ru: 'Строительство мостов, соединяющих отдалённые сёла и облегчающих путь людей к лучшей жизни.',
      en: 'Building bridges that connect remote villages and ease the way to a better life.',
    },
  },
  {
    slug: 'khonai-umed',
    icon: 'home',
    name: { tg: 'Хонаи умед', ru: 'Дом надежды', en: 'House of Hope' },
    blurb: {
      tg: 'Ба оилаҳои ниёзманд дар сохтани хонаи бехатар ва шоиста кумак мекунем.',
      ru: 'Помощь нуждающимся семьям в строительстве безопасного и достойного дома.',
      en: 'Helping families in need build a safe, decent home.',
    },
  },
];

/**
 * Направления, ПОДТВЕРЖДЁННЫЕ организацией именно для Вакфа.
 * Пока пусто — на сайте показывается аккуратная заглушка. Пример заполнения:
 *   { icon: 'water', title: { tg: '…', ru: '…', en: '…' }, text: { tg: '…', ru: '…', en: '…' } }
 */
export interface VaqfDirection {
  icon: ProjectIcon;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}
export const vaqfDirections: VaqfDirection[] = [];
