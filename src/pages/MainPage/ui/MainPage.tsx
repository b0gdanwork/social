import { Counter } from 'entitiess/Counter'
import { useTranslation } from 'react-i18next'

export default function MainPage () {
  const { t } = useTranslation()

  return (
    <>
      <Counter />
      <div>{t('Главная страница')}</div>
    </>
  )
}
