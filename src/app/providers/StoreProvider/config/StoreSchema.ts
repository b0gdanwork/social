import { type LoginSchema } from 'features/AuthByUsername'
import { type CounterSchema } from 'entitiess/Counter'
import { type UserSchema } from 'entitiess/User'
import { type EnhancedStore } from '@reduxjs/toolkit'
import { type reducerManager } from './reducerManager'
import { type createReduxStore } from './reduxConfig'
import { type ProfileSchema } from 'entitiess/Profile'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router'

export default interface StoreSchema {
  counter: CounterSchema,
  user: UserSchema,

  loginForm?: LoginSchema,
  profile?: ProfileSchema
}

export type StoreSchemaKeys = keyof StoreSchema

export interface StoreSchemaWithManager extends EnhancedStore<StoreSchema> {
  reducerManager?: reducerManager
}

export type AppDispath = ReturnType<typeof createReduxStore>['dispatch']

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectWithValue: T,
  extra: {
    api: AxiosInstance,
    navigate: (to: To, options?: NavigateOptions) => void;
  }
}
