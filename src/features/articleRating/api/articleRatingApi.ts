import { type RatingT } from '@/entitiess/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface RatingSetComment extends RatingT { userId: string, articleId: string } 

const extendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRatingArticle: build.query<RatingT[], { userId: string, articleId: string }>({
      query: ({ userId, articleId }) => ({
        url: '/profile-rating',
        params: {
          userId,
          articleId
        }
      })
    }),
    setRatingArticle: build.mutation<RatingT, RatingSetComment>({
      query: (props) => ({
        url: '/profile-rating',
        body: props,
        method: 'POST'
      })
    })
  }),
  overrideExisting: false
})

export const useGetRatingArticle = extendedApi.useGetRatingArticleQuery
export const useSetRatingArticle = extendedApi.useSetRatingArticleMutation
