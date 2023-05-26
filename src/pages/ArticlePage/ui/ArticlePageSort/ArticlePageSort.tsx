
import { type ReactNode, memo, useCallback } from 'react'

import { useAppDispath } from '@/shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticlePageOrder, getArticlePageSort } from '../../model/selectors/articlePageSelectors'
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice'
import { ArticleSortField, ArticleSortOrder } from '@/entitiess/Article/model/types/articleSchema'
import { AppSelect } from '@/shared/ui'

import s from './ArticlePageSort.module.scss'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

interface Props {
  fetchData: any
}

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

function ArticlePageFilters ({ fetchData }: Props) {

  const dispath = useAppDispath()
  
  const sort = useSelector(getArticlePageSort)
  const order = useSelector(getArticlePageOrder)

  const changeSort = useCallback((value: any) => {
    dispath(articlesPageActions.setSort(value))
    fetchData()
  }, [dispath, fetchData])

  const changeOrder = useCallback((value: any) => {
    dispath(articlesPageActions.setOrder(value))
    fetchData()
  }, [dispath, fetchData])

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
