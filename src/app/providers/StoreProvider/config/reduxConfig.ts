import type StoreSchema from './StoreSchema';
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entitiess/Counter';
import { userReducer } from 'entitiess/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore (initialState?: StoreSchema) {

  const rootResucer: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    counter: counterReducer,
    loginForm: loginReducer
  }

  const storeRedux = configureStore<StoreSchema>({
    reducer: rootResucer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  return storeRedux
  
}
