import { useParams } from 'react-router'
import { combineReducers } from '@reduxjs/toolkit'

import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { articleDetailsCommentsReducer } from '../model/slices/articleDetailsComponentsSlice'
import { recomendationArticlesReducer } from 'features/recommendationsArticleList/model/slices/articleDetailsRecommendationsSlice'

import { Divider } from 'shared/ui'
import { PageLayout } from 'pages/PageLayout'
import { ArticleDetails } from 'entitiess/Article'
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { RecommendationArticlesList } from 'features/recommendationsArticleList'
import CommentsList from './CommentsList/CommentsList'

const reducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recomendations: recomendationArticlesReducer
})

export default function ArticleDetailsPage () {

  const { id } = useParams()

  if (!id) {
    // eslint-disable-next-line i18next/no-literal-string
    return <>!id</>
  }
  
  return (
    <DynamicModuleLoader reducer={reducer} reducerKey={'articleDetailsPage'} >
      <PageLayout saveScrollPosition={true}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id}/>
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <RecommendationArticlesList id={id}/>
        <Divider mobileSize='m-30' desctopSize='d-30'/>
        <CommentsList id={id}/>
      </PageLayout>
    </DynamicModuleLoader>
  )
}
