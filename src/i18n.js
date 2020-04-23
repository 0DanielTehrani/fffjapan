import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import resources from './locales/resources';

i18n
.use(initReactI18next)
.use(LngDetector)
.init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
