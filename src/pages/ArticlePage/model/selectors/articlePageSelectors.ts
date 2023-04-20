import { type StoreSchema } from 'app/providers/StoreProvider'
import { ArticleType } from 'entitiess/Article'

export const getArticlePageError = (state: StoreSchema) => state.articlesPage?.error
export const getArticlePageIsLoading = (state: StoreSchema) => state.articlesPage?.isLoading
export const getArticlePageView = (state: StoreSchema) => state.articlesPage?.view
export const getArticlePageLimit = (state: StoreSchema) => state.articlesPage?.limit || 4
export const getArticlePageHasMore = (state: StoreSchema) => state.articlesPage?.hasMore
export const getArticlePagePageNum = (state: StoreSchema) => state.articlesPage?.page || 1
export const getArticlePageInited = (state: StoreSchema) => state.articlesPage?.__inited

export const getArticlePageSearch = (state: StoreSchema) => state.articlesPage?.search
export const getArticlePageOrder = (state: StoreSchema) => state.articlesPage?.order
export const getArticlePageSort = (state: StoreSchema) => state.articlesPage?.sort
export const getArticlePageType = (state: StoreSchema) => state.articlesPage?.type || ArticleType.ALL
