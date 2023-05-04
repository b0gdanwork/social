import { type RecomendationArticlesSchema } from 'features/recommendationsArticleList'
import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recomendations?: RecomendationArticlesSchema
}
