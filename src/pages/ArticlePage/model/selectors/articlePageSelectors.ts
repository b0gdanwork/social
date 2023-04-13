import { type StoreSchema } from 'app/providers/StoreProvider'

export const getArticlePageError = (state: StoreSchema) => state.articlesPage?.error
export const getArticlePageIsLoading = (state: StoreSchema) => state.articlesPage?.isLoading
export const getArticlePageView = (state: StoreSchema) => state.articlesPage?.view
