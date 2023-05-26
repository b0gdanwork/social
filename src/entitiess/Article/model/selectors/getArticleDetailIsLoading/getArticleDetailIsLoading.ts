import type StoreSchema from '@/app/providers/StoreProvider/config/StoreSchema'

export const getArticleDetailIsLoading = (state: StoreSchema) => {
  return state.articleDetails?.isLoading
} 
