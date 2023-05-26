import type StoreSchema from '@/app/providers/StoreProvider/config/StoreSchema'

export const getArticleDetailData = (state: StoreSchema) => {
  return state.articleDetails?.data
} 
