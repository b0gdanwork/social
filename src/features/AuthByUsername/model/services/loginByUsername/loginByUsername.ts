import { USER_LOVALSTORAGE_KEY } from './../../../../../shared/const/localstorage';
import { type UserT } from './../../../../../entitiess/User/model/types/userSchema';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions } from 'entitiess/User';

export interface LoginByUsernameProps {
  username: string
  password: string
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<UserT, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', userData)

      const data = response.data
      
      if (!data) {
        throw new Error()
      }
      
      localStorage.setItem(USER_LOVALSTORAGE_KEY, JSON.stringify(data))
      thunkAPI.dispatch(userActions.setAuthData(data))
      
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue('Error auth')
    }
  }
)