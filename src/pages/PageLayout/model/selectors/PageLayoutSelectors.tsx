import type StoreSchema from "@/app/providers/StoreProvider/config/StoreSchema"

export const getPageLayoutScroll = (state: StoreSchema) => {
	return state.pageLayout.scrollList
}

export const getPageLayoutScrollOfPath = (state: StoreSchema, path: string) => {
	return state.pageLayout.scrollList[path] ?? 0
}
