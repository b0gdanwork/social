import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const options = {
  // lng: 'en', // if you're using a language detector, do not define the lng option
  debug: !!__IS_DEV__,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  backendOptions: [{
    loadPath: '/public/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: true
  }]
}

/* eslint-disable @typescript-eslint/no-floating-promises */
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options)

export default i18n
