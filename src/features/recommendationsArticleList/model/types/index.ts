import {
  type EntityState
} from '@reduxjs/toolkit'
import { type ArticleT } from '@/entitiess/Article'

export interface RecomendationArticlesSchema extends EntityState<ArticleT> {
  isLoading?: boolean,
  error?: string,
  // ids: string[],
  // entities: Record<any, any>
}
