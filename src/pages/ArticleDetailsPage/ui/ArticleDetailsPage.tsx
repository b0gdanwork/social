import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'

import { Divider } from 'shared/ui'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { PageLayout } from 'pages/PageLayout'
import { ArticleDetails, ArticleList, ArticleListViewT } from 'entitiess/Article'
import { featchCommentsByArrticleId } from '../model/services/featchCommentsByArrticleId'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsComponentsSlice'
import { getCommentsArticleIsLoading } from '../model/selectors/comments'
import { CommentList } from 'entitiess/Comment'
import { addCommentForArticle, AddCommentForm } from 'features/addCommentForm'

import { articleDetailsRecommendationsReducer, getArticleRecomendations } from '../model/slices/articleDetailsRecommendationsSlice'
import { getRecomendationsArticleDetailsIsLoading } from '../model/selectors/recommendations'
import { featchRecomendationArticles } from '../model/services/featchRecomendationArticles'

import s from './ArticleDetailsPage.module.scss'

const reducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recomendations: articleDetailsRecommendationsReducer
})

export default function ArticleDetailsPage () {

  const { t } = useTranslation()
  const { id } = useParams()

  const dispatch = useAppDispath()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoadingComments = useSelector(getCommentsArticleIsLoading)
  const articlesRecomended = useSelector(getArticleRecomendations.selectAll)
  const articlesRecomendedIsLoading = useSelector(getRecomendationsArticleDetailsIsLoading)

  useEffect(() => {
    dispatch(featchCommentsByArrticleId(id))
    dispatch(featchRecomendationArticles({ limit: 4 }))
  }, [id])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [])
  
  return (
    <DynamicModuleLoader reducer={reducer} reducerKey={'articleDetailsPage'}>
      <PageLayout>
        <ArticleDetails id={id}/>
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <h2>Рекомендованные статьи</h2>
        <Divider mobileSize='m-10' desctopSize='d-10'/>
        <ArticleList 
          isLoading={articlesRecomendedIsLoading} 
          articles={articlesRecomended} 
          limit={4}
          view={ArticleListViewT.grid}
          target={'_blank'}
        />
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <h2>Комментарии</h2>
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
