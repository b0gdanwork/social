import { type NotificationT } from "@/entitiess/Notification/types/Notification"
import NotificationItem from "../NotificationItem/NotificationItem"

import s from "./NotificationList.module.scss"

interface Props {
	list: NotificationT[]
}

export default function NotificationList({ list }: Props) {
	return (
		<div className={s.list}>
			{list.map((item) => (
				<NotificationItem key={item.id} data={item} />
			))}
		</div>
	)
}
