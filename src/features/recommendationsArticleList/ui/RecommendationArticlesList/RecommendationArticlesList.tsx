import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getRecomendationsArticleDetailsIsLoading } from '../../model/selectors/recommendations'
import { getArticleRecomendations } from '../../model/slices/articleDetailsRecommendationsSlice'
import { featchRecomendationArticles } from '../../model/services/featchRecomendationArticles'

import { Divider } from 'shared/ui'
import { ArticleList, ArticleListViewT } from 'entitiess/Article'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'

interface Props {
  id: number | string
}

function RecommendationArticlesList ({ id }: Props) {

  const { t } = useTranslation()
  const dispatch = useAppDispath()

  const isLoading = useSelector(getRecomendationsArticleDetailsIsLoading)
  const articlesRecomended = useSelector(getArticleRecomendations.selectAll)

  useEffect(() => {
    dispatch(featchRecomendationArticles({ limit: 4 }))
  }, [dispatch])

  return (
    <div>
      <h2>{t('Рекомендованные статьи')}</h2>
      <Divider mobileSize='m-10' desctopSize='d-10'/>
      <ArticleList 
        isLoading={isLoading} 
        articles={articlesRecomended} 
        limit={4}
        view={ArticleListViewT.grid}
        target={'_blank'}
        />
    </div>
  )
}

export default memo(RecommendationArticlesList)
