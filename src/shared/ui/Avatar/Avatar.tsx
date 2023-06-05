import { memo } from "react"
import { classNames } from "@/shared/lib/helpers/classNames/classNames"

import s from "./Avatar.module.scss"

interface Props {
	src?: string
	width?: number
	height?: number
}

function Avatar({ width, height, src }: Props) {
	return (
		<div
			className={classNames(s.avatar)}
			style={{
				width: width || 100,
				height: height || 100,
			}}
		>
			<img
				src={
					src ||
					"https://avatars.mds.yandex.net/i?id=03b9687f027ddfc663e486360c49a4832ba564c4-8507274-images-thumbs&n=13"
				}
				alt={"Avatar"}
			/>
		</div>
	)
}

export default memo(Avatar)
