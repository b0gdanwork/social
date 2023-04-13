import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleT } from 'entitiess/Article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const featchArticles = createAsyncThunk<ArticleT[], void, ThunkConfig<string>>(
  'articlePage/featchArticles',
  async (_, { extra, rejectWithValue }) => {
    try {

      const response = await extra.api.get<ArticleT[]>('/articles', {
        params: {
          _expend: 'user'
        }
      })

      if (!response.data) {
        rejectWithValue('articles fetch err')
      }
      return response.data

    } catch (e) {
      return rejectWithValue('articles fetch err')
    }
  }
)
