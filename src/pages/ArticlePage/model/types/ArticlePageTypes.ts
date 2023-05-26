import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleT } from '@/entitiess/Article'
import { type ArticleSortField, type ArticleListViewT, type ArticleSortOrder, type ArticleType } from '@/entitiess/Article'

export interface ArticlePageSchema extends EntityState<ArticleT> {
  __inited: boolean
  
  isLoading?: boolean,
  error?: string,
  view?: ArticleListViewT,
  limit: number,
  page: number,
  hasMore: boolean,

  sort: ArticleSortField,
  order: ArticleSortOrder,
  search: string,
  type: ArticleType
}
