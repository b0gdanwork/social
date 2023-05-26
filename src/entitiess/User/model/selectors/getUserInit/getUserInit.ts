import { type StoreSchema } from '@/app/providers/StoreProvider'

export const getUserInit = (state: StoreSchema) => {
  return state.user._init
}
