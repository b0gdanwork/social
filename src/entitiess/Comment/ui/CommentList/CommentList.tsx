import { type CommentT } from 'entitiess/Comment/model/types'
import CommentItem from '../CommentItem/CommentItem'

import s from './CommentList.module.scss'

interface Props {
  comments?: CommentT[]
  isLoading?: boolean
}

export default function CommentList ({ comments, isLoading }: Props) {
  return (
    <div className={s.wrapper}>
      {
        comments?.length
          ? comments.map(comment => {
            return <CommentItem key={comment.id} comment= {comment}/>
          })
          : 'Пусто'
      }
    </div>
  )
}
