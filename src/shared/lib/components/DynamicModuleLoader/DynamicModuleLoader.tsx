import { type Reducer } from '@reduxjs/toolkit'
import { type StoreSchemaKeys, type StoreSchemaWithManager } from 'app/providers/StoreProvider/config/StoreSchema'
import React, { type FC, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'

interface Props {
  reducer: Reducer,
  children: ReactNode,
  reducerKey: StoreSchemaKeys,
}

const DynamicModuleLoader: FC<Props> = (props) => {

  const {
    reducer,
    children,
    reducerKey
  } = props

  const store = useStore() as StoreSchemaWithManager

  useEffect(() => {
    store.reducerManager.add(reducerKey, reducer)
  
    return () => {
      store.reducerManager.remove(reducerKey)
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
