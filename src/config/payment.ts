import type { Lang } from '@/i18n/config';
import { mainSiteUrl } from '@/config/site';
import { asset } from '@/lib/assets';

/**
 * СПОСОБЫ ОПЛАТЫ ПРОЕКТА «ВАҚФ».
 *
 * Здесь ТОЛЬКО реквизиты, относящиеся именно к Вакфу:
 *  - Единый QR (EMV, Тоҷикистон) — выпущен отдельно под Вақф;
 *  - прямая ссылка на кошелёк Alif Mobi.
 *
 * Банковские реквизиты Салихин (Alif TJS/USD/RUB, Sberbank) намеренно убраны:
 * они общие для других проектов организации и к Вакфу отношения не имеют.
 */

type BiText = Record<Lang, string>;

export type PaymentMethodId = 'qr' | 'alif-mobi';

export interface QrMethod {
  id: 'qr';
  kind: 'qr';
  label: BiText;
  hint: BiText;
  qrImage: string;
  apps: string[];
}

/** Оплата по прямой ссылке в приложении/кошельке. */
export interface LinkMethod {
  id: 'alif-mobi';
  kind: 'link';
  label: BiText;
  hint: BiText;
  url: string;
  cta: BiText;
  steps: Record<Lang, string[]>;
}

export type PaymentMethod = QrMethod | LinkMethod;

/** Официальная страница пожертвований — запасной вариант. */
export const officialDonateUrl = (lang: Lang) => mainSiteUrl(lang, '/donate');

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'qr',
    kind: 'qr',
    label: {
      tg: 'QR рамзи ягона',
      ru: 'Единый QR',
      en: 'Unified QR',
    },
    hint: {
      tg: 'Бо ҳар барномаи бонкии Тоҷикистон кор мекунад',
      ru: 'Работает с любым банковским приложением Таджикистана',
      en: 'Works with any Tajik banking app',
    },
    qrImage: asset('/payment/qr-vaqf.png'),
    apps: ['Alif Mobi', 'DC Wallet', 'Eskhata', 'Amonatbonk'],
  },
  {
    id: 'alif-mobi',
    kind: 'link',
    label: {
      tg: 'Alif Mobi',
      ru: 'Alif Mobi',
      en: 'Alif Mobi',
    },
    hint: {
      tg: 'Пардохти мустақим тавассути ҳамёни Alif Mobi',
      ru: 'Прямая оплата через кошелёк Alif Mobi',
      en: 'Direct payment via the Alif Mobi wallet',
    },
    url: 'https://app.alif.tj/providers?id=6009',
    cta: {
      tg: 'Кушодан дар Alif Mobi',
      ru: 'Открыть в Alif Mobi',
      en: 'Open in Alif Mobi',
    },
    steps: {
      tg: [
        'Тугмаи болоро пахш кунед — саҳифаи «Вақф» дар Alif Mobi кушода мешавад.',
        'Маблағи дилхоҳро ворид кунед.',
        'Пардохтро тасдиқ кунед.',
      ],
      ru: [
        'Нажмите кнопку выше — откроется страница «Вакф» в Alif Mobi.',
        'Введите желаемую сумму.',
        'Подтвердите платёж.',
      ],
      en: [
        'Tap the button above — the "Waqf" page opens in Alif Mobi.',
        'Enter the amount you wish to give.',
        'Confirm the payment.',
      ],
    },
  },
];
