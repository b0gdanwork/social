
import type StoreSchema from '@/app/providers/StoreProvider/config/StoreSchema'

export const getRecomendationsArticleDetailsIsLoading = (state: StoreSchema) => state.articleDetailsPage?.recomendations?.isLoading
export const getRecomendationsArticleDetailsIsError = (state: StoreSchema) => state.articleDetailsPage?.recomendations?.error
