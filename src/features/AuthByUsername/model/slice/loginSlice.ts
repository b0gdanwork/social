import { loginByUsername } from "./../services/loginByUsername/loginByUsername"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type LoginSchema } from "../types/loginSchema"

const initialState: LoginSchema = {
	isLoading: false,
	username: "",
	password: "",
	error: undefined,
}

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state) => {
			state.isLoading = true
			state.error = undefined
		})
		builder.addCase(loginByUsername.fulfilled, (state) => {
			state.isLoading = false
			state.error = undefined
		})
		builder.addCase(loginByUsername.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.error.message
		})
	},
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

export default loginSlice.reducer
