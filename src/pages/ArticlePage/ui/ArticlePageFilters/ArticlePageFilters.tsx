import { AppInput } from 'shared/ui'
import ArticlePageViewSelector from '../ArticlePageViewSelector/ArticlePageViewSelector'
import { memo, useCallback } from 'react'

import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticlePageSearch, getArticlePageSort } from 'pages/ArticlePage/model/selectors/articlePageSelectors'
import { articlesPageActions } from 'pages/ArticlePage/model/slices/ArticlesPageSlice'
import { ArticleSortField } from 'entitiess/Article/model/types/articleSchema'
import ArticlePageSort from '../ArticlePageSort/ArticlePageSort'

import s from './ArticlePageFilters.module.scss'

interface Props {}

const options: Array<{ value: string, label: string }> = [
  {
    label: 'Дата создания',
    value: ArticleSortField.CREATED
  },
  {
    label: 'Заголовок',
    value: ArticleSortField.TITLE
  },
  {
    label: 'Просмотры',
    value: ArticleSortField.VIEWS
  }
]

function ArticlePageFilters ({}: Props) {

  const dispath = useAppDispath()
  
  const searchValue = useSelector(getArticlePageSearch)

  const changeSearch = useCallback((value: string) => {
    dispath(articlesPageActions.setSearch(value))
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
