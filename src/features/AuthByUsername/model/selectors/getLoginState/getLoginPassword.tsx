import { type StoreSchema } from '@/app/providers/StoreProvider'

export const getLoginPassword = (state: StoreSchema) => state?.loginForm?.password || ''
