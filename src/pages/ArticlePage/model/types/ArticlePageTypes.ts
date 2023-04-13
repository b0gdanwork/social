import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleT } from 'entitiess/Article'
import { type ArticleListViewT } from 'entitiess/Article/model/types/articleSchema'

export interface ArticlePageSchema extends EntityState<ArticleT> {
  isLoading?: boolean,
  error?: string,
  view?: ArticleListViewT
  // ids: string[],
  // entities: Record<any, any>
}
