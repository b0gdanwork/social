import { type CommentT } from 'entitiess/Comment/model/types'
import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { type StoreSchema } from 'app/providers/StoreProvider'

const commentsAdapter = createEntityAdapter<CommentT>({
  selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StoreSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'books',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {
    bookAdded: commentsAdapter.addOne,
    booksReceived (state, action) {
      commentsAdapter.setAll(state, action.payload.books)
    }
  }
})

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
