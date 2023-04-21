import { type Reducer } from '@reduxjs/toolkit'
import { type StoreSchemaKeys, type StoreSchemaWithManager } from 'app/providers/StoreProvider/config/StoreSchema'
import React, { type FC, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'

export type ReducersList = {
  [name in StoreSchemaKeys]?: Reducer;
}

interface Props {
  reducer: ReducersList | Reducer,
  children: ReactNode,
  reducerKey?: StoreSchemaKeys,
  deliteAfterAnmount?: boolean
}

const DynamicModuleLoader: FC<Props> = (props) => {

  const {
    reducer,
    children,
    reducerKey,
    deliteAfterAnmount = false
  } = props

  const store = useStore() as StoreSchemaWithManager

  useEffect(() => {
    if (typeof reducer === 'function' && reducerKey) {
      const reducersState = store.reducerManager?.getReducerMap()
      if (reducersState && !(reducerKey in reducersState)) {
        store.reducerManager?.add(reducerKey, reducer)
      }
      
      if (deliteAfterAnmount) {
        return () => {
          store.reducerManager?.remove(reducerKey)
        }
      }
    } else if (typeof reducer === 'object') {
      const reducersState = store.reducerManager?.getReducerMap()
      if (reducersState && reducer) {
        Object.entries(reducer).forEach((reduc) => {
          const [name, value] = reduc
          store.reducerManager?.add(name as StoreSchemaKeys, value)
        })
      }
      
      if (deliteAfterAnmount) {
        return () => {
          Object.entries(reducer).forEach((reduc) => {
            const [name, value] = reduc
            store.reducerManager?.remove(name as StoreSchemaKeys)
          })
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default DynamicModuleLoader
