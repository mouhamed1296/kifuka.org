import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationEn from './locales/en/translation.json';
import translationFr from './locales/fr/translation.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: 'fr',
    fallbackLng: 'fr',

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      fr: {
        translations: translationFr,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;