import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Divider } from '@/shared/ui'
import { ArticleList, ArticleListViewT } from '@/entitiess/Article'
import { useArticleRecomendList } from '../../model/api'

interface Props {
  id: number | string
}

function RecommendationArticlesList ({ id }: Props) {

  const { t } = useTranslation()
  const { isError, isLoading, data } = useArticleRecomendList(4)

  if (isError) {
    // eslint-disable-next-line i18next/no-literal-string
    return <>Article recommend error</>
  }

  return (
    <div>
      <h2>{t('Рекомендованные статьи')}</h2>
      <Divider mobileSize='m-10' desctopSize='d-10'/>
      <ArticleList 
        isLoading={isLoading} 
        articles={data} 
        limit={4}
        view={ArticleListViewT.grid}
        target={'_blank'}
        />
    </div>
  )
}

export default memo(RecommendationArticlesList)
