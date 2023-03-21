import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ErrorsValidateProfile, type ProfileT } from '../../types/profileSchema'
import { getProfileData } from 'entitiess/Profile'
import validateProfileData from '../validateProfileData/validateProfileData'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<ProfileT, any, ThunkConfig< ErrorsValidateProfile[]>>(
  'profile/updateProfileData',
  async (data, thunckApi) => {

    const { extra, rejectWithValue, getState } = thunckApi

    try {
      const formData = getProfileData(getState())
      const errors = validateProfileData(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      const response = await extra.api.put<ProfileT>('/profile', formData)

      return response.data

    } catch (e) {
      return rejectWithValue(['Profile save err'])
    }
  }
)
