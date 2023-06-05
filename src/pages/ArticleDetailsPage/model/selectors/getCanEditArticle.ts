import { createSelector } from "@reduxjs/toolkit"
import { getArticleDetailData } from "@/entitiess/Article"
import { getUser } from "@/entitiess/User"

export const getCanEditArticle = createSelector(getArticleDetailData, getUser, (article, user) => {
	if (!article || !user) {
		return false
	}
	return article.userId === user.id
})
