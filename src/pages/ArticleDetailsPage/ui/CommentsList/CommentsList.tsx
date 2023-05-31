import { useEffect, useCallback, memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CommentList } from '@/entitiess/Comment'
import { AddCommentForm } from '@/features/addCommentForm'
import { useAppDispath } from '@/shared/lib/hooks/useAppDispath/useAppDispath'

import { featchCommentsByArrticleId } from '../../model/services/featchCommentsByArrticleId'
import { getArticleComments } from '../../model/slices/articleDetailsComponentsSlice'
import { getCommentsArticleIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '@/features/addCommentForm'

import s from './CommentsList.module.scss'

interface Props {
  id: string
}

function CommentsList ({ id }: Props) {

  const { t } = useTranslation()
  const dispatch = useAppDispath()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getCommentsArticleIsLoading)

  useEffect(() => {
    dispatch(featchCommentsByArrticleId(id))
  }, [dispatch, id])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [])

  return (
    <div>
      <h2>{t('Комментарии')}</h2>
      <div className={s.commentForm}>
        <AddCommentForm onSendComment={onSendComment}/>
      </div>
      <CommentList
        comments={comments}
        isLoading={isLoading}
      />
    </div>
  )
}

export default memo(CommentsList)
