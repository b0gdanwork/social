import { type ArticleImageT } from 'entitiess/Article/model/types/articleSchema'

import s from './ArticleImageBlockComponent.module.scss'

interface Props {
  data: ArticleImageT
}

export default function ArticleImageBlockComponent ({ data }: Props) {
  return (
    <div className={s.wrapper}>
      <img src={data.src}/>
    </div>
  )
}
