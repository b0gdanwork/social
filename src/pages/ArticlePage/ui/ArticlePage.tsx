/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { ArticleList, ArticleListViewT } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useCallback, useEffect } from 'react'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { featchArticles } from '../model/services/featchArticles'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/ArticlesPageSlice'
import { useSelector } from 'react-redux'
import { getArticlePageError, getArticlePageHasMore, getArticlePageInited, getArticlePageIsLoading, getArticlePageLimit, getArticlePagePageNum, getArticlePageView } from '../model/selectors/articlePageSelectors'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import ArticlePageFilters from './ArticlePageFilters/ArticlePageFilters'

export default function ArticlePage () {

  const dispath = useAppDispath()

  const articles = useSelector(getArticles.selectAll)
  const error = useSelector(getArticlePageError)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)
  const page = useSelector(getArticlePagePageNum) || 1
  const hasMore = useSelector(getArticlePageHasMore) 
  const limit = useSelector(getArticlePageLimit) 
  const inited = useSelector(getArticlePageInited)

  const onScrollEnd = useCallback(() => {
    if (hasMore && !isLoading) {
      const newPage = page + 1
      dispath(articlesPageActions.setPage(newPage))
      dispath(featchArticles({ page: newPage }))
    }
  }, [dispath, page, hasMore, isLoading])

  useEffect(() => {
    if (!inited) {
      dispath(articlesPageActions.init())
      dispath(featchArticles({ page: 1 }))
    }
  }, [dispath])

  return (
    <DynamicModuleLoader reducerKey='articlesPage' reducer={articlesPageReducer}>
      <PageLayout onScrollEnd={onScrollEnd}>
        {!error 
          ? <>
            <ArticlePageFilters />
            <ArticleList 
              view={view || ArticleListViewT.grid}
              isLoading={isLoading}
              articles={articles}
              limit={limit}
              style={{ marginTop: 10 }}
            />
          </>
          : error}
      </PageLayout>
    </DynamicModuleLoader>
  )
}
