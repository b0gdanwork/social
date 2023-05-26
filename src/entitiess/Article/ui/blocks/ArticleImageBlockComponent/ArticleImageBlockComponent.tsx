import { type ArticleImageT } from '@/entitiess/Article/model/types/articleSchema'
import { memo } from 'react'

import s from './ArticleImageBlockComponent.module.scss'

interface Props {
  data: ArticleImageT
}

function ArticleImageBlockComponent ({ data }: Props) {
  return (
    <div className={s.wrapper}>
      <img src={data.src}/>
      {data.title && <div className={s.text}>
        {data.title}
      </div>}
    </div>
  )
}

export default memo(ArticleImageBlockComponent)
