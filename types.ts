import type { SourceCategory, SourceId } from './sources';

/** Текст с (необязательными) номерами источников. */
export interface Cited {
  text: string;
  cite?: readonly SourceId[];
}

export interface FlowStep {
  key: 'assets' | 'waqf' | 'management' | 'benefit' | 'society';
  title: string;
  short: string;
  text: string;
  cite: readonly SourceId[];
}

export interface LegalDoc {
  badge: string;
  title: string;
  meta: string;
  regulatesTitle: string;
  points: { ref?: string; text: string }[];
  relationTitle: string;
  relation: string;
  cite: readonly SourceId[];
}

/**
 * Весь текст сайта на одном языке.
 * Тексты лежат в ru.ts и tg.ts. Чтобы подключить CMS, достаточно реализовать
 * getContent(lang) в src/content/index.ts так, чтобы он возвращал объект этого типа.
 */
export interface Content {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
    shareText: string;
  };

  ui: {
    skip: string;
    menu: string;
    closeMenu: string;
    language: string;
    sourceWord: string;
    openSource: string;
    supportCta: string;
    learnMore: string;
    sectionsNav: string;
    external: string;
    backToTop: string;
    switchToDark: string;
    switchToLight: string;
  };

  nav: {
    about: string;
    sharia: string;
    legal: string;
    how: string;
    transparency: string;
    support: string;
  };

  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lead: string;
    pathTitle: string;
    path: string[];
    byline: string;
    illustrationLabel: string;
  };

  about: {
    eyebrow: string;
    title: string;
    lead: Cited;
    flowTitle: string;
    flowHint: string;
    flow: FlowStep[];
    compareTitle: string;
    compare: {
      sadaqa: { title: string; lead: string; points: string[] };
      waqf: { title: string; lead: string; points: string[] };
      note: Cited;
    };
  };

  sharia: {
    eyebrow: string;
    title: string;
    lead: Cited;
    tabs: { quran: string; sunnah: string; companions: string; law: string };
    meaningLabel: string;
    arabicLabel: string;
    quran: {
      callout: Cited;
      verses: { ref: string; arabic?: string; meaning: string; note: string; cite: readonly SourceId[] }[];
    };
    sunnah: {
      items: { title: string; ref: string; arabicTerm?: string; text: string; note: Cited }[];
    };
    companions: {
      lead: string;
      items: { title: string; text: string; note: Cited }[];
    };
    law: {
      lead: string;
      items: { q: string; a: string; cite: readonly SourceId[] }[];
      differencesTitle: string;
      differencesLead: string;
      differences: { title: string; text: string; cite: readonly SourceId[] }[];
    };
  };

  legal: {
    eyebrow: string;
    title: string;
    lead: string;
    honest: { title: string; text: Cited };
    docs: { civil: LegalDoc; charity: LegalDoc; charter: LegalDoc };
    readDoc: string;
    pending: string;
    mechanism: {
      title: string;
      lead: string;
      steps: { label: string; ref: string }[];
      note: Cited;
    };
    terms: {
      title: string;
      items: { term: string; def: string; cite?: readonly SourceId[] }[];
    };
  };

  how: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; text: string; cite: readonly SourceId[] }[];
    note: string;
  };

  why: {
    eyebrow: string;
    title: string;
    lead: Cited;
    benefits: { title: string; text: string; cite?: readonly SourceId[] }[];
    projectsTitle: string;
    projectsLead: string;
    viewProject: string;
    allProjects: string;
    directionsTitle: string;
    placeholderTitle: string;
    placeholderText: string;
  };

  transparency: {
    eyebrow: string;
    title: string;
    lead: Cited;
    linksTitle: string;
    open: string;
    metricsTitle: string;
    metricsNote: string;
    metricsPlaceholders: string[];
    metricsEmpty: string;
    documentsTitle: string;
    charterLabel: string;
    termsLabel: string;
    pendingDoc: string;
  };

  support: {
    eyebrow: string;
    title: string;
    lead: Cited;
    chooseLabel: string;
    openOfficial: string;
    fallbackText: string;
    qrCaption: string;
    qrAppsNote: string;
    chooseCurrency: string;
    copy: string;
    copied: string;
    secureNote: string;
    stepsTitle: string;
  };

  share: {
    title: string;
    text: string;
    native: string;
    copyLink: string;
    copied: string;
    telegram: string;
    whatsapp: string;
    facebook: string;
    x: string;
    shareVia: string;
  };

  sources: {
    eyebrow: string;
    title: string;
    lead: string;
    categories: Record<SourceCategory, string>;
    disclaimerTitle: string;
    disclaimer: string;
  };

  footer: {
    about: string;
    contacts: string;
    social: string;
    mainSite: string;
    rights: string;
  };
}
