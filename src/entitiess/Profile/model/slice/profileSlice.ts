import { type AnyAction, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProfileT, type ProfileSchema } from '../types/profileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  data: {
    age: '',
    avatar: '',
    city: '',
    country: null,
    first: '',
    lastname: '',
    username: '',
    currency: null
  },
  oldData: null,
  error: undefined,
  isLoading: false,
  readonly: true
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    savePropData: (state, action: PayloadAction<{ key: keyof ProfileT, value: never }>) => {
      
      if (!state.oldData) {
        state.oldData = { ...state.data }
      }
      
      const key = action.payload.key 
      const value = action.payload.value

      state.data[key] = value
    },
    resetData: (state) => {
      if (state.oldData) {
        state.data = { ...state.oldData }
      }
      state.oldData = null
      state.readonly = true
    },
    offReadonly: (state) => {
      console.log('offReadonlyoffReadonly')
      state.readonly = false
    },
    onReadonly: (state) => {
      state.readonly = false
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = undefined
      state.oldData = null
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
