import { useMemo, type ReactNode } from "react"
import { Provider } from "react-redux"
import { useNavigate } from "react-router"

import { createReduxStore } from "../config/reduxConfig"

import type StoreSchema from "../config/StoreSchema"

interface PropsT {
	children: ReactNode
	initialState?: StoreSchema
}

const StoreProvider = ({ children, initialState }: PropsT) => {
	const navigate = useNavigate()

	const options = {
		navigate,
	}

	const store = useMemo(() => createReduxStore(initialState, options as any), [])

	return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
