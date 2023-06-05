import { lazy } from "react"

const ArticlePageAsync = lazy(async () => await import("./ArticlePage"))

export default ArticlePageAsync
