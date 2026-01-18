import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import ar from './ar.json'
import en from './en.json'

const messages = {
  ar,
  en,
}

export default function (app: App) {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
  })

  app.use(i18n)
}
