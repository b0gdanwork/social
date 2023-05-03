import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleT } from '../../types/articleSchema'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<ArticleT, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      if (!articleId) {
        rejectWithValue('Article fetch err')
      }
      const response = await extra.api.get<ArticleT>('/articles/' + articleId, {
        params: {
          _expand: 'user'
        }
      })
      if (!response.data) {
        rejectWithValue('Article fetch err')
      }
      return response.data

    } catch (e) {
      return rejectWithValue('Article fetch err')
    }
  }
)
