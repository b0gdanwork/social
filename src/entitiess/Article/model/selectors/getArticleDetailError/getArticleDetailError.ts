import type StoreSchema from "@/app/providers/StoreProvider/config/StoreSchema"

export const getArticleDetailError = (state: StoreSchema) => {
	return state.articleDetails?.error
}
