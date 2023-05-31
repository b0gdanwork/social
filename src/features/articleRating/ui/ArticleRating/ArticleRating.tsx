import { memo, useEffect } from 'react'
import { RatingCard, type StarT } from '@/entitiess/Rating'
import { useGetRatingArticle, useSetRatingArticle } from '../../api/articleRatingApi'
import { Skeleton } from '@/shared/ui'
import { useSelector } from 'react-redux'
import { type UserT, getUser } from '@/entitiess/User'

interface Props {
  articleId: string
}

function ArticleRating ({ articleId }: Props) {

  const user = useSelector(getUser)
  const { data, isLoading, refetch } = useGetRatingArticle({ userId: user?.id || '', articleId }, {})
  const [mutatinRating, { isSuccess: isSuccessSet }] = useSetRatingArticle()

  useEffect(() => {

  }, [isSuccessSet])

  const setRating = (value: StarT, text?: (string | undefined)) => {
    mutatinRating({ articleId, userId: (user as UserT)?.id, rate: value, feedback: text })
    refetch()
  }

  if (isLoading || !user) {
    return (
      <Skeleton width={'100%'} height={'100px'}/>
    )
  }

  return (
    <div>
      <RatingCard 
        onChange={setRating}
        title={'Оцените статью'}
        selectedStars={data?.length ? data[0].rate : null}
      />
    </div>
  )
}

export default memo(ArticleRating)
