import ArticleDetailsPageAsync from './ui/ArticleDetailsPageAsync'
import { type ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
import { type ArticleDetailsRecomendationsSchema } from './model/types/ArticleDetailsRecomendationsSchema'
import { type ArticleDetailsPageSchema } from './model/types/index'

export {
  type ArticleDetailsRecomendationsSchema,
  type ArticleDetailsCommentsSchema,
  type ArticleDetailsPageSchema,
  ArticleDetailsPageAsync as ArticleDetailsPage
}
