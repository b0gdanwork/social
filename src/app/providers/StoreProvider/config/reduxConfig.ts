/* eslint-disable @typescript-eslint/ban-ts-comment */
import type StoreSchema from './StoreSchema';
import { counterReducer } from 'entitiess/Counter';
import { userReducer } from 'entitiess/User';

import {
  configureStore, type ReducersMapObject
} from '@reduxjs/toolkit';

import { createReducerManager } from './reducerManager';

export function createReduxStore (initialState?: StoreSchema) {
  
  const rootResucer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    counter: counterReducer
  }

  const reducerManager = createReducerManager(rootResucer)

  const storeRedux = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // @ts-expect-error
  storeRedux.reducerManager = reducerManager

  return storeRedux
}
