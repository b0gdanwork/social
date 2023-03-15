import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

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
  error: undefined,
  isLoading: false,
  readonly: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      console.log('fetchProfileData.fulfilled', action.payload)
      state.isLoading = false
      state.error = undefined
      state.data = action.payload
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

export default profileSlice.reducer