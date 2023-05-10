import { lazy } from 'react'

const ArticleCreatePageAsync = lazy(async () => await import('./ArticleCreatePage'))

export default ArticleCreatePageAsync
