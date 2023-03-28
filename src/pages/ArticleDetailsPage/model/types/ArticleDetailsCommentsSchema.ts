import { type CommentT } from 'entitiess/Comment/model/types'
import {
  type EntityState
} from '@reduxjs/toolkit'

export interface ArticleDetailsCommentsSchema extends EntityState<CommentT> {
  isLoading?: boolean,
  error?: string,
  // ids: string[],
  // entities: Record<any, any>
}
