/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from "react"
import { AppButton } from "@/shared/ui"
import { AppButtonTheme } from "@/shared/ui/AppButton/AppButton"

interface Props {}

export default function CreateErrorBtn({}: Props) {
	const [error, setError] = useState(false)

	useEffect(() => {
		if (error) {
			throw new Error("Test error")
		}
	}, [error])

	const clickFunc = () => {
		setError(error)
		throw new Error("Test error")
	}

	return (
		<>
			<AppButton theme={AppButtonTheme.SECONDARY} onClick={clickFunc}>
				Error create
			</AppButton>
		</>
	)
}
