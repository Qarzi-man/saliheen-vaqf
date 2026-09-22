import type { Lang } from '@/i18n/config';
import { mainSiteUrl } from '@/config/site';

/**
 * СПОСОБЫ ОПЛАТЫ.
 * Источник — официальные банковские реквизиты Салихин (Alif Bank: TJS/USD/RUB,
 * Sberbank: RUB) и скриншот QR-виджета официального сайта. Названия банков и
 * адреса приведены ТОЧНО как в выданных банком документах и НЕ переводятся —
 * это платёжные реквизиты, и точность важнее единообразия языка сайта.
 */

type BiText = Record<Lang, string>;

export type PaymentMethodId = 'qr' | 'alif-bank' | 'sberbank';

/** Одно поле реквизита. copyValue — если для копирования нужна «чистая» строка без пробелов. */
export interface RequisiteField {
  label: BiText;
  value: string;
  copyValue?: string;
}

export interface RequisiteGroup {
  title: BiText;
  fields: RequisiteField[];
}

export interface BankVariant {
  id: string;
  currency: string;
  currencyNote: BiText;
  groups: RequisiteGroup[];
}

export interface QrMethod {
  id: 'qr';
  kind: 'qr';
  label: BiText;
  hint: BiText;
  qrImage: string;
  apps: string[];
}

export interface BankMethod {
  id: 'alif-bank' | 'sberbank';
  kind: 'bank';
  label: BiText;
  hint: BiText;
  variants: BankVariant[];
}

export type PaymentMethod = QrMethod | BankMethod;

/** Официальная страница пожертвований — служит запасным вариантом и основной кнопкой действия. */
export const officialDonateUrl = (lang: Lang) => mainSiteUrl(lang, '/donate');

const alifTjs: BankVariant = {
  id: 'tjs',
  currency: 'TJS',
  currencyNote: { ru: 'Перевод в сомони, внутри Таджикистана', tg: 'Гузариш бо сомонӣ, дар дохили Тоҷикистон' },
  groups: [
    {
      title: { ru: 'Банк-корреспондент', tg: 'Бонки корреспондент' },
      fields: [
        { label: { ru: 'Наименование', tg: 'Ном' }, value: 'Бонки миллии Тоҷикистон (Национальный банк Таджикистана)' },
        {
          label: { ru: 'Адрес', tg: 'Суроға' },
          value: 'Ҷумҳурии Тоҷикистон, шаҳри Душанбе, хиёбони Рудакӣ, 38/1, 734003',
        },
        { label: { ru: 'Код банка', tg: 'Рақами мушаххаси бонкӣ' }, value: '350101101' },
        { label: { ru: 'ИНН', tg: 'РМА' }, value: '010018157' },
      ],
    },
    {
      title: { ru: 'Банк-получатель (Alif Bank)', tg: 'Бонки қабулкунанда (Алиф Бонк)' },
      fields: [
        { label: { ru: 'Наименование', tg: 'Ном' }, value: 'Ҷамъияти саҳомии кушодаи «Алиф Бонк» (ОАО «Алиф Банк»)' },
        {
          label: { ru: 'Адрес', tg: 'Суроға' },
          value: 'Ҷумҳурии Тоҷикистон, 734019, шаҳри Душанбе, 101-ум маҳалла, кӯчаи Баҳовуддинов, 9',
        },
        { label: { ru: 'Код банка', tg: 'Рақами мушаххаси бонкӣ' }, value: '350101900' },
        { label: { ru: 'ИНН', tg: 'РМА' }, value: '030026536' },
        { label: { ru: 'Корсчёт в НБТ', tg: 'Суратҳисоби муросилотӣ дар БМТ' }, value: '20402972919001' },
        { label: { ru: 'Корсчёт банка', tg: 'Суратҳисоби муросилотии бонк' }, value: '10301972600000000101' },
      ],
    },
    {
      title: { ru: 'Получатель (Салихин)', tg: 'Қабулкунанда (Салиҳин)' },
      fields: [
        {
          label: { ru: 'Наименование', tg: 'Ном' },
          value: 'Ташкилоти Ҷамъиятии байналмилалии хайриявии Салиҳин',
        },
        { label: { ru: 'Номер счёта (TJS)', tg: 'Рақами суратҳисоб (TJS)' }, value: '20202972100049668601' },
        { label: { ru: 'ИНН (РМА)', tg: 'РМА' }, value: '010106816' },
      ],
    },
  ],
};

const alifUsd: BankVariant = {
  id: 'usd',
  currency: 'USD',
  currencyNote: { ru: 'Международный перевод по SWIFT', tg: 'Гузариши байналмилалӣ тавассути SWIFT' },
  groups: [
    {
      title: { ru: 'Correspondent Bank', tg: 'Correspondent Bank' },
      fields: [
        { label: { ru: 'Название', tg: 'Ном' }, value: 'National Bank for Foreign Economic Activity of Uzbekistan' },
        { label: { ru: 'Адрес', tg: 'Суроға' }, value: '100084, Republic of Uzbekistan, Tashkent, Amir Temur Avenue, 101' },
        { label: { ru: 'SWIFT', tg: 'SWIFT' }, value: 'NBFAUZ2X' },
      ],
    },
    {
      title: { ru: 'Beneficiary Bank (Alif Bank)', tg: 'Beneficiary Bank (Alif Bank)' },
      fields: [
        { label: { ru: 'Название', tg: 'Ном' }, value: 'Open Joint-Stock Company Alif Bank' },
        {
          label: { ru: 'Адрес', tg: 'Суроға' },
          value: '734019, Republic of Tajikistan, Dushanbe City, 101st Microdistrict, Bahovuddinov Street 9',
        },
        { label: { ru: 'SWIFT', tg: 'SWIFT' }, value: 'ALIFTJ22' },
        { label: { ru: 'Корр. счёт (USD)', tg: 'Суратҳисоби муросилотӣ (USD)' }, value: '21002840900090328001' },
      ],
    },
    {
      title: { ru: 'Beneficiary (Салихин)', tg: 'Beneficiary (Салиҳин)' },
      fields: [
        { label: { ru: 'Название', tg: 'Ном' }, value: 'International Charitable Public Organization Saliheen' },
        { label: { ru: 'Номер счёта (USD)', tg: 'Рақами суратҳисоб (USD)' }, value: '20206840500049668601' },
      ],
    },
  ],
};

const alifRub: BankVariant = {
  id: 'rub',
  currency: 'RUB',
  currencyNote: { ru: 'Перевод в рублях через Alif Bank', tg: 'Гузариши рублӣ тавассути Алиф Бонк' },
  groups: [
    {
      title: { ru: 'Банк-получатель (маршрут СПФС)', tg: 'Бонки қабулкунанда (маршрути СПФС)' },
      fields: [
        { label: { ru: 'Название', tg: 'Ном' }, value: 'ООО «Мурманский расчетный банк»' },
        { label: { ru: 'Адрес', tg: 'Суроға' }, value: '183071, Россия, г. Мурманск, ул. Старостина, д. 21' },
        { label: { ru: 'ИНН/КПП', tg: 'ИНН/КПП' }, value: '5190103184 / 519001001' },
        { label: { ru: 'БИК', tg: 'БИК' }, value: '044705095' },
        {
          label: { ru: 'Корсчёт', tg: 'Суратҳисоби муросилотӣ' },
          value: '30101810045374705095 (в ГУ Банка России по ЦФО, г. Москва)',
          copyValue: '30101810045374705095',
        },
        { label: { ru: 'SWIFT/СПФС', tg: 'SWIFT/СПФС' }, value: 'MTEORU22XXX' },
      ],
    },
    {
      title: { ru: 'Получатель (Alif Bank)', tg: 'Қабулкунанда (Алиф Бонк)' },
      fields: [
        { label: { ru: 'Название', tg: 'Ном' }, value: 'Открытое акционерное общество «Алиф Банк»' },
        {
          label: { ru: 'Адрес', tg: 'Суроға' },
          value: '734019, Республика Таджикистан, г. Душанбе, 101-ый микрорайон, ул. Багаутдинова, 9',
        },
        { label: { ru: 'ИНН/КПП', tg: 'ИНН/КПП' }, value: '9909486955 / 770987001' },
        { label: { ru: 'БИК', tg: 'БИК' }, value: '350101900' },
        { label: { ru: 'Корсчёт', tg: 'Суратҳисоби муросилотӣ' }, value: '30111810800000000009' },
        { label: { ru: 'SWIFT/СПФС', tg: 'SWIFT/СПФС' }, value: 'ALIFTJ22XXX / ALIFTJ22XXX' },
      ],
    },
    {
      title: { ru: 'В пользу (Салихин)', tg: 'Ба фоидаи (Салиҳин)' },
      fields: [
        {
          label: { ru: 'ФИО / наименование', tg: 'Ном' },
          value: 'Международная благотворительная общественная организация Салихин',
        },
        { label: { ru: 'Номер счёта (RUB)', tg: 'Рақами суратҳисоб (RUB)' }, value: '20206810500049668602' },
      ],
    },
  ],
};

const sberRub: BankVariant = {
  id: 'rub',
  currency: 'RUB',
  currencyNote: { ru: 'Для переводов из России без SWIFT', tg: 'Барои гузариш аз Русия бе SWIFT' },
  groups: [
    {
      title: { ru: 'Получатель', tg: 'Қабулкунанда' },
      fields: [
        {
          label: { ru: 'Наименование', tg: 'Ном' },
          value: 'МЕЖДУНАРОДНАЯ БЛАГОТВОРИТЕЛЬНАЯ ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ «САЛИХИН»',
        },
        { label: { ru: 'ИНН', tg: 'ИНН' }, value: '9909716020' },
        { label: { ru: 'КПП', tg: 'КПП' }, value: '504787001' },
        { label: { ru: 'Расчётный счёт', tg: 'Суратҳисоб' }, value: '40807 810 1 4072 0000003', copyValue: '40807810140720000003' },
      ],
    },
    {
      title: { ru: 'Банк получателя', tg: 'Бонки қабулкунанда' },
      fields: [
        { label: { ru: 'Наименование', tg: 'Ном' }, value: 'ПАО Сбербанк' },
        { label: { ru: 'БИК', tg: 'БИК' }, value: '044525225' },
        { label: { ru: 'Корсчёт', tg: 'Суратҳисоби муросилотӣ' }, value: '30101 810 4 0000 0000225', copyValue: '30101810400000000225' },
        { label: { ru: 'ИНН', tg: 'ИНН' }, value: '7707083893' },
        { label: { ru: 'КПП', tg: 'КПП' }, value: '773643002' },
      ],
    },
  ],
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'qr',
    kind: 'qr',
    label: { ru: 'QR и мобильные кошельки', tg: 'QR ва ҳамёнҳои мобилӣ' },
    hint: { ru: 'Таджикистан — перевод поступает мгновенно', tg: 'Тоҷикистон — гузариш дарҳол мерасад' },
    qrImage: '/payment/qr-mobile.png',
    apps: ['Alif', 'DC Wallet', 'Eskhata'],
  },
  {
    id: 'alif-bank',
    kind: 'bank',
    label: { ru: 'Alif Bank — банковский перевод', tg: 'Alif Bank — гузариши бонкӣ' },
    hint: { ru: 'TJS, USD или RUB — выберите валюту', tg: 'TJS, USD ё RUB — асъорро интихоб кунед' },
    variants: [alifTjs, alifUsd, alifRub],
  },
  {
    id: 'sberbank',
    kind: 'bank',
    label: { ru: 'Sberbank — перевод из России', tg: 'Sberbank — гузариш аз Русия' },
    hint: { ru: 'Рублёвый перевод без SWIFT', tg: 'Гузариши рублӣ бе SWIFT' },
    variants: [sberRub],
  },
];
