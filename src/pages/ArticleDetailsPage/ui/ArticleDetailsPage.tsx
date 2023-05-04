import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'

import { Divider } from 'shared/ui'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { PageLayout } from 'pages/PageLayout'
import { ArticleDetails } from 'entitiess/Article'
import { featchCommentsByArrticleId } from '../model/services/featchCommentsByArrticleId'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsComponentsSlice'
import { getCommentsArticleIsLoading } from '../model/selectors/comments'
import { CommentList } from 'entitiess/Comment'
import { addCommentForArticle, AddCommentForm } from 'features/addCommentForm'

import s from './ArticleDetailsPage.module.scss'
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { recomendationArticlesReducer } from 'features/recommendationsArticleList/model/slices/articleDetailsRecommendationsSlice'
import { RecommendationArticlesList } from 'features/recommendationsArticleList'

const reducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recomendations: recomendationArticlesReducer
})

export default function ArticleDetailsPage () {

  const { t } = useTranslation()
  const { id } = useParams()

  const dispatch = useAppDispath()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoadingComments = useSelector(getCommentsArticleIsLoading)

  useEffect(() => {
    dispatch(featchCommentsByArrticleId(id))
  }, [id])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [])

  if (!id) {
    return <></>
  }
  
  return (
    <DynamicModuleLoader reducer={reducer} reducerKey={'articleDetailsPage'} >
      <PageLayout saveScrollPosition={true}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id}/>
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <RecommendationArticlesList id={id}/>
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <h2>{t('Комментарии')}</h2>
        <div className={s.commentForm}>
          <AddCommentForm onSendComment={onSendComment}/>
        </div>
        <CommentList
          isLoading={isLoadingComments}
          comments={comments}
        />
      </PageLayout>
    </DynamicModuleLoader>
  )
}
