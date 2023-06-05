import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type AddCommentFormSchema } from "../types/addCommentForm"

const initialState: AddCommentFormSchema = {
	text: "",
	isLoading: false,
	error: undefined,
}

export const addCommentFormSlice = createSlice({
	name: "addCommentForm",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		},
	},
	// extraReducers: (builder) => {
	//   builder.addCase(addCommentFormByUsername.pending, (state) => {
	//     state.isLoading = true
	//     state.error = undefined
	//   })
	//   builder.addCase(addCommentFormByUsername.fulfilled, (state) => {
	//     state.isLoading = false
	//     state.error = undefined
	//   })
	//   builder.addCase(addCommentFormByUsername.rejected, (state, action) => {
	//     state.isLoading = false
	//     state.error = action.error.message
	//   })
	// }
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice

export default addCommentFormSlice.reducer
