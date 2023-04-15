import {
  createEntityAdapter,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'
import { ArticleListViewT, type ArticleT } from 'entitiess/Article'
import { type ArticlePageSchema } from '../types/ArticlePageTypes'
import { featchArticles } from '../services/featchArticles'
import { ARTICLE_PAGE_VIEW } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<ArticleT>({
  selectId: (comment) => comment.id
})

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state?.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
    view: ArticleListViewT.grid,
    hasMore: true, 
    limit: 4,
    page: 1
  }),
  reducers: {
    setArticlePageView: (state, action: PayloadAction<ArticleListViewT>) => {
      state.view = action.payload
      localStorage[ARTICLE_PAGE_VIEW] = action.payload
    },
    init: (state) => {
      const value = localStorage[ARTICLE_PAGE_VIEW]
      if (value) {
        state.view = value
      }
      state.limit = state.view === ArticleListViewT.list ? 4 : 9
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(featchArticles.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(featchArticles.fulfilled, (state, action: PayloadAction<ArticleT[]>) => {
      state.isLoading = false
      state.error = undefined
      articlesAdapter.addMany(state, action.payload)
      state.hasMore = action.payload.length > 0 && action.payload.length === state.limit

    })
    builder.addCase(featchArticles.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })    
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice
