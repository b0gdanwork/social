import { type StoreSchema } from 'app/providers/StoreProvider'

export const getProfileError = (state: StoreSchema) => {
  return state.profile.error
}