import { lazy } from 'react'

const ArticleDetailsPageAsync = lazy(async () => await import('./ArticleDetailsPage'))

export default ArticleDetailsPageAsync
