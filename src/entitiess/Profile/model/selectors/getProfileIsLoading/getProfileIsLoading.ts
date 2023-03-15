import { type StoreSchema } from 'app/providers/StoreProvider'

export const getProfileIsLoading = (state: StoreSchema) => {
  return state.profile?.isLoading
}
