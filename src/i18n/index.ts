import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '../locales/es.json'
import en from '../locales/en.json'
import ko from '../locales/ko.json'
import zh from '../locales/zh.json'
import deAT from '../locales/de-AT.json'
import fr from '../locales/fr.json'

export const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'de-AT', name: 'Österreichisch', flag: '🇦🇹' },
] as const

export type LocaleCode = (typeof languages)[number]['code']

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr },
    ko: { translation: ko },
    zh: { translation: zh },
    'de-AT': { translation: deAT },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

export default i18n
