import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

import { type StoreSchema } from "@/app/providers/StoreProvider"

import { type ArticleT } from "@/entitiess/Article"

import { featchRecomendationArticles } from "../services/featchRecomendationArticles"
import { type RecomendationArticlesSchema } from "../types"

const recomendationsAdapter = createEntityAdapter<ArticleT>({
	selectId: (article) => article.id,
})

export const getArticleRecomendations = recomendationsAdapter.getSelectors<StoreSchema>(
	(state) => state.articleDetailsPage?.recomendations || recomendationsAdapter.getInitialState()
)

const recomendationArticlesSlice = createSlice({
	name: "recomendationArticles",
	initialState: recomendationsAdapter.getInitialState<RecomendationArticlesSchema>({
		error: undefined,
		isLoading: false,
		ids: [],
		entities: {},
	}),
	reducers: {
		bookAdded: recomendationsAdapter.addOne,
		booksReceived(state, action) {
			recomendationsAdapter.setAll(state, action.payload.books)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(featchRecomendationArticles.pending, (state) => {
			state.isLoading = true
			state.error = undefined
			recomendationsAdapter.removeAll(state)
		})
		builder.addCase(featchRecomendationArticles.fulfilled, (state, action) => {
			state.isLoading = false
			state.error = undefined
			recomendationsAdapter.setAll(state, action.payload)
		})
		builder.addCase(featchRecomendationArticles.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})
	},
})

export const { reducer: recomendationArticlesReducer, actions: recomendationArticlesActions } =
	recomendationArticlesSlice
