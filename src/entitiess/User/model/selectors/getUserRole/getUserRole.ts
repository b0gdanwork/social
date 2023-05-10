import { createSelector } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/StoreProvider'

const getUserRole = (store: StoreSchema) => store.user.authData?.rueles

export const isUserAdmin = createSelector(getUserRole, (state) => state?.includes('ADMIN')) 
export const isUserManager = createSelector(getUserRole, (state) => state?.includes('MANAGER')) 
