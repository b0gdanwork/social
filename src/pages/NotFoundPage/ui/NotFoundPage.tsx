import { useTranslation } from 'react-i18next'

import s from './NotFoundPage.module.scss'

export default function NotFoundPage () {
  const { t } = useTranslation()

  return (
    <div className={s.NotFoundPage}>
      <h1>404</h1>
      <span>{t('Страница не найдена')}</span>
    </div>
  )
}
