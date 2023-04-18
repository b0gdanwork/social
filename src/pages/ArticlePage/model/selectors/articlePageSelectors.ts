import { type StoreSchema } from 'app/providers/StoreProvider'

export const getArticlePageError = (state: StoreSchema) => state.articlesPage?.error
export const getArticlePageIsLoading = (state: StoreSchema) => state.articlesPage?.isLoading
export const getArticlePageView = (state: StoreSchema) => state.articlesPage?.view
export const getArticlePageLimit = (state: StoreSchema) => state.articlesPage?.limit || 4
export const getArticlePageHasMore = (state: StoreSchema) => state.articlesPage?.hasMore
export const getArticlePagePageNum = (state: StoreSchema) => state.articlesPage?.page || 1
export const getArticlePageInited = (state: StoreSchema) => state.articlesPage?.__inited
