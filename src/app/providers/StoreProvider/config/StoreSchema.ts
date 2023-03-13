import { type LoginSchema } from 'features/AuthByUsername';
import { type CounterSchema } from 'entitiess/Counter';
import { type UserSchema } from 'entitiess/User';
import { type EnhancedStore } from '@reduxjs/toolkit';
import { type reducerManager } from './reducerManager';
import { type createReduxStore } from './reduxConfig';
import { type ProfileSchema } from 'entitiess/Profile';

export default interface StoreSchema {
  counter: CounterSchema,
  user: UserSchema,

  loginForm?: LoginSchema,
  profile?: ProfileSchema
}

export interface StoreSchemaWithManager extends EnhancedStore<StoreSchema> {
  reducerManager?: reducerManager
}

export type AppDispath = ReturnType<typeof createReduxStore>['dispatch']

export type StoreSchemaKeys = keyof StoreSchema