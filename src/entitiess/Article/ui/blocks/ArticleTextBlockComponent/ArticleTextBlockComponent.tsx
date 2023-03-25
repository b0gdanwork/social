import { type ArticleTextT } from 'entitiess/Article/model/types/articleSchema'
import React, { memo } from 'react'

import s from './ArticleTextBlockComponent.module.scss'

interface Props {
  data: ArticleTextT
}

function ArticleTextBlockComponent ({ data }: Props) {

  const renderParagraphs = () => {
    if (!data.paragraphs?.length) {
      return <></>
    } 

    return (
      <div className={s.parag}>
        {data.paragraphs.map((item) => <p key={item}>{item}</p>)}
      </div>
    )
  }

  return (
    <div className={s.wrapper}>
      <h3>
        {data.title}
      </h3>
      {renderParagraphs()}
    </div>
  )
}

export default memo(ArticleTextBlockComponent)
