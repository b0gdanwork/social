import type StoreSchema from './StoreSchema';
import { AnyAction, CombinedState, combineReducers, Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchemaKeys } from './StoreSchema';


export interface reducerManager {
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StoreSchemaKeys, reducer: Reducer) => void
  remove: (key: StoreSchemaKeys) => void
  getReducerMap: () => ReducersMapObject<StoreSchema>,
} 

export function createReducerManager(initialReducers: ReducersMapObject<StoreSchema>):reducerManager {

  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StoreSchemaKeys[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (let key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key:StoreSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StoreSchemaKeys) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}