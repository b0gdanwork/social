import { type StoreSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StoreSchema) => state?.loginForm?.username || ''