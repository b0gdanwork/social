import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { type StoreSchema } from "@/app/providers/StoreProvider"
import { ArticleListViewT, type ArticleT } from "@/entitiess/Article"
import { type ArticlePageSchema } from "../types/ArticlePageTypes"
import { featchArticles } from "../services/featchArticles"
import { ARTICLE_PAGE_VIEW } from "@/shared/const/localstorage"
import { ArticleSortField, ArticleSortOrder, ArticleType } from "@/entitiess/Article"
import { getSearchParams } from "@/shared/lib/helpers/urlHelpers/urlHelpers"

const articlesAdapter = createEntityAdapter<ArticleT>({
	selectId: (comment) => comment.id,
})

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
	(state) => state?.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
	name: "articlesPage",
	initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
		__inited: false,

		ids: [],
		entities: {},
		error: undefined,
		isLoading: false,

		view: ArticleListViewT.grid,
		hasMore: true,
		limit: 4,
		page: 1,

		order: ArticleSortOrder.desc,
		search: "",
		sort: ArticleSortField.VIEWS,
		type: ArticleType.ALL,
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
			const params = getSearchParams()

			Object.entries(params).forEach(([name, value]) => {
				if (name === "sort" || name === "order" || name === "search") {
					state[name] = value as never
				}
			})

			state.__inited = true
			state.limit = state.view === ArticleListViewT.list ? 4 : 9
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setOrder: (state, action: PayloadAction<ArticleSortOrder>) => {
			state.order = action.payload
			state.page = 1
		},
		setType: (state, action: PayloadAction<ArticleType>) => {
			state.type = action.payload
		},
		setSort: (state, action: PayloadAction<ArticleSortField>) => {
			state.sort = action.payload
			state.page = 1
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
			state.page = 1
		},
	},
	extraReducers: (builder) => {
		builder.addCase(featchArticles.pending, (state, action) => {
			state.isLoading = true
			state.error = undefined
			if (action.meta.arg?.replace) {
				articlesAdapter.removeAll(state)
			}
		})
		builder.addCase(featchArticles.fulfilled, (state, action) => {
			state.isLoading = false
			state.error = undefined
			if (action.meta.arg?.replace) {
				articlesAdapter.setAll(state, action.payload)
			} else {
				articlesAdapter.addMany(state, action.payload)
			}
			state.hasMore = action.payload.length > 0 && action.payload.length === state.limit
		})
		builder.addCase(featchArticles.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})
	},
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice
