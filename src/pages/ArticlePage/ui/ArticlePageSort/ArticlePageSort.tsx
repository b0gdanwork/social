
import { type ReactNode, memo, useCallback } from 'react'

import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticlePageOrder, getArticlePageSort } from 'pages/ArticlePage/model/selectors/articlePageSelectors'
import { articlesPageActions } from 'pages/ArticlePage/model/slices/ArticlesPageSlice'
import { ArticleSortField, ArticleSortOrder } from 'entitiess/Article/model/types/articleSchema'
import { AppSelect } from 'shared/ui'

import s from './ArticlePageSort.module.scss'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { featchArticles } from 'pages/ArticlePage/model/services/featchArticles'

interface Props {}

const optionsSort: Array<{ value: ArticleSortField, label: string }> = [
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

const optionsSortDirection: Array<{ value: ArticleSortOrder, label: ReactNode }> = [
  {
    label: <AiOutlineArrowDown size={20}/>,
    value: ArticleSortOrder.desc
  },
  {
    label: <AiOutlineArrowUp size={20}/>,
    value: ArticleSortOrder.asc
  }
]

function ArticlePageFilters ({}: Props) {

  const dispath = useAppDispath()
  
  const sort = useSelector(getArticlePageSort)
  const order = useSelector(getArticlePageOrder)

  const changeSort = useCallback((value: any) => {
    dispath(articlesPageActions.setSort(value))
    dispath(featchArticles({ replace: true }))
  }, [dispath])

  const changeOrder = useCallback((value: any) => {
    dispath(articlesPageActions.setOrder(value))
    dispath(featchArticles({ replace: true }))
  }, [dispath])

  return (
    <>
      <div className={s.wrapper}>
        <AppSelect options={optionsSortDirection} value={order} onChange={changeOrder}/>
        <AppSelect label={'Сортировать по:'} className={s.select} options={optionsSort} value={sort} onChange={changeSort}/>
      </div>
    </>
  )
}

export default memo(ArticlePageFilters)
