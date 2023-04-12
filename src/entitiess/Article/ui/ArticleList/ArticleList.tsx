import { type ArticleListViewT, type ArticleT } from 'entitiess/Article/model/types/articleSchema'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

import s from './ArticleList.module.scss'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

interface ArticleListProps {
  view: ArticleListViewT
  isLoading?: boolean
  articles: ArticleT[]
}

export default function ArticleList (props: ArticleListProps) {

  const {
    view,
    articles,
    isLoading
  } = props
  
  const renderArticles = () => {
    if (articles.length) {
      return articles.map((article) => {
        return <ArticleListItem key={article.id} article={article} view={view} isLoading={isLoading}/>
      })
    } else {
      return <h2>Список статей пуст</h2>
    }

  }

  const renderSkeletons = () => {
    return Array(12).fill(0).map((item, ind) => {
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
      {!isLoading ? renderArticles() : renderSkeletons()}
    </div>
  )
}
