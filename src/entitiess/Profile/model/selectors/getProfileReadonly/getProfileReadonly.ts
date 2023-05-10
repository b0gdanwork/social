import { type StoreSchema } from 'app/providers/StoreProvider'

export const getProfileReadonly = (state: StoreSchema) => {
  return state.profile?.readonly ?? true
}
