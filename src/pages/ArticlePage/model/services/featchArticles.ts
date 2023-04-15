import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleT } from 'entitiess/Article'
import { getArticlePageLimit } from '../selectors/articlePageSelectors'

interface FeatchArticlesProps {
  page: number
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const featchArticles = createAsyncThunk<ArticleT[], FeatchArticlesProps, ThunkConfig<string>>(
  'articlePage/featchArticles',
  async (props, { extra, rejectWithValue, getState }) => {

    const state = getState()
    const { page = 1 } = props
    const limit = getArticlePageLimit(state)

    try {

      const response = await extra.api.get<ArticleT[]>('/articles', {
        params: {
          _expend: 'user',
          _page: page,
          _limit: limit
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
