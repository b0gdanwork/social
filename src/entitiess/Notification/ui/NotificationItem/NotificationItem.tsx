import { type NotificationT } from "@/entitiess/Notification/types/Notification"

import { Link } from "react-router-dom"

import s from "./NotificationItem.module.scss"

interface Props {
	data: NotificationT
}

export default function NotificationItem(props: Props) {
	const {
		// id,
		title,
		href,
		description,
	} = props.data

	return (
		<div className={s.item}>
			{href ? <Link to={href} className={s.link}></Link> : null}
			<h4 className={s.title}>{title}</h4>
			<div className={s.discr}>{description}</div>
		</div>
	)
}
