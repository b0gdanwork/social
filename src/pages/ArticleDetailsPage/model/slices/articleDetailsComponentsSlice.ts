import { type CommentT } from '@/entitiess/Comment/model/types'
import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { type StoreSchema } from '@/app/providers/StoreProvider'
import { featchCommentsByArrticleId } from '../services/featchCommentsByArrticleId'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<CommentT>({
  selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StoreSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
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
  },
  extraReducers: (builder) => {
    builder.addCase(featchCommentsByArrticleId.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(featchCommentsByArrticleId.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = undefined
      commentsAdapter.setAll(state, action.payload)

    })
    builder.addCase(featchCommentsByArrticleId.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })    
  }
})

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
