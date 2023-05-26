import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { USER_LOVALSTORAGE_KEY } from '@/shared/const/localstorage'
import { type UserT, type UserSchema } from '../types/userSchema'

const initialState: UserSchema = {
  _init: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserT>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const dataLocalstorage = localStorage.getItem(USER_LOVALSTORAGE_KEY)
      if (dataLocalstorage) {
        state.authData = JSON.parse(dataLocalstorage)
      }
      state._init = true
    },
    logoutAuthData: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOVALSTORAGE_KEY)
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

export default userSlice.reducer
