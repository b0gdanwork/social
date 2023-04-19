import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleT } from 'entitiess/Article'
import { getArticlePageLimit, getArticlePageOrder, getArticlePagePageNum, getArticlePageSearch, getArticlePageSort } from '../selectors/articlePageSelectors'

interface Props {
  replace?: boolean 
}

type PropsFetch = Props | undefined

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const featchArticles = createAsyncThunk<ArticleT[], PropsFetch, ThunkConfig<string>>(
  'articlePage/featchArticles',
  async (props, { extra, rejectWithValue, getState }) => {

    const state = getState()
    const page = getArticlePagePageNum(state)
    const limit = getArticlePageLimit(state)

    const sort = getArticlePageSort(state)
    const order = getArticlePageOrder(state)
    const search = getArticlePageSearch(state)

    try {

      const response = await extra.api.get<ArticleT[]>('/articles', {
        params: {
          _expend: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search
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
