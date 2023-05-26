import { Counter } from '@/entitiess/Counter'
import { PageLayout } from '@/pages/PageLayout'
import { useTranslation } from 'react-i18next'

export default function MainPage () {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <Counter />
      <div>{t('Главная страница')}</div>
    </PageLayout>
  )
}
