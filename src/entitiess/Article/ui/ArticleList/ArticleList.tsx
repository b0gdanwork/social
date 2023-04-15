import { type ArticleListViewT, type ArticleT } from 'entitiess/Article/model/types/articleSchema'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

import s from './ArticleList.module.scss'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { memo } from 'react'

interface ArticleListProps {
  view: ArticleListViewT
  isLoading?: boolean
  articles: ArticleT[]
  limit: number
}

function ArticleList (props: ArticleListProps) {

  const {
    view,
    articles,
    isLoading,
    limit
  } = props
  
  const renderArticles = () => {
    if (articles.length) {
      return articles.map((article) => {
        return <ArticleListItem key={article.id} article={article} view={view} isLoading={false}/>
      })
    } else if (!articles.length && !isLoading) {
      return <h2>Список статей пуст</h2>
    }

    return <></>
  }

  const renderSkeletons = () => {
    return Array(limit).fill(0).map((item, ind) => {
      return <ArticleListItem key={ind} view={view} isLoading={isLoading}/>
    })
  }

  return (
    <div className={
      classNames(
        s.articles, 
        { 
          [s.articleGrid]: view === 'grid',
          [s.articleList]: view === 'list'
        })
    }>
      {renderArticles()}
      {isLoading ? renderSkeletons() : null}
    </div>
  )
}

export default memo(ArticleList)
