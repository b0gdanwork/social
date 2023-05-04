/* eslint-disable @typescript-eslint/ban-ts-comment */
import type StoreSchema from './StoreSchema'
import { counterReducer } from 'entitiess/Counter'
import { userReducer } from 'entitiess/User'

import {
  type CombinedState,
  configureStore, type Reducer, type ReducersMapObject
} from '@reduxjs/toolkit'

import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { type NavigateOptions, type To } from 'react-router'
import { pageLayoutReducer } from 'pages/PageLayout/model/slice/pageLayoutSlice'
import { rtkApi } from 'shared/api/rtkApi'

interface Options { 
  navigate: (to: To, options?: NavigateOptions) => void;
}

export function createReduxStore (initialState?: StoreSchema, options?: Options) {
  
  const rootResucer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    pageLayout: pageLayoutReducer,
    counter: counterReducer,
    rtkApi: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootResucer)

  const storeRedux = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate: options?.navigate
          }
        }
      }).concat(rtkApi.middleware)
  })

  // @ts-expect-error
  storeRedux.reducerManager = reducerManager

  return storeRedux
}
