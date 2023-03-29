import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type CommentT } from 'entitiess/Comment/model/types'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const featchCommentsByArrticleId = createAsyncThunk<CommentT[], string | undefined, ThunkConfig<string>>(
  'articleDetails/featchCommentsByArrticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {

      if (!articleId) {
        rejectWithValue('comments fetch err')
      }

      const response = await extra.api.get<CommentT[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      if (!response.data) {
        rejectWithValue('comments fetch err')
      }
      return response.data

    } catch (e) {
      return rejectWithValue('comments fetch err')
    }
  }
)
