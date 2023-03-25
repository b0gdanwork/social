import { PageLayout } from 'pages/PageLayout'
import { useTranslation } from 'react-i18next'

export default function ArticlePage () {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <div>Статьи</div>
    </PageLayout>
  )
}
