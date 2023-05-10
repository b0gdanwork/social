import { lazy } from 'react'

const ArticleEditPageAsync = lazy(async () => await import('./ArticleEditPage'))

export default ArticleEditPageAsync
