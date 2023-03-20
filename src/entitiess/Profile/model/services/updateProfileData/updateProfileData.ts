import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ProfileT } from '../../types/profileSchema'
import { getProfileData } from 'entitiess/Profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<ProfileT, any, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (data, thunckApi) => {

    const { extra, rejectWithValue, getState } = thunckApi

    try {
      const formData = getProfileData(getState())
      if (!formData) {
        return rejectWithValue('Profile save err')
      }
      const response = await extra.api.put<ProfileT>('/profile', formData)

      return response.data

    } catch (e) {
      return rejectWithValue('Profile save err')
    }
  }
)
