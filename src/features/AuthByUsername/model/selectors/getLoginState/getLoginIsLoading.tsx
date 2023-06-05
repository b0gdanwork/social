import { type StoreSchema } from "@/app/providers/StoreProvider"

export const getLoginIsLoading = (state: StoreSchema) => state?.loginForm?.isLoading || false
