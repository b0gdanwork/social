import { memo, useState } from 'react'

import { type ArticleCodeT } from 'entitiess/Article/model/types/articleSchema'
import { BiCopy } from 'react-icons/bi'

import s from './ArticleCodeBlockComponent.module.scss'

import Tooltip from 'rc-tooltip'

interface Props {
  data: ArticleCodeT
}

function ArticleCodeBlockComponent ({ data }: Props) {

  const [toolText, setToolText] = useState('Click to copy')

  function copyFunc () {
    const copyText = data.code
  
    navigator.clipboard.writeText(copyText)
    setToolText('Сopied!')
  }

  return (
    <div className={s.wrapper}>
      <pre>
        <code>
          {data.code}
        </code>
      </pre>
      <Tooltip
        trigger={['hover']}
        afterVisibleChange={() => { setToolText('Click to copy') }}
        overlay={<span>{toolText}</span>}
      >
        <button className={s.copy} onClick={copyFunc} id={'articleCopyBtn'}>
          <BiCopy size={20}/>
        </button>
      </Tooltip>
    </div>
  )
}

export default memo(ArticleCodeBlockComponent)
