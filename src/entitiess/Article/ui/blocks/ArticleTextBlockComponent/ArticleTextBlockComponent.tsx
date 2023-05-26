import { type ArticleTextT } from '@/entitiess/Article/model/types/articleSchema'
import { memo } from 'react'

import s from './ArticleTextBlockComponent.module.scss'

interface Props {
  data: ArticleTextT
}

function ArticleTextBlockComponent ({ data }: Props) {
  
  return (
    <div className={s.wrapper}>
      <h3>
        {data.title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: data.value }} />
    </div>
  )
}

export default memo(ArticleTextBlockComponent)
