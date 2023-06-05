import { type CommentT } from "@/entitiess/Comment/model/types"
import { Skeleton } from "@/shared/ui"
import CommentItem from "../CommentItem/CommentItem"

import s from "./CommentList.module.scss"

interface Props {
	comments?: CommentT[]
	isLoading?: boolean
}

export default function CommentList({ comments, isLoading }: Props) {
	if (isLoading) {
		return (
			<div className={s.comment}>
				<div className={s.user}>
					<Skeleton width={30} height={30} border={30} />
					<Skeleton width={200} height={30} />
				</div>
				<Skeleton width={"100%"} height={50} />
			</div>
		)
	}

	return (
		<div className={s.wrapper}>
			{comments?.length
				? comments.map((comment) => {
						return <CommentItem key={comment.id} comment={comment} />
				  })
				: "Пусто"}
		</div>
	)
}
