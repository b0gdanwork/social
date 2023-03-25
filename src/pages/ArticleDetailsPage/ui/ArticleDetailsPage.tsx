import { ArticleDetails } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

export default function ArticleDetailsPage () {
  const { t } = useTranslation()
  const { id } = useParams()

  return (
    <PageLayout>
      <ArticleDetails id={id}/>
    </PageLayout>
  )
}
