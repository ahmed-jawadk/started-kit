import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  }
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
