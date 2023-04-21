import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'
import { type ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecomendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recomendations?: ArticleDetailsRecomendationsSchema
}
