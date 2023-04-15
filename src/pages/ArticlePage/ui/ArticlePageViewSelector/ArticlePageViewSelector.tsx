import React, { memo } from 'react'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice'
import { ArticleListViewT } from 'entitiess/Article'

import { BsFillGridFill, BsList } from 'react-icons/bs'

import s from './ArticlePageViewSelector.module.scss'

function ArticlePageViewSelector () {

  const dispath = useAppDispath()
  
  const changeList = () => {
    dispath(articlesPageActions.setArticlePageView(ArticleListViewT.list))
  }

  const changeGrid = () => {
    dispath(articlesPageActions.setArticlePageView(ArticleListViewT.grid))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.item} onClick={changeGrid}>
        <BsFillGridFill size={20}/>
      </div>
      <div className={s.item} onClick={changeList}>
        <BsList size={35} style={{ margin: -4 }}/>
      </div>
    </div>
  )
}

export default memo(ArticlePageViewSelector)
