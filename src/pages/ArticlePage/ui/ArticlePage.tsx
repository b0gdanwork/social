/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { ArticleList, ArticleListViewT } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useCallback, useEffect } from 'react'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { featchArticles } from '../model/services/featchArticles'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/ArticlesPageSlice'
import { useSelector } from 'react-redux'
import { getArticlePageError, getArticlePageHasMore, getArticlePageIsLoading, getArticlePageLimit, getArticlePagePageNum, getArticlePageView } from '../model/selectors/articlePageSelectors'
import ArticlePageViewSelector from './ArticlePageViewSelector/ArticlePageViewSelector'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export default function ArticlePage () {

  const dispath = useAppDispath()

  const articles = useSelector(getArticles.selectAll)
  const error = useSelector(getArticlePageError)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)
  const page = useSelector(getArticlePagePageNum) || 1
  const hasMore = useSelector(getArticlePageHasMore) 
  const limit = useSelector(getArticlePageLimit) 

  const onScrollEnd = useCallback(() => {
    console.log('hasMore', hasMore)
    if (hasMore && !isLoading) {
      console.log('onScrollEnd')
      const newPage = page + 1
      dispath(articlesPageActions.setPage(newPage))
      dispath(featchArticles({ page: newPage }))
    }
  }, [dispath, page, hasMore, isLoading])

  useEffect(() => {
    dispath(articlesPageActions.init())
    dispath(featchArticles({ page: 1 }))
  }, [dispath])

  return (
    <DynamicModuleLoader reducerKey='articlesPage' reducer={articlesPageReducer}>
      <PageLayout onScrollEnd={onScrollEnd}>
        {!error 
          ? <>
            <ArticlePageViewSelector />
            <ArticleList 
              view={view || ArticleListViewT.grid}
              isLoading={isLoading}
              articles={articles}
              limit={limit}
            />
          </>
          : error}
      </PageLayout>
    </DynamicModuleLoader>
  )
}
