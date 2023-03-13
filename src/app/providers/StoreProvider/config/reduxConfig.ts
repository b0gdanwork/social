import type StoreSchema from './StoreSchema';
import { combineReducers, configureStore, Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entitiess/Counter';
import { userReducer } from 'entitiess/User';
import { StoreSchemaKeys } from './StoreSchema';
import { createReducerManager } from './reducerManager';


export function createReduxStore (initialState?: StoreSchema) {

  
  const rootResucer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    counter: counterReducer,
  }

  const reducerManager = createReducerManager(rootResucer)

  const storeRedux = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-ignore
  storeRedux.reducerManager = reducerManager

  return storeRedux
}




