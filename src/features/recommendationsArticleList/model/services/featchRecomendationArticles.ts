import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type ArticleT } from '@/entitiess/Article'

interface Props {
  limit?: number 
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const featchRecomendationArticles = createAsyncThunk<ArticleT[], Props, ThunkConfig<string>>(
  'articleDetaisPage/featchRecomendationArticles',
  async ({ limit }, { extra, rejectWithValue, getState }) => {

    try {

      const response = await extra.api.get<ArticleT[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit
        }
      })

      if (!response.data) {
        rejectWithValue('articles Recomendation fetch err')
      }
      return response.data

    } catch (e) {
      return rejectWithValue('articles Recomendation fetch err')
    }
  }
)
