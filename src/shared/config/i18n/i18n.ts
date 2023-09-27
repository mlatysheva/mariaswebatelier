import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath:
      __IS_DEV__ ? '../../locales/{{lng}}/{{ns}}.json'
        : '/locales/{{lng}}/{{ns}}.json',
    },
  });

i18n.changeLanguage('en');

export default i18n;
