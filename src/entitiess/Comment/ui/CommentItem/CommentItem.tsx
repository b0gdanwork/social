import { type CommentT } from '@/entitiess/Comment/model/types'
import { Link } from 'react-router-dom'
import { PathsAppT } from '@/shared/const/routingTypes'
import { Avatar } from '@/shared/ui'

import s from './CommentItem.module.scss'

interface Props {
  comment?: CommentT
  isLoading?: boolean
}

export default function CommentItem ({ comment, isLoading }: Props) {

  if (!comment) {
    return <></>
  }

  return (
    <div className={s.comment}>
      <Link to={`${PathsAppT.PROFILE} + ${comment.user.id || ''}`}>
        <div className={s.user}>
          <Avatar width={30} height={30} src={comment.user.avatar}/>
          {comment?.user.username}
        </div>
      </Link>
      {comment?.text}
    </div>
  )
}
