import { ArticleDetails } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { CommentList } from 'entitiess/Comment'
import { Divider } from 'shared/ui'

export default function ArticleDetailsPage () {
  const { t } = useTranslation()
  const { id } = useParams()

  return (
    <PageLayout>
      <ArticleDetails id={id}/>
      <Divider mobileSize='m-30' desctopSize='d-30'/>
      <h2>Комментарии</h2>
      <CommentList 
        comments={[]}
      />
    </PageLayout>
  )
}
