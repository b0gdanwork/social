import { StoreProvider, type StoreSchema } from '@/app/providers/StoreProvider'
import { type ReactNode, type FC } from 'react'
import '@/shared/config/i18n/i18nForTest'
import { type DeepPartial } from '@reduxjs/toolkit'

interface Props {
  children: ReactNode,
  initialState?: DeepPartial<StoreSchema>
}

const ProviderTest: FC<Props> = ({ children, initialState }) => {

  return (
    <StoreProvider initialState={initialState as StoreSchema}>
      {children}
    </StoreProvider>
  )
}

export default ProviderTest
