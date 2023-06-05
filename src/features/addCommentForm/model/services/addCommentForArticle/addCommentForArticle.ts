import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "@/app/providers/StoreProvider"
import { type CommentT } from "@/entitiess/Comment/model/types"
import { getUser } from "@/entitiess/User"
import { getArticleDetailData } from "@/entitiess/Article/model/selectors/getArticleDetailData/getArticleDetailData"
import { featchCommentsByArrticleId } from "../../../../../pages/ArticleDetailsPage/model/services/featchCommentsByArrticleId"

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const addCommentForArticle = createAsyncThunk<CommentT, string, ThunkConfig<string>>(
	"addCommentForm/addComment",
	async (text, { extra, rejectWithValue, getState, dispatch }) => {
		try {
			const state = getState()
			const user = getUser(state)
			const article = getArticleDetailData(state)

			if (!user || !article || !text) {
				rejectWithValue("Profile fetch err")
			}

			const sendComment = {
				text,
				userId: user?.id,
				articleId: article?.id,
			}

			const response = await extra.api.post("/comments", sendComment)

			dispatch(featchCommentsByArrticleId(article?.id))
			return response.data
		} catch (e) {
			return rejectWithValue("Profile fetch err")
		}
	}
)
