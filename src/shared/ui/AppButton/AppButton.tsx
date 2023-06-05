import React, { type FC } from "react"
import { classNames } from "@/shared/lib/helpers/classNames/classNames"

// import s from './AppButton.module.scss';

export enum AppButtonTheme {
	PRIMARY = "btn--primary",
	SECONDARY = "btn--secondary",
	TRANSPARENT = "btn--transparent",
}

interface AppBattonProps extends React.HTMLProps<HTMLButtonElement> {
	theme?: AppButtonTheme
	type?: "button" | "submit" | "reset"
	className?: any
	disabled?: boolean
	baseClass?: boolean
}

const AppButton: FC<AppBattonProps> = (props) => {
	const { theme, children, baseClass = true, className, ...anyProps } = props

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<button
			{...anyProps}
			className={classNames(
				"",
				{
					[className]: className !== undefined,
					btn: baseClass,
				},
				[theme]
			)}
		>
			{children}
		</button>
	)
}

export default React.memo(AppButton)
