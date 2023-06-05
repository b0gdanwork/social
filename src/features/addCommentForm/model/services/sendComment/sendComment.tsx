import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "@/app/providers/StoreProvider"
import { type CommentT } from "@/entitiess/Comment/model/types"
import { getUser } from "@/entitiess/User/model/selectors/getUser/getUser"
import { getAddCommentFormText } from "../../selectors/addCommentFormSelectors"
import { getArticleDetailData } from "@/entitiess/Article/model/selectors/getArticleDetailData/getArticleDetailData"

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const sendComment = createAsyncThunk<CommentT, void, ThunkConfig<string>>(
	"addCommentForm/sendComment",
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			const userData = getUser(getState())
			const text = getAddCommentFormText(getState())
			const article = getArticleDetailData(getState())

			if (!userData || !text || !article?.id) {
				rejectWithValue("no data")
			}

			const response = await extra.api.post<CommentT>("/comment/", {
				text,
				articleId: article?.id,
				userId: userData?.id,
			})

			if (!response.data) {
				rejectWithValue("Profile fetch err")
			}

			return response.data
		} catch (e) {
			return rejectWithValue("Profile fetch err")
		}
	}
)
