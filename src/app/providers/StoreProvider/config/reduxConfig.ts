import type StoreSchema from './StoreSchema';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entitiess/Counter';

export function createReduxStore (initialState?: StoreSchema) {
  const storeRedux = configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  return storeRedux
  
}
