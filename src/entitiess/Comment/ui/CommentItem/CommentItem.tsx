import { type CommentT } from 'entitiess/Comment/model/types'
import { Avatar } from 'shared/ui'

import s from './CommentItem.module.scss'

interface Props {
  comment?: CommentT
  isLoading?: boolean
}

export default function CommentItem ({ comment, isLoading }: Props) {

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
