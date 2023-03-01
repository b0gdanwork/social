import type StoreSchema from 'app/providers/StoreProvider/config/StoreSchema';

export const getCounter = (state: StoreSchema) => {
  return state.counter
} 