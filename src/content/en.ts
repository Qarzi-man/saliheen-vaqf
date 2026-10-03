import type { Content } from './types';

/**
 * English content for the site.
 * Translated from the Tajik reference (tg.ts) — the structure and meaning match it exactly.
 * Rule: every Sharia/legal claim carries `cite` — a list of ids from sources.ts.
 */
export const en: Content = {
  meta: {
    title: 'Waqf — a continuous good, a lasting reward · Saliheen',
    description:
      'What waqf is, what it is based on in Sharia, how the Saliheen Waqf project works, and how to take part.',
    keywords: ['waqf', 'what is waqf', 'sadaqah jariyah', 'Saliheen', 'charity in Tajikistan', 'waqf in Tajikistan'],
    ogAlt: 'Waqf — a continuous good, a lasting reward. The Saliheen project',
    shareText: 'Waqf — a continuous good, a lasting reward. In plain words: what it is, what it is based on, and how to take part.',
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    language: 'Language',
    sourceWord: 'Source',
    openSource: 'Open source',
    supportCta: 'Support the Waqf',
    learnMore: 'Learn more',
    sectionsNav: 'Page sections',
    external: '(opens in a new tab)',
    backToTop: 'Back to top',
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
  },

  nav: {
    about: 'About Waqf',
    sharia: 'Sharia basis',
    faq: 'FAQ',
    legal: 'Legal basis',
    transparency: 'Transparency',
    support: 'Support',
  },

  hero: {
    eyebrow: 'Saliheen project · Waqf',
    titleLead: 'WAQF —',
    titleAccent: 'a continuous good, a lasting reward',
    lead: 'Waqf literally means "to hold back" and "to preserve". In Sharia, waqf is when a person holds back the core of their property or wealth and gives it permanently for the sake of good, so that it can no longer be sold, gifted, or inherited. Its benefit or income, for the pleasure of Allah, is directed toward charitable, social, and other publicly beneficial causes.',
    pathTitle: 'In three minutes you will learn',
    path: [
      'What waqf is',
      'Why it is well-founded',
      'How the Saliheen Waqf project works',
      'Where the benefit goes',
      'How to take part',
    ],
    byline: 'Every Sharia and legal statement is linked to its source',
    illustrationLabel: 'Illustration: a seed becomes a tree that gives people shade and fruit',
  },

  about: {
    eyebrow: 'About Waqf',
    title: 'What is waqf?',
    lead: {
      text: 'Property set aside as a Waqf must keep its core intact while its benefit continues: the asset itself is not spent when used, like a house, a shop, land, a garden, or a well. To understand how Waqf differs from other kinds of giving, let\u2019s first look at the difference between Sadaqah and Waqf.',
      cite: ['iqa-13720', 'mughniyya'],
    },
    compareTitle: 'Sadaqah and Waqf: what is the difference?',
    compare: {
      sadaqa: {
        title: 'Sadaqah',
        lead: 'What is given as Sadaqah can be spent right away.',
        points: [
          'What is given as Sadaqah can be spent right away — for food, clothing, or other needs.',
          'The reward for Sadaqah is usually tied to the good deed itself and the benefit it creates.',
          'The concept of "Sadaqah" is broad and can include money, goods, food, clothing, or other kinds of help.',
        ],
      },
      waqf: {
        title: 'Waqf',
        lead: 'A Waqf asset is preserved and held back.',
        points: [
          'A Waqf asset is preserved and held back: it cannot be sold, gifted, or inherited.',
          'Its benefit or income is continuously directed toward good works.',
          'Waqf is one of the well-known examples of Sadaqah Jariyah, since its benefit and reward can continue for many years.',
        ],
      },
      note: {
        text: 'In other words: with Sadaqah you give the thing itself; with Waqf you give a lasting source of benefit.',
        cite: ['iqa-13720'],
      },
    },
  },

  waqfFlow: {
    eyebrow: 'How it works',
    title: 'How does the Saliheen Waqf project work?',
    hint: 'Five steps from gathering funds to social benefit',
    flow: [
      {
        key: 'assets',
        title: 'Gathering Waqf assets',
        short: 'Forming the base',
        text: 'The Saliheen Waqf project is formed from funds and property that individuals and organizations donate to the Waqf. Donors can contribute various assets, including a house, a shop, land, a garden, a well, and cash.',
        cite: [],
      },
      {
        key: 'waqf',
        title: 'Preserving Waqf assets',
        short: 'Protecting the base',
        text: 'The property and assets of the Waqf are preserved for the common good. They cannot be sold, gifted, or inherited. This is why a Waqf can remain a source of continuous good and benefit for many years.',
        cite: [],
      },
      {
        key: 'management',
        title: 'Trustworthy, responsible management',
        short: 'Trust',
        text: 'Waqf assets are preserved and managed with responsibility, care, and transparency. Waqf property is an amanah (a trust). It must therefore be managed with high responsibility, following the requirements and principles of Sharia throughout.',
        cite: [],
      },
      {
        key: 'benefit',
        title: 'Benefit and income',
        short: 'Investment',
        text: 'Waqf assets are managed and invested responsibly and in accordance with Sharia. Part of the profit earned may be added back to the Waqf\u2019s assets or reinvested, to preserve the Waqf\u2019s value and earning capacity, prevent its assets from shrinking over time, and ensure the Waqf\u2019s sustainability.',
        cite: [],
      },
      {
        key: 'society',
        title: 'Continuing social benefit',
        short: 'Outcome',
        text: 'The income and benefit generated from Waqf assets are directed to charitable and social programmes, including support for orphanages, homes for the elderly, education, healthcare, and other community needs. In this way, Waqf property can benefit people for many years and become a continuous good.',
        cite: ['h-muslim-1631'],
      },
    ],
  },

  sharia: {
    eyebrow: 'Sharia basis',
    title: 'What waqf is based on in Sharia',
    lead: {
      text: 'Waqf, as a good and recommended act, is grounded above all in the words, actions, and guidance of the Prophet \ufdfa. The Qur\u2019anic verses on spending, charity, and giving in the way of Allah are stated in general terms. So these verses are cited as a general Sharia foundation, rather than as a direct definition of waqf.',
      cite: ['iqa-13720'],
    },
    tabs: { quran: 'Qur\u2019an', sunnah: 'Sunnah', companions: 'Companions' },
    meaningLabel: 'Meaning',
    arabicLabel: 'Arabic text',
    quran: {
      verses: [
        {
          ref: 'Qur\u2019an, 2:261 (Surah al-Baqarah)',
          meaning:
            'The parable of those who spend their wealth in the way of Allah is that of a grain that sprouts seven ears, with a hundred grains in each ear. And Allah multiplies the reward for whoever He wills, for Allah is All-Encompassing, All-Knowing.',
          note: 'The image of a grain yielding many fruits is close to the idea of a waqf\u2019s continuous benefit.',
          cite: ['q-2-261'],
        },
        {
          ref: 'Qur\u2019an, 2:262 (Surah al-Baqarah)',
          meaning:
            'Those who spend their wealth in the way of Allah, and do not follow their spending with reminders of their generosity or with hurtful words, will have their reward with their Lord; no fear will come upon them, nor will they grieve.',
          note: 'The condition for good giving: without reproach or causing hurt.',
          cite: ['q-2-262'],
        },
        {
          ref: 'Qur\u2019an, 3:92 (Surah Al \u2018Imran)',
          meaning:
            'You will never attain true righteousness until you spend from what you love. And whatever you spend, Allah surely knows it well.',
          note: 'The true measure of goodness: giving what is dear to you.',
          cite: ['q-3-92'],
        },
        {
          ref: 'Qur\u2019an, 5:2 (Surah al-Ma\u2019idah)',
          meaning: 'Help one another in righteousness and piety, and do not help one another in sin and transgression.',
          note: 'The basis of general cooperation in good works.',
          cite: ['q-5-2'],
        },
        {
          ref: 'Qur\u2019an, 73:20 (Surah al-Muzzammil)',
          meaning:
            'And whatever good you send ahead for yourselves, you will find it with Allah, better and greater in reward.',
          note: 'A good deed as capital sent ahead for the Hereafter.',
          cite: ['q-73-20'],
        },
      ],
    },
    sunnah: {
      items: [
        {
          title: 'Deeds whose reward does not stop after death',
          ref: 'Sahih Muslim, No. 1631/4223',
          text: 'When a person dies, their deeds come to an end, except for three: an ongoing charity (Sadaqah Jariyah), knowledge that continues to benefit others, and a righteous child who prays for them.',
          note: {
            text: 'Scholars cite this hadith as evidence for the merit of waqf, since waqf is an example of continuous benefit. The word "waqf" itself does not appear in the text of the hadith.',
            cite: ['iqa-13720', 'h-muslim-1631'],
          },
        },
        {
          title: 'The land in Khaybar',
          ref: 'Sahih al-Bukhari, No. 2737; Sahih Muslim, No. 1632/4224',
          text: '\u2018Umar ibn al-Khattab (RA) acquired a plot of land in Khaybar and asked the Prophet \ufdfa what to do with it. The Prophet \ufdfa advised him to hold back the land itself and distribute its produce as charity — on condition that the land itself would not be sold, gifted, or inherited. \u2018Umar (RA) did exactly that: the produce went to the poor, to relatives, to freeing slaves, to the cause of Allah, to travellers, and to guests.',
          note: {
            text: 'Scholars rely on this account to establish the concept of waqf: it contains the preservation of the asset, the direction of its produce, and the founder\u2019s conditions.',
            cite: ['h-bukhari-2737', 'h-muslim-1632'],
          },
        },
        {
          title: 'The well of Rumah',
          ref: 'Sunan al-Nasa\u2019i, No. 3608 (Book of Waqfs)',
          text: 'When the migrants arrived in Medina, they did not care much for the local water. The well of Rumah was one of the wells with sweet, pleasant water in Medina, but people had to buy its water. The Prophet \ufdfa urged the Companions to buy the well of Rumah and make it available to everyone. \u2018Uthman ibn \u2018Affan (RA) bought the well and made it a waqf for the common use of Muslims.',
          note: {
            text: 'One of the well-known examples of waqf serving a public need and the common good.',
            cite: ['h-nasai-3608', 'saudi-awqaf'],
          },
        },
      ],
    },
    companions: {
      lead: 'The Companions\u2019 practice shows that waqf was a living tradition, not merely a theory.',
      items: [
        {
          title: 'The Companions\u2019 practice',
          text: 'It is reported from Jabir (RA) that those Companions who had sufficient means and property for waqf were among the first to establish one: preserving the core of the asset while directing its benefit toward good works and common use.',
          note: {
            text: 'Scholars conclude from this report that waqf was so well known and accepted among the Companions that their practice reflects a practical consensus on its legitimacy.',
            cite: ['iqa-13720'],
          },
        },
      ],
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions about Waqf',
    lead: 'Short answers to the most common questions — drawn from IslamQA, M. Jawad Mughniyyah\u2019s "The Five Schools of Islamic Law", and AAOIFI standards.',
    items: [
      {
        q: 'What is waqf?',
        a: 'Waqf is preserving the core of an asset and directing its benefit or income toward good works for the pleasure of Allah. The "core" is property that is itself preserved while its benefit is used, such as a house, a shop, land, or a garden. Waqf property is normally not sold, gifted, pledged, or inherited.',
        cite: ['iqa-13720'],
      },
      {
        q: 'What establishes the legitimacy of waqf in Sharia?',
        a: 'Waqf is based above all on the words of the Prophet \ufdfa, the practice of the Companions, and its recognition by scholars. The word "waqf" is not mentioned directly in this sense in the Qur\u2019an, but many verses urge people toward spending, charity, good works, and giving in the way of Allah. In this way, the Qur\u2019an provides a general Sharia foundation for waqf.',
        cite: ['iqa-13720'],
      },
      {
        q: 'What are permanent and temporary waqf?',
        a: 'A permanent waqf is established forever: the core is preserved and its benefit is continuously directed toward good works. A temporary waqf is established for a set period; once that period ends, the property is returned to the owner or a designated person according to the founder\u2019s conditions.',
        cite: ['mughniyya'],
      },
      {
        q: 'How does waqf differ from sadaqah?',
        a: 'With sadaqah, the item or sum itself is given to another person and can be spent immediately. With waqf, the core asset is preserved, and its benefit or income is directed toward good works. This is why waqf is considered one of the well-known forms of ongoing sadaqah — a continuous good.',
        cite: ['h-muslim-1631'],
      },
      {
        q: 'What kind of property can be made into a waqf?',
        a: 'Property whose core can be preserved while its benefit is used can become a waqf: a house, a shop, land, a garden, a well, and other income-producing assets. Waqf property must be clearly defined, lawfully owned by the founder, and suitable for Sharia-permitted use.',
        cite: ['iqa-13720'],
      },
      {
        q: 'What purposes can the income and benefit of a waqf be directed to?',
        a: 'The benefit and income of a waqf can be directed to good works, including education, healthcare, access to water, and support for those in need and for relatives. The purpose of a waqf must not be linked to sin or anything forbidden. The founder\u2019s conditions are also observed, provided they do not contradict Sharia.',
        cite: ['iqa-13720'],
      },
      {
        q: 'Do scholars disagree on some types of waqf?',
        a: 'The legitimacy of waqf as such is accepted by scholars. However, on some specific matters — the type of property, the method of management, and certain forms of waqf — there are differences of opinion between schools of law. These differences do not affect the basic legitimacy and merit of waqf.',
        cite: ['mughniyya'],
      },
      {
        q: 'What are the basic conditions for a valid waqf?',
        a: 'Among the main conditions: the founder has the right to dispose of the property; the waqf property is clearly defined and beneficial; the purpose of the waqf is lawful and good; the conditions of the waqf are clear; and the waqf is established and managed according to the requirements of Sharia. Details of some conditions can vary between schools of law.',
        cite: ['iqa-13720'],
      },
      {
        q: 'What role does intention play in waqf?',
        a: 'Waqf is a good deed and a way of drawing closer to Allah. Intention and a good purpose are therefore of great importance in it. The founder must have a sincere, good intention and direct the benefit of the waqf in a lawful and useful way.',
        cite: ['iqa-13720'],
      },
      {
        q: 'Who manages a waqf?',
        a: 'The founder may appoint a person or an organization as a "nazir" (custodian) to manage the waqf. The nazir is responsible for the waqf\u2019s property as a trust and is obliged to preserve it, manage it properly, and act according to the conditions of the waqf and the requirements of Sharia. If no nazir has been appointed, management follows the waqf deed and applicable law.',
        cite: ['iqa-13720'],
      },
      {
        q: 'Is a cash waqf permissible?',
        a: 'Among earlier scholars there was some disagreement over cash waqf. Today, many contemporary scholars and fiqh institutions consider a cash waqf permissible, provided Sharia conditions are met: the principal sum is preserved or reasonably invested, and its benefit or income is directed toward the waqf\u2019s purposes.',
        cite: ['emerald-cash-waqf'],
      },
      {
        q: 'Where can I learn more?',
        a: 'For further study, one can turn to books on the fiqh of waqf, contemporary research, and the AAOIFI standards on waqf. These sources explain in detail the issues of establishing, managing, investing, preserving, and distributing the benefit of a waqf.',
        cite: ['aaoifi-ss33'],
      },
    ],
  },

  legal: {
    eyebrow: 'Legal basis',
    title: 'The legal basis in Tajikistan',
    lead: 'Only what is confirmed by the text of the document is included here. We do not present general norms as a "law on waqf".',
    docs: {
      charity: {
        badge: 'Law',
        title: 'Law of the Republic of Tajikistan "On Charitable Activity"',
        meta: 'No. 18 of 22.04.2003 · as amended in 2018 and 2022',
        regulatesTitle: 'What the law says',
        points: [
          {
            ref: 'Art. 2',
            text: 'A donation is voluntary, gratuitous assistance in monetary or other form to non-commercial organizations or to persons in need, for charitable purposes. Donors have the right to determine the purposes and manner of use of their donations.',
          },
          {
            ref: 'Art. 3',
            text: 'Purposes of charitable activity: social support, help for families and children, healthcare, education, science, culture, environmental protection, and other socially significant purposes.',
          },
          {
            ref: 'Art. 14',
            text: 'Entrepreneurial activity is permitted only to achieve the purposes for which the organization was created, and in accordance with them. To create the material conditions it needs, the organization may establish business entities, but not jointly with other persons.',
          },
          {
            ref: 'Arts. 17–18',
            text: 'Sources of property: charitable donations, income from permitted entrepreneurial activity, and income from business entities established by the organization. No more than 20% of the financial year\u2019s expenses may go toward administrative staff salaries.',
          },
          {
            ref: 'Art. 19',
            text: 'Any excess of income over budget expenses is not distributed among founders (members) but is directed toward the organization\u2019s purposes.',
          },
          {
            ref: 'Art. 22',
            text: 'The organization provides open, unimpeded access to its annual reports. Information on income, property, and expenses cannot constitute a commercial secret.',
          },
        ],
        relationTitle: 'How this relates to the Waqf',
        relation:
          'The law sets a framework for an organization that receives funds for the common good: purposes, use of donations, reporting. Article 2 comes closest to the idea of Waqf — separating the core asset from its benefit. The law does not call this "waqf" and does not describe it as a separate institution; but the rules that any charitable organization follows, including one implementing a Waqf, are established here.',
        cite: ['law-charity'],
      },
    },
    readDoc: 'Read the document',
    pending: 'The document will be published',
    mechanism: {
      title: 'Entrepreneurial activity \u2192 income \u2192 the organization\u2019s purposes',
      lead: 'If an organization carries out entrepreneurial activity, the law allows its income to be directed toward charitable purposes — under certain conditions. Here they are, according to the text of the Law.',
      steps: [
        {
          label: 'Activity matches the organization\u2019s purposes',
          ref: 'Art. 14: entrepreneurial activity is permitted only to achieve the purposes for which the organization was created',
        },
        {
          label: 'The organization\u2019s business entity',
          ref: 'Art. 14: to create the material conditions it needs, the organization may establish business entities, but not jointly with other persons',
        },
        {
          label: 'Income — a source of property',
          ref: 'Art. 17: income from lawfully permitted entrepreneurial activity and from business entities established by the organization',
        },
        {
          label: 'Use in accordance with the law',
          ref: 'Art. 19: any excess of income over expenses is not distributed among founders (members), but is directed toward the organization\u2019s purposes',
        },
        {
          label: 'Social purposes and open reporting',
          ref: 'Art. 3: the list of charitable purposes; Art. 22: open access to annual reporting',
        },
      ],
    },
  },

  why: {
    eyebrow: 'Benefit',
    title: 'Why does waqf matter?',
    lead: {
      text: 'The essence of waqf is that the benefit of a good deed does not end with a single act of help, but continues for a long time. Throughout history, waqfs have played an important role in providing water, advancing knowledge and education, supporting healthcare, and helping those in need.',
      cite: ['h-muslim-1631'],
    },
    benefits: [
      {
        title: 'A continuous good',
        text: 'Its benefit and reward can continue for many years.',
        cite: ['h-muslim-1631'],
      },
      {
        title: 'Preserving the core asset',
        text: 'The waqf\u2019s property is preserved, while its benefit or income is used.',
      },
      {
        title: 'A lasting source of good',
        text: 'Creates a steady source of funds for social and charitable work.',
      },
      {
        title: 'Supporting the community',
        text: 'Helps with education, healthcare, support for those in need, and other social needs.',
      },
      {
        title: 'Economic development',
        text: 'Waqf assets can be invested in line with Sharia, generating income and jobs.',
      },
      {
        title: 'Mutual help',
        text: 'Strengthens a culture of giving, social responsibility, and mutual support.',
      },
    ],
    projectsTitle: 'Saliheen\u2019s projects',
    projectsLead:
      'These are the organization\u2019s active projects on its official website — they show where Saliheen already works. The organization will determine which directions are funded specifically from the Waqf; they will appear below.',
    viewProject: 'Open on saliheen.tj',
    allProjects: 'All projects on saliheen.tj',
    directionsTitle: 'Waqf directions',
    placeholderTitle: 'Waqf directions will be published once confirmed',
    placeholderText:
      'We do not list directions the organization has not yet confirmed. Once they are confirmed, specific goals, descriptions, and links to reports will appear here.',
  },

  transparency: {
    eyebrow: 'Transparency',
    title: 'Where the funds go',
    lead: {
      text: 'By law, a charitable organization provides open access to its annual reporting, and information on income, property, and expenses cannot be a commercial secret (Art. 22). Below is where to find the reports.',
      cite: ['law-charity'],
    },
    linksTitle: 'Where to find reports and projects',
    open: 'Open',
    metricsTitle: 'Waqf indicators',
    metricsNote: 'Confirmed figures will appear here. We do not publish estimates or forecasts in place of real data.',
    metricsPlaceholders: ['Waqf assets', 'Directed to purposes', 'Beneficiaries reached', 'Reporting period'],
    metricsEmpty: 'Data in preparation',
  },

  support: {
    eyebrow: 'Support',
    title: 'Support the Waqf',
    lead: {
      text: 'Choose whichever method suits you. Payment is processed on Saliheen\u2019s official website — we do not duplicate or alter the payment details.',
    },
    chooseLabel: 'Choose a method',
    openOfficial: 'Go to payment on saliheen.tj',
    fallbackText: 'Payment is processed on Saliheen\u2019s official donation page, where you\u2019ll also find the payment details and confirmation.',
    qrCaption: 'Point your banking app\u2019s camera at the QR code',
    qrAppsNote: 'Also works through these apps',
    chooseCurrency: 'Transfer currency',
    copy: 'Copy',
    copied: 'Copied',
    secureNote: 'Check the address: payment should go through the official saliheen.tj website.',
    stepsTitle: 'How to do it',
  },

  share: {
    title: 'Share the Waqf',
    text: 'Tell others about the project: a recommendation, too, can become a source of lasting benefit for someone else.',
    native: 'Share',
    copyLink: 'Copy link',
    copied: 'Link copied',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    x: 'X',
    shareVia: 'Share via',
  },

  sources: {
    eyebrow: 'Sources',
    title: 'Sources and verification',
    lead: 'Every Sharia and legal statement on this page is marked with a number [n], which links here. These are the documents and texts that were opened and checked while preparing the site.',
    categories: {
      law: 'Legislation of the Republic of Tajikistan',
      saliheen: 'Saliheen documents and pages',
      quran: 'Qur\u2019an',
      hadith: 'Hadith',
      fiqh: 'Islamic legal sources',
    },
    disclaimerTitle: 'Important note',
    disclaimer:
      'This site is informational and does not constitute a fatwa or legal advice. For decisions about personal property, consult a qualified scholar and a lawyer. Links lead to third-party websites; check the official legislative database for the current version of any law.',
  },

  footer: {
    about: 'The Waqf project is part of the Saliheen organization\u2019s work.',
    contacts: 'Contacts',
    social: 'Follow us',
    mainSite: 'Go to saliheen.tj',
    rights: 'All rights reserved.',
  },
};
