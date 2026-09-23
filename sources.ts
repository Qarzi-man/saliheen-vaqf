import type { Lang } from '@/i18n/config';
import { mainSiteUrl } from '@/config/site';

/**
 * ЕДИНЫЙ реестр источников. Каждая сноска [n] на сайте ведёт сюда.
 * Порядок в массиве = номера сносок (сгруппированы по категориям).
 * Здесь только те документы и тексты, которые были открыты и проверены при подготовке сайта.
 * Ничего не добавляйте «по памяти»: если у тезиса нет источника — тезиса не должно быть.
 */
export type SourceCategory = 'law' | 'saliheen' | 'quran' | 'hadith' | 'fiqh';

export interface Source {
  id: string;
  category: SourceCategory;
  title: Record<Lang, string>;
  note?: Record<Lang, string>;
  url: string | Record<Lang, string>;
  alt?: { label: Record<Lang, string>; url: string };
}

export const sources = [
  /* ------------------------- Законодательство РТ ------------------------- */
  {
    id: 'law-charity',
    category: 'law',
    title: {
      tg: 'Қонуни Ҷумҳурии Тоҷикистон «Дар бораи фаъолияти эҳсонкорӣ» аз 22.04.2003, №18 (бо таҳрири қонунҳои аз 02.01.2018 №1491 ва аз 24.12.2022 №1940)',
      ru: 'Закон Республики Таджикистан «О благотворительной деятельности» от 22.04.2003 №18 (в ред. законов от 02.01.2018 №1491 и от 24.12.2022 №1940)',
    },
    note: {
      tg: 'Матни расмии тоҷикӣ — дар сомонаи Маҷлиси намояндагони Маҷлиси Олии ҶТ.',
      ru: 'Официальный русский текст — на сайте Национального центра законодательства при Президенте РТ.',
    },
    url: {
      tg: 'https://mmk.tj/content/%D2%9B%D0%BE%D0%BD%D1%83%D0%BD%D0%B8-%C2%A0%D2%B7%D1%83%D0%BC%D2%B3%D1%83%D1%80%D0%B8%D0%B8-%D1%82%D0%BE%D2%B7%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%BE%D0%BD-%D0%B4%D0%B0%D1%80-%D0%B1%D0%BE%D1%80%D0%B0%D0%B8-%D1%84%D0%B0%D1%8A%D0%BE%D0%BB%D0%B8%D1%8F%D1%82%D0%B8-%D1%8D%D2%B3%D1%81%D0%BE%D0%BD%D0%BA%D0%BE%D1%80%D3%A3',
      ru: 'https://ncz.tj/content/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8-%D1%82%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD-%D0%BE-%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8',
    },
  },
  {
    id: 'civil-code',
    category: 'law',
    title: {
      tg: 'Кодекси граждании Ҷумҳурии Тоҷикистон (қабул 23.11.2022, №915; тасдиқ 16.12.2022, №319; аз 01.07.2023 амал мекунад)',
      ru: 'Гражданский кодекс Республики Таджикистан (принят 23.11.2022 №915, одобрен 16.12.2022 №319; введён в действие с 01.07.2023)',
    },
    note: {
      tg: 'Матни моддаҳои 1–6 пурра хонда шуд; номҳои моддаҳои 50, 124–128, 146, 642 ва боби 57 (моддаҳои 1117–1131) аз мундариҷаи матни нашршуда санҷида шуданд.',
      ru: 'Текст ст. 1–6 прочитан полностью; названия ст. 50, 124–128, 146, 642 и главы 57 (ст. 1117–1131) сверены по оглавлению опубликованного текста.',
    },
    url: 'https://sud.tj/upload/iblock/cff/4406e822qsl35o8y003l2qz5hx1p4yj0.pdf',
  },

  /* --------------------------- Документы Салихин --------------------------- */
  {
    id: 'saliheen-about',
    category: 'saliheen',
    title: {
      tg: '«Дар бораи мо» — Салиҳин (about-saliheen.pdf)',
      ru: '«О нас» — Салихин (about-saliheen.pdf)',
    },
    note: {
      tg: 'Қисса, дурнамо, рисолат ва арзишҳои ташкилот.',
      ru: 'История, видение, миссия и ценности организации.',
    },
    url: 'https://saliheen.tj/about-saliheen.pdf',
  },
  {
    id: 'saliheen-projects',
    category: 'saliheen',
    title: { tg: 'Лоиҳаҳои Салиҳин', ru: 'Проекты Салихин' },
    note: {
      tg: 'Рӯйхати лоиҳаҳои амалкунанда дар сомонаи расмӣ.',
      ru: 'Список действующих проектов на официальном сайте.',
    },
    url: { tg: mainSiteUrl('tg', '/projects'), ru: mainSiteUrl('ru', '/projects') },
  },
  {
    id: 'saliheen-reports',
    category: 'saliheen',
    title: { tg: 'Ҳисоботҳои Салиҳин', ru: 'Отчёты Салихин' },
    note: {
      tg: 'Ҳисоботҳо дар сомонаи расмӣ.',
      ru: 'Отчёты на официальном сайте.',
    },
    url: { tg: mainSiteUrl('tg', '/reports'), ru: mainSiteUrl('ru', '/reports') },
  },

  /* --------------------------------- Коран --------------------------------- */
  {
    id: 'q-3-92',
    category: 'quran',
    title: {
      tg: 'Қуръон, 3:92 (сураи «Оли Имрон», ояти 92)',
      ru: 'Коран, 3:92 (сура «Али Имран», аят 92)',
    },
    url: 'https://qurano.com/en/3-ali-imran/verse-92/',
  },
  {
    id: 'q-2-261',
    category: 'quran',
    title: {
      tg: 'Қуръон, 2:261 (сураи «Бақара», ояти 261)',
      ru: 'Коран, 2:261 (сура «аль-Бакара», аят 261)',
    },
    url: 'https://qurano.com/en/2-al-baqara/verse-261/',
  },

  /* -------------------------------- Хадисы -------------------------------- */
  {
    id: 'h-muslim-1631',
    category: 'hadith',
    title: {
      tg: 'Саҳеҳи Муслим, № 1631 («Китоби васиятҳо»)',
      ru: 'Сахих Муслим, № 1631 (Книга завещаний)',
    },
    note: {
      tg: 'Ҳадиси Абу Ҳурайра дар бораи садақаи ҷория.',
      ru: 'Хадис Абу Хурайры о непрекращающейся садаке (садака джария).',
    },
    url: 'https://sunnah.com/muslim:1631',
  },
  {
    id: 'h-bukhari-2737',
    category: 'hadith',
    title: {
      tg: 'Саҳеҳи Бухорӣ, № 2737 («Китоби шартҳо», боби «Шартҳо дар вақф»)',
      ru: 'Сахих аль-Бухари, № 2737 (Книга условий, глава «Условия в вакфе»)',
    },
    note: {
      tg: 'Ҳадис дар бораи замини Умар дар Хайбар.',
      ru: 'Хадис о земле Умара в Хайбаре.',
    },
    url: 'https://sunnah.com/bukhari:2737',
  },
  {
    id: 'h-muslim-1632',
    category: 'hadith',
    title: {
      tg: 'Саҳеҳи Муслим, № 1632а («Китоби васиятҳо»)',
      ru: 'Сахих Муслим, № 1632а (Книга завещаний)',
    },
    note: {
      tg: 'Ривояти дигари ҳамон ҳадис дар бораи замини Умар дар Хайбар.',
      ru: 'Другая передача хадиса о земле Умара в Хайбаре.',
    },
    url: 'https://sunnah.com/muslim:1632a',
  },
  {
    id: 'h-nasai-3608',
    category: 'hadith',
    title: {
      tg: 'Сунани Насоӣ, № 3608 («Китоби вақфҳо»)',
      ru: 'Сунан ан-Насаи, № 3608 (Книга вакфов)',
    },
    note: {
      tg: 'Ҳадис дар бораи чоҳи Рума ва Усмон ибни Аффон.',
      ru: 'Хадис о колодце Рума и Усмане ибн Аффане.',
    },
    url: 'https://sunnah.com/nasai:3608',
  },

  /* ------------------------ Исламские правовые источники ------------------------ */
  {
    id: 'iqa-13720',
    category: 'fiqh',
    title: {
      tg: 'IslamQA: «Rulings on Waqfs» (саволи №13720)',
      ru: 'IslamQA: «Rulings on Waqfs» (вопрос №13720)',
    },
    note: {
      tg: 'Таъриф, шартҳои дурустии вақф, идоракунӣ. Ба забони англисӣ.',
      ru: 'Определение, условия действительности вакфа, управление.',
    },
    url: {
      tg: 'https://islamqa.info/en/answers/13720',
      ru: 'https://islamqa.info/ru/answers/13720',
    },
  },
  {
    id: 'mughniyya',
    category: 'fiqh',
    title: {
      tg: 'М. Ҷавод Муғния. «Панҷ мазҳаби ҳуқуқи ислом» — боби 10 «Вақф» (бо забони англисӣ)',
      ru: 'М. Джавад Мугнийя. «Пять школ исламского права», гл. 10 «Вакф» (на англ. языке)',
    },
    note: {
      tg: 'Муқоисаи назарҳои мазҳабҳо оид ба доимӣ будан ва моликияти молу мулки вақфшуда.',
      ru: 'Сравнение мнений мазхабов о бессрочности вакфа и о праве собственности на вакфное имущество.',
    },
    url: 'https://al-islam.org/five-schools-islamic-law-muhammad-jawad-mughniyya/10-waqf',
  },
  {
    id: 'proquest-waqf',
    category: 'fiqh',
    title: {
      tg: '«Waqf, Its Substitution (Istibdāl), and Selected…» (ProQuest; бо истинод ба Ваҳба аз-Зуҳайлӣ, 2007, ҷ. 10)',
      ru: '«Waqf, Its Substitution (Istibdāl), and Selected…» (ProQuest; со ссылкой на Вахбу аз-Зухайли, 2007, т. 10)',
    },
    note: {
      tg: 'Назари Абу Ҳанифа дар бораи ҳатмӣ шудани вақф.',
      ru: 'Мнение Абу Ханифы об обязательности вакфа.',
    },
    url: 'https://www.proquest.com/docview/2166052647/DD54F999B334424APQ/2',
  },
  {
    id: 'emerald-cash-waqf',
    category: 'fiqh',
    title: {
      tg: '«Cash waqf risk management and perpetuity restriction conundrum», ISRA International Journal of Islamic Finance, т. 13, №2',
      ru: '«Cash waqf risk management and perpetuity restriction conundrum», ISRA International Journal of Islamic Finance, т. 13, №2',
    },
    note: {
      tg: 'Назари мазҳабҳо дар бораи вақфи пули нақд.',
      ru: 'Мнения мазхабов о денежном вакфе.',
    },
    url: 'https://www.emerald.com/ijif/article/13/2/162/133463/Cash-waqf-risk-management-and-perpetuity',
  },
  {
    id: 'iifa-140',
    category: 'fiqh',
    title: {
      tg: 'Академияи байналмилалии фиқҳи исломӣ (ТАИ): Қарори №140 (6/15) «Сармоягузорӣ аз вақф, самараҳо ва даромадҳои он», Маскат, 2004',
      ru: 'Международная академия исламского фикха (ОИС): Резолюция №140 (6/15) «Инвестирование вакфа, его плодов и доходов», Маскат, 2004',
    },
    url: 'https://iifa-aifi.org/en/32887.html',
  },
  {
    id: 'iifa-2009',
    category: 'fiqh',
    title: {
      tg: 'Академияи байналмилалии фиқҳи исломӣ (ТАИ), ҷаласаи 19-ум, Шорҷа, 2009: вақфи саҳмияҳо, сукук, ҳуқуқ ва манфиат',
      ru: 'Международная академия исламского фикха (ОИС), 19-я сессия, Шарджа, 2009: вакф акций, сукук, прав и пользы',
    },
    url: 'https://iifa-aifi.org/en/32991.html',
  },
  {
    id: 'aaoifi-ss33',
    category: 'fiqh',
    title: {
      tg: 'AAOIFI Shari’ah Standard No. 33: Waqf (тавсифи қамрави стандарт)',
      ru: 'AAOIFI Shari’ah Standard No. 33: Waqf (описание охвата стандарта)',
    },
    note: {
      tg: 'Таъриф ва намудҳои вақф, шартҳо, нақши муассисаҳои молиявии исломӣ дар назорат, идоракунӣ ва сармоягузории вақфҳо.',
      ru: 'Определение и виды вакфа, условия, роль исламских финансовых институтов в надзоре, управлении и инвестировании вакфов.',
    },
    url: 'https://al-hedayah.institute/courses/aaoifi-shariah-standard-no-33-waqf/',
  },
  {
    id: 'saudi-awqaf',
    category: 'fiqh',
    title: {
      tg: 'Раёсати умумии авқофи Арабистони Саудӣ: вақфи Усмон — чоҳи Рума',
      ru: 'Генеральное управление вакфов (Саудовская Аравия): вакф Усмана — колодец Рума',
    },
    url: 'https://www.awqaf.gov.sa/en/endowment-example/endowment-Othman-well',
  },
] as const satisfies readonly Source[];

export type SourceId = (typeof sources)[number]['id'];

export const sourceList: readonly Source[] = sources;

/** Номер сноски [n] (с 1). Если id не найден — ошибка сборки, чтобы опечатки не доходили до сайта. */
export function sourceNumber(id: SourceId): number {
  const index = sourceList.findIndex((s) => s.id === id);
  if (index === -1) throw new Error(`Unknown source id: ${id}`);
  return index + 1;
}

export function getSource(id: SourceId): Source {
  const found = sourceList.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown source id: ${id}`);
  return found;
}

export function sourceUrl(source: Source, lang: Lang): string {
  return typeof source.url === 'string' ? source.url : source.url[lang];
}

export const categoryOrder: SourceCategory[] = ['law', 'saliheen', 'quran', 'hadith', 'fiqh'];
