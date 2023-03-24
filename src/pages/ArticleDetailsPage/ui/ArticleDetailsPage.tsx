import { ArticleDetails } from 'entitiess/Article'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

export default function ArticleDetailsPage () {
  const { t } = useTranslation()
  const { id } = useParams()
  return (
    <div>
      <ArticleDetails id={id}/>
    </div>
  )
}
