import { AppInput } from 'shared/ui'
import ArticlePageViewSelector from '../ArticlePageViewSelector/ArticlePageViewSelector'
import { memo, useCallback } from 'react'

import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticlePageSearch } from 'pages/ArticlePage/model/selectors/articlePageSelectors'
import { articlesPageActions } from 'pages/ArticlePage/model/slices/ArticlesPageSlice'
import ArticlePageSort from '../ArticlePageSort/ArticlePageSort'

import s from './ArticlePageFilters.module.scss'
import { featchArticles } from 'pages/ArticlePage/model/services/featchArticles'

interface Props {}

function ArticlePageFilters ({}: Props) {

  const dispath = useAppDispath()
  
  const searchValue = useSelector(getArticlePageSearch)

  const changeSearch = useCallback((value: string) => {
    dispath(articlesPageActions.setSearch(value))
    dispath(featchArticles({ replace: true }))
  }, [dispath])

  return (
    <>
      <div className={s.wrapper}>
        <ArticlePageSort />
        <AppInput value={searchValue} onChange={changeSearch} label={'Поиск'}/>
        <ArticlePageViewSelector />
      </div>
    </>
  )
}

export default memo(ArticlePageFilters)
