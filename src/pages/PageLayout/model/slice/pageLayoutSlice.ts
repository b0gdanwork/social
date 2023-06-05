import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { type pageLayoutSchema } from "../../types"

const initialState: pageLayoutSchema = {
	scrollList: {},
}

export const pageLayoutSlice = createSlice({
	name: "pageLayout",
	initialState,
	reducers: {
		setPositionScroll: (
			state: pageLayoutSchema,
			{
				payload,
			}: PayloadAction<{
				path: string
				scroll: number
			}>
		) => {
			state.scrollList[payload.path] = payload.scroll
		},
	},
	extraReducers: (builder) => {},
})

// Action creators are generated for each case reducer function
export const { actions: pageLayoutActions } = pageLayoutSlice
export const { reducer: pageLayoutReducer } = pageLayoutSlice

export default pageLayoutSlice.reducer
