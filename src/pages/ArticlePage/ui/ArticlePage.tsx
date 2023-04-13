import { ArticleList, ArticleListViewT } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useEffect, useState } from 'react'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { featchArticles } from '../model/services/featchArticles'
import { getArticles } from '../model/slices/ArticlesPageSlice'
import { useSelector } from 'react-redux'
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../model/selectors/articlePageSelectors'
import ArticlePageViewSelector from './ArticlePageViewSelector/ArticlePageViewSelector'

export default function ArticlePage () {

  const dispath = useAppDispath()
  const error = useSelector(getArticlePageError)
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)

  useEffect(() => {
    dispath(featchArticles())
  }, [dispath])

  return (
    <PageLayout>
      {!error 
        ? <>
          <ArticlePageViewSelector />
          <ArticleList 
            view={view || ArticleListViewT.grid}
            isLoading={isLoading}
            articles={articles}
            />
        </>
        : error}
    </PageLayout>
  )
}
