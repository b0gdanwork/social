import { USER_LOVALSTORAGE_KEY } from './../../../../../shared/const/localstorage';
import { type UserT } from './../../../../../entitiess/User/model/types/userSchema';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { userActions } from 'entitiess/User';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export interface LoginByUsernameProps {
  username: string
  password: string
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<UserT, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (userData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post('/login', userData)

      const data = response.data
      
      if (!data) {
        throw new Error()
      }
      
      localStorage.setItem(USER_LOVALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))
      
      return data
    } catch (e) {
      return rejectWithValue('Error auth')
    }
  }
)