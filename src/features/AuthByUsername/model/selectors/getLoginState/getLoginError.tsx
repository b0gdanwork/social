import { type StoreSchema } from 'app/providers/StoreProvider';

export const getLoginError = (state: StoreSchema) => state?.loginForm?.error || ''