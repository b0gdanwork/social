import { type StoreSchema } from "@/app/providers/StoreProvider"

export const getUser = (state: StoreSchema) => {
	return state.user.authData
}
