/* eslint-disable react/jsx-props-no-spreading */
import React, { type InputHTMLAttributes, useState } from "react"
import { classNames } from "@/shared/lib/helpers/classNames/classNames"
import s from "./AppInput.module.scss"
import { useEffect } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readonly">

interface PropsAppInput extends HTMLInputProps {
	label?: string
	value: string | number | undefined
	onChange?: (value: string) => void
	className?: string
	readonly?: boolean
}

function AppInput(props: PropsAppInput) {
	const { label, onChange, readonly, className, type = "text", value: valueParent, ...anyProps } = props

	const [value, setValue] = useState(valueParent)

	useEffect(() => {
		if (valueParent !== value) {
			setValue(valueParent)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueParent])

	const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		setValue(value)
		onChange?.(value)
	}

	return (
		<div className={s.wrapper}>
			{label ? (
				<div
					className={classNames(
						s.label,
						{
							focus: !!value,
						},
						[]
					)}
				>
					{label}
				</div>
			) : null}
			<input
				{...anyProps}
				type={type}
				value={value || ""}
				readOnly={readonly}
				onChange={changeFunc}
				className={classNames(
					s.input,
					{
						[s.readonly]: readonly,
					},
					[className]
				)}
			/>
		</div>
	)
}

export default React.memo(AppInput)
