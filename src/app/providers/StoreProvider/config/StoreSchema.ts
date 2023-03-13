import { type LoginSchema } from 'features/AuthByUsername';
import { type CounterSchema } from 'entitiess/Counter';
import { type UserSchema } from 'entitiess/User';
import { EnhancedStore } from '@reduxjs/toolkit';
import { reducerManager } from './reducerManager';

export default interface StoreSchema {
  counter: CounterSchema,
  user: UserSchema,

  
  loginForm?: LoginSchema,
}

export interface StoreSchemaWithManager  extends EnhancedStore<StoreSchema> {
  reducerManager?: reducerManager
}


export type StoreSchemaKeys = keyof StoreSchema