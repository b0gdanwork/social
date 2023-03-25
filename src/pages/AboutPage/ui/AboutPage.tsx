import { PageLayout } from 'pages/PageLayout'
import { useTranslation } from 'react-i18next'

export default function AboutPage () {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <div>{t('О компании')}</div>
    </PageLayout>
  )
}
