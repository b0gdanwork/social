import { memo, useEffect, useState } from "react"

import { classNames } from "@/shared/lib/helpers/classNames/classNames"
import { TbStar } from "react-icons/tb"
import { type StarT } from "@/entitiess/Rating"

import s from "./StarRating.module.scss"

interface Props {
	onSelect?: (n: StarT) => void
	selectedStars: StarT | null
}

const start: StarT[] = [1, 2, 3, 4, 5]

function StarRating({ onSelect, selectedStars }: Props) {
	const [hoverValue, setHoverValue] = useState<StarT | null>(null)
	const [selectedValue, setSelectedValue] = useState<StarT | null>(selectedStars || null)

	useEffect(() => {
		setSelectedValue(selectedStars)
	}, [selectedStars])

	const onClick = (value: StarT) => {
		if (selectedStars) return
		setSelectedValue(value)
		if (onSelect) {
			onSelect(value)
		}
	}

	const onMouseEnter = (value: StarT) => {
		if (selectedStars) return
		setHoverValue(value)
	}

	const onMouseLeave = () => {
		if (selectedStars) return
		setHoverValue(null)
	}

	return (
		<div className={s.wrapper}>
			{start.map((value, key) => {
				const isSelected = selectedValue !== null && value <= selectedValue
				const isHover = hoverValue !== null && value <= hoverValue
				const isAcive = Boolean(isSelected || isHover)

				return (
					<div
						key={key}
						onMouseLeave={onMouseLeave}
						onClick={() => {
							onClick(value)
						}}
						onMouseEnter={() => {
							onMouseEnter(value)
						}}
						className={classNames(s.star, {
							[s.active]: isAcive,
						})}
					>
						<TbStar size={40} />
					</div>
				)
			})}
		</div>
	)
}
export default memo(StarRating)
