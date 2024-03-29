/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { ArticleList, ArticleListViewT } from "@/entitiess/Article"
import { useCallback, useEffect } from "react"
import { useAppDispath } from "@/shared/lib/hooks/useAppDispath/useAppDispath"
import { featchArticles } from "../model/services/featchArticles"
import { articlesPageActions, articlesPageReducer, getArticles } from "../model/slices/ArticlesPageSlice"
import { useSelector } from "react-redux"
import {
	getArticlePageError,
	getArticlePageHasMore,
	getArticlePageInited,
	getArticlePageIsLoading,
	getArticlePageLimit,
	getArticlePagePageNum,
	getArticlePageView,
} from "../model/selectors/articlePageSelectors"
import DynamicModuleLoader from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import ArticlePageFilters from "./ArticlePageFilters/ArticlePageFilters"

export default function ArticlePage() {
	const dispath = useAppDispath()

	const view = useSelector(getArticlePageView)
	const error = useSelector(getArticlePageError)
	const limit = useSelector(getArticlePageLimit)
	const page = useSelector(getArticlePagePageNum)
	const inited = useSelector(getArticlePageInited)
	const hasMore = useSelector(getArticlePageHasMore)
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlePageIsLoading)

	const onScrollEnd = useCallback(() => {
		if (hasMore && !isLoading) {
			const newPage = page + 1
			dispath(articlesPageActions.setPage(newPage))
			dispath(featchArticles())
		}
	}, [dispath, page, hasMore, isLoading])

	useEffect(() => {
		if (!inited) {
			dispath(articlesPageActions.init())
			dispath(featchArticles())
		}
	}, [dispath])

	return (
		<DynamicModuleLoader reducerKey="articlesPage" reducer={articlesPageReducer} deliteAfterAnmount={false}>
			{/* <PageLayout> */}
			<div
				style={{
					position: "relative",
				}}
			>
				{!error ? (
					<>
						<ArticlePageFilters />
						<div
							style={{
								marginTop: "117px",
							}}
						>
							<ArticleList
								limit={limit}
								target={"_blank"}
								isVirtuoso={true}
								articles={articles}
								isLoading={isLoading}
								onScrollEnd={onScrollEnd}
								view={view || ArticleListViewT.grid}
							/>
						</div>
					</>
				) : (
					error
				)}
			</div>

			{/* </PageLayout> */}
		</DynamicModuleLoader>
	)
}
