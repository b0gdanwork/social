import { type LoginSchema } from 'features/AuthByUsername'
import { type CounterSchema } from 'entitiess/Counter'
import { type UserSchema } from 'entitiess/User'
import { type EnhancedStore } from '@reduxjs/toolkit'
import { type reducerManager } from './reducerManager'
import { type createReduxStore } from './reduxConfig'
import { type ProfileSchema } from 'entitiess/Profile'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router'
import { type ArticleDetailsSchema } from 'entitiess/Article/model/types/articleSchema'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from 'features/addCommentForm'

export default interface StoreSchema {
  counter: CounterSchema,
  user: UserSchema,

  loginForm?: LoginSchema,
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
}

export type StoreSchemaKeys = keyof StoreSchema

export interface StoreSchemaWithManager extends EnhancedStore<StoreSchema> {
  reducerManager?: reducerManager
}

export type AppDispath = ReturnType<typeof createReduxStore>['dispatch']

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  state: StoreSchema,
  rejectWithValue: T,
  extra: ThunkExtraArg,
  getState: () => StoreSchema,
}
