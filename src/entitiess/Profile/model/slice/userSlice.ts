import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  data: {
    age: undefined,
    avatar: undefined,
    city: undefined,
    country: undefined,
    first: undefined,
    lastname: undefined,
    username: undefined,
    currency: undefined
  },
  error: '',
  isLoading: false,
  readonly: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

export default profileSlice.reducer