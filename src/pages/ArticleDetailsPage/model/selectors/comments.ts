import type StoreSchema from "@/app/providers/StoreProvider/config/StoreSchema"

export const getCommentsArticleIsLoading = (state: StoreSchema) => state.articleDetailsPage?.comments?.isLoading
