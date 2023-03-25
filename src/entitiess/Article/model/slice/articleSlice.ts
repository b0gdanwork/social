import { createSlice } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type ArticleDetailsSchema } from '../types/articleSchema'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  readonly: true,
  error: undefined,
  isLoading: false
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetailsDetails',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.data = undefined
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.data = undefined
      state.error = action.payload as string
      state.isLoading = true
    })
  }
})

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice

export default articleDetailsSlice.reducer
