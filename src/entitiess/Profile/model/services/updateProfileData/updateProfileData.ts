import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type ErrorsValidateProfile, type ProfileT } from '../../types/profileSchema'
import { getProfileData } from './../../selectors/getProfileData/getProfileData'
import validateProfileData from '../validateProfileData/validateProfileData'
import { PathsAppT } from '@/shared/const/routingTypes'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<ProfileT, any, ThunkConfig< ErrorsValidateProfile[]>>(
  'profile/updateProfileData',
  async (data, thunckApi) => {

    const { extra, rejectWithValue, getState } = thunckApi

    try {
      const state = getState()
      const formData = getProfileData(state)
      const errors = validateProfileData(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      if (!formData) {
        return rejectWithValue(['Profile save err'])
      }

      const response = await extra.api.put<ProfileT>(`${PathsAppT.PROFILE}${formData.id}`, formData)

      return response.data

    } catch (e) {
      return rejectWithValue(['Profile save err'])
    }
  }
)
