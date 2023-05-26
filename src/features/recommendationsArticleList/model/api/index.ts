import { rtkApi } from '@/shared/api/rtkApi'

const extendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  }),
  overrideExisting: false
})

export const useArticleRecomendList = extendedApi.useGetArticleRecomendListQuery
