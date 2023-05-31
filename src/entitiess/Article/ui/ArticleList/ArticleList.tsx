/* eslint-disable react/display-name */
import React, { useState, type HTMLAttributeAnchorTarget, memo } from 'react'

import { type ArticleListViewT, type ArticleT } from '@/entitiess/Article/model/types/articleSchema'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { VirtuosoGrid, type GridScrollSeekPlaceholderProps } from 'react-virtuoso'

import s from './ArticleList.module.scss'

interface ArticleListProps {
  limit: number
  isVirtuoso?: boolean
  className?: string
  isLoading?: boolean
  articles: ArticleT[]
  view: ArticleListViewT
  onScrollEnd?: () => void
  target?: HTMLAttributeAnchorTarget
}

function ArticleList (props: ArticleListProps) {

  const {
    view,
    limit,
    target,
    articles,
    isLoading,
    className,
    onScrollEnd,
    isVirtuoso = false
  } = props

  const ScrollSeekPlaceholder = (data: GridScrollSeekPlaceholderProps) => (
    <div
      style={{
        height: data.height,
        padding: '8px',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <div
      >
        <ArticleListItem view={view} isLoading={true}/>
      </div>
    </div>
  )

  const renderSkeletons = () => {
    return Array(limit).fill(0).map((item, ind) => {
      return <ArticleListItem key={ind} view={view} isLoading={true}/>
    })
  }
  
  const renderArticles = () => {

    if (!articles?.length && !isLoading) {
      return <h2>Список статей пуст</h2>
    }

    if (isVirtuoso) {
      
      return (
        <VirtuosoGrid
          data={articles}
          totalCount={100}
          endReached={onScrollEnd}
          style={{ height: 'calc(var(--vh) * 100 - 60px - 117px)', width: '100%' }}
          itemContent={(index, article) => <ArticleListItem key={article.id} article={article} view={view} isLoading={false} target={target}/>}
          // listClassName={classNames(s.articles, {}, [s[view]])}
          components={{
            // eslint-disable-next-line react/prop-types
            List: React.forwardRef(({ style, children }, listRef) => {
              return (
                <div ref={listRef} style={style} className={classNames(s.articles, {}, [s[view]])}>
                  {children}
                  {isLoading ? renderSkeletons() : null}
                </div>
              )
            }),
            ScrollSeekPlaceholder
            // Footer: () => <>{renderSkeletons()}</>
          }}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 400,
            exit: (velocity) => Math.abs(velocity) < 30
          }}
      />
      )
      
    } else {
      return <div  
        className= {classNames(s.articles, {}, [s[view]])}
      >
        {!isLoading
          ? articles.map((article) => {
            return <>
              <ArticleListItem key={article.id} article={article} view={view} isLoading={false} target={target}/>
            </>
          })
          : renderSkeletons()}
      </div>
    }
  }
  
  return (
    <div className={classNames(className)}>
      {renderArticles()}
    </div>
  )
}

export default memo(ArticleList)
