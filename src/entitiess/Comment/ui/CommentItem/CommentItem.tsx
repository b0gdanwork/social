import { type CommentT } from 'entitiess/Comment/model/types'
import { Avatar, Skeleton } from 'shared/ui'

import s from './CommentItem.module.scss'

interface Props {
  comment?: CommentT
  isLoading?: boolean
}

export default function CommentItem ({ comment, isLoading }: Props) {

  if (isLoading) {
    return (
      <div className={s.comment}>
        <div className={s.user}>
          <Skeleton width={30} height={30} border={30}/>
          <Skeleton width={200} height={30}/>
        </div>
        <Skeleton width={'100%'} height={50}/>
      </div>
    )
  }

  return (
    <div className={s.comment}>
      <div className={s.user}>
        <Avatar width={30} height={30} src={comment?.user.avatar}/>
        {comment?.user.username}
      </div>
      {comment?.text}
    </div>
  )
}
