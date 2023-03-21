import { type StoreSchema } from 'app/providers/StoreProvider'

export const getProfileValidateErrors = (state: StoreSchema) => {
  return state.profile?.errorsValidate
}
