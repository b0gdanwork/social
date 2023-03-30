import { ArticleDetails } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { Divider } from 'shared/ui'
import { useAppDispath } from '../../../shared/lib/hooks/useAppDispath/useAppDispath'
import { useEffect } from 'react'
import { featchCommentsByArrticleId } from '../model/services/featchCommentsByArrticleId'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsComponentsSlice'
import { useSelector } from 'react-redux'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getCommentsArticleIsLoading } from '../model/selectors'
import { CommentList } from 'entitiess/Comment'

export default function ArticleDetailsPage () {
  const { t } = useTranslation()
  const { id } = useParams()

  const dispatch = useAppDispath()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoadingComments = useSelector(getCommentsArticleIsLoading)

  useEffect(() => {
    dispatch(featchCommentsByArrticleId(id))
  }, [id])
  
  return (
    <DynamicModuleLoader reducer={articleDetailsCommentsReducer} reducerKey='articleDetailsComments'>

      <PageLayout>
        <ArticleDetails id={id}/>
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <h2>Комментарии</h2>
        <CommentList
          isLoading={isLoadingComments}
          comments={comments}
        />
      </PageLayout>
    </DynamicModuleLoader>
  )
}
