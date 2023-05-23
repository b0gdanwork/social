import { type LoginSchema } from 'features/AuthByUsername'
import { type CounterSchema } from 'entitiess/Counter'
import { type UserSchema } from 'entitiess/User'
import { type EnhancedStore } from '@reduxjs/toolkit'
import { type reducerManager } from './reducerManager'
import { type createReduxStore } from './reduxConfig'
import { type ProfileSchema } from 'entitiess/Profile'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticlePageSchema } from 'pages/ArticlePage'
import { type ArticleDetailsSchema } from 'entitiess/Article'
import { type pageLayoutSchema } from 'pages/PageLayout'
import { type rtkApi } from 'shared/api/rtkApi'
import { type NotificationFeatureSchema } from 'features/notificationFeature'

export default interface StoreSchema {
  counter: CounterSchema,
  user: UserSchema,
  pageLayout: pageLayoutSchema,
  rtkApi: ReturnType<typeof rtkApi.reducer>,

  articlesPage?: ArticlePageSchema,
  loginForm?: LoginSchema,
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articleDetailsPage?: ArticleDetailsPageSchema
  notificationFeature?: NotificationFeatureSchema
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
