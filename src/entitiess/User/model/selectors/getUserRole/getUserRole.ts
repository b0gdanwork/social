import { createSelector } from '@reduxjs/toolkit'
import { type StoreSchema } from '@/app/providers/StoreProvider'

export const getUserRoles = (store: StoreSchema) => store.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (roles) => roles?.includes('ADMIN')) 
export const isUserManager = createSelector(getUserRoles, (roles) => roles?.includes('MANAGER')) 
