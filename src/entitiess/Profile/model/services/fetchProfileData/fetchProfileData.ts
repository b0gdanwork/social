import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ProfileT } from '../../types/profileSchema'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<ProfileT, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<ProfileT>('/profile/' + profileId)
      if (!response.data) {
        rejectWithValue('Profile fetch err')
      }
      return response.data

    } catch (e) {
      return rejectWithValue('Profile fetch err')
    }
  }
)
