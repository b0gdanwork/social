import { AppInput, Divider } from 'shared/ui'
import ArticlePageViewSelector from '../ArticlePageViewSelector/ArticlePageViewSelector'
import { memo, useCallback } from 'react'

import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticlePageSearch, getArticlePageType } from 'pages/ArticlePage/model/selectors/articlePageSelectors'
import { articlesPageActions } from 'pages/ArticlePage/model/slices/ArticlesPageSlice'
import ArticlePageSort from '../ArticlePageSort/ArticlePageSort'

import s from './ArticlePageFilters.module.scss'
import { featchArticles } from 'pages/ArticlePage/model/services/featchArticles'
import debounce from 'lodash/debounce'
import { ArticleType } from 'entitiess/Article'
import Tabs from 'shared/ui/Tabs/Tabs'

interface Props {}

const dataTabs = [
  {
    value: ArticleType.ALL,
    label: 'ALL'
  },
  {
    value: ArticleType.IT,
    label: 'IT'
  },
  {
    value: ArticleType.ECONOMICS,
    label: 'ECONOMICS'
  },
  {
    value: ArticleType.SCINCE,
    label: 'SCINCE'
  }
]

function ArticlePageFilters ({}: Props) {

  const dispath = useAppDispath()
  
  const searchValue = useSelector(getArticlePageSearch)
  const valueType = useSelector(getArticlePageType) 

  const fetchData = useCallback(debounce(() => {
    dispath(featchArticles({ replace: true }))
  }, 500), [])

  const changeSearch = useCallback((value: string) => {
    dispath(articlesPageActions.setSearch(value))
    fetchData()
  }, [dispath, fetchData])

  const changeTab = useCallback((value: ArticleType) => {
    if (valueType !== value) {
      dispath(articlesPageActions.setType(value))
    }
    fetchData()
  }, [dispath, valueType])

  return (
    <>
      <div className={s.wrapper}>
        <ArticlePageSort fetchData={fetchData}/>
        <AppInput value={searchValue} onChange={changeSearch} label={'Поиск'}/>
        <ArticlePageViewSelector />
      </div>
      <Divider desctopSize='d-15' mobileSize='m-15'/>
      <Tabs callback={changeTab} data={dataTabs} value={valueType}/>
    </>
  )
}

export default memo(ArticlePageFilters)
