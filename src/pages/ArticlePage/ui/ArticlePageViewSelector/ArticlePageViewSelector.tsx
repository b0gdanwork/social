import React, { memo } from 'react'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'

import { articlesPageActions } from '../../model/slices/ArticlesPageSlice'
import { ArticleListViewT } from 'entitiess/Article'

import { BsFillGridFill, BsList } from 'react-icons/bs'

import s from './ArticlePageViewSelector.module.scss'
import { useSelector } from 'react-redux'
import { getArticlePageView } from 'pages/ArticlePage/model/selectors/articlePageSelectors'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

function ArticlePageViewSelector () {

  const dispath = useAppDispath()
  const view = useSelector(getArticlePageView)
  
  const changeList = () => {
    dispath(articlesPageActions.setArticlePageView(ArticleListViewT.list))
  }

  const changeGrid = () => {
    dispath(articlesPageActions.setArticlePageView(ArticleListViewT.grid))
  }

  return (
    <div className={s.wrapper}>
      <div className={classNames(s.item, { [s.active]: view === ArticleListViewT.grid })} onClick={changeGrid}>
        <BsFillGridFill size={20}/>
      </div>
      <div className={classNames(s.item, { [s.active]: view === ArticleListViewT.list })} onClick={changeList}>
        <BsList size={35} style={{ margin: -4 }}/>
      </div>
    </div>
  )
}

export default memo(ArticlePageViewSelector)
