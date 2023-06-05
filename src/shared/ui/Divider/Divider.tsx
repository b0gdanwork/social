import { memo } from "react"
import { classNames } from "@/shared/lib/helpers/classNames/classNames"

import s from "./Divider.module.scss"

type MobileStatuses = "m-5" | "m-10" | "m-15" | "m-20" | "m-25" | "m-30" | "m-35" | "m-40" | "m-45" | "m-50"
type DesctopStatuses = "d-5" | "d-10" | "d-15" | "d-20" | "d-25" | "d-30" | "d-35" | "d-40" | "d-45" | "d-50"

interface Props {
	mobileSize: MobileStatuses
	desctopSize: DesctopStatuses
}

function Divider({ mobileSize, desctopSize }: Props) {
	return (
		<div
			className={classNames(s.divider, {
				[mobileSize]: !!mobileSize,
				[desctopSize]: !!desctopSize,
			})}
		></div>
	)
}

export default memo(Divider)
