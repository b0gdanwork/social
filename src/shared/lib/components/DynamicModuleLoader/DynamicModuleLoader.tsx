import { Reducer } from '@reduxjs/toolkit'
import { StoreSchemaKeys, StoreSchemaWithManager } from 'app/providers/StoreProvider/config/StoreSchema'
import React, { FC, ReactNode, useEffect } from 'react'
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
    reducerKey,
  } = props

  const store = useStore() as StoreSchemaWithManager

  useEffect(() => {
    store.reducerManager.add(reducerKey, reducer)
  
    return () => {
      store.reducerManager.remove(reducerKey)
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default DynamicModuleLoader
