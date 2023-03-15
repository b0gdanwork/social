import { type StoreSchema } from 'app/providers/StoreProvider'

export const getProfileData = (state: StoreSchema) => {
  return state.profile?.data
}
