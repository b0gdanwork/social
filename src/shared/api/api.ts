import axios from 'axios'
import { USER_LOVALSTORAGE_KEY } from 'shared/const/localstorage'

const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'http://localhost:8000'

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOVALSTORAGE_KEY)
  }
})
