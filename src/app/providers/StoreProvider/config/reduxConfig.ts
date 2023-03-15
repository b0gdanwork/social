/* eslint-disable @typescript-eslint/ban-ts-comment */
import type StoreSchema from './StoreSchema';
import { counterReducer } from 'entitiess/Counter';
import { userReducer } from 'entitiess/User';

import {
  configureStore, type ReducersMapObject
} from '@reduxjs/toolkit';

import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { type NavigateOptions, type To } from 'react-router';

interface Options { 
  navigate: (to: To, options?: NavigateOptions) => void;
}

export function createReduxStore (initialState?: StoreSchema, options?: Options) {
  
  const rootResucer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    counter: counterReducer
  }

  const reducerManager = createReducerManager(rootResucer)

  const storeRedux = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate: options.navigate
          }
        }
      })
  })

  // @ts-expect-error
  storeRedux.reducerManager = reducerManager

  return storeRedux
}
