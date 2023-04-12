import { memo, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { fetchArticleById } from 'entitiess/Article/model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from 'entitiess/Article/model/slice/articleDetailsSlice'

import { getArticleDetailError } from '../../model/selectors/getArticleDetailError/getArticleDetailError'
import { getArticleDetailIsLoading } from '../../model/selectors/getArticleDetailIsLoading/getArticleDetailIsLoading'
import { getArticleDetailData } from '../../model/selectors/getArticleDetailData/getArticleDetailData'

import ArticleTitle from '../ArticleTitle/ArticleTitle'
import { ARTICLE_TYPES } from 'entitiess/Article/model/types/articleSchema'
import ArticleCodeBlockComponent from '../blocks/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import ArticleImageBlockComponent from '../blocks/ArticleImageBlockComponent/ArticleImageBlockComponent'
import ArticleTextBlockComponent from '../blocks/ArticleTextBlockComponent/ArticleTextBlockComponent'

import s from './ArticleDetails.module.scss'

interface Props {
  id?: string | number 
}

function ArticleDetails ({ id }: Props) {

  const dispatch = useAppDispath()
  
  const data = useSelector(getArticleDetailData)
  const error = useSelector(getArticleDetailError)
  const isLoading = useSelector(getArticleDetailIsLoading)

  useEffect(() => {
    if (!id) return 
    dispatch(fetchArticleById(`${id}`))
  }, [id])

  const renderBlocks = useMemo(() => {
    if (!data) return ''
    
    const blocks = data.blocks.map((block) => {
      switch (block.type) {
        
        case ARTICLE_TYPES.CODE:
          return <ArticleCodeBlockComponent data={block} key={block.id}/>

        case ARTICLE_TYPES.IMAGE:
          return <ArticleImageBlockComponent data={block} key={block.id}/>
          
        case ARTICLE_TYPES.TEXT:
          return <ArticleTextBlockComponent data={block} key={block.id}/>
      
        default:
          return ''
      }
    })

    return <div className={s.blocks}>{blocks}</div>
  }, [data])
  
  let content

  if (error) {
    content = <div>error</div>
  } else if (isLoading) {
    content = (
      <ArticleTitle article={data} isLoading={true}/>
    )
  } else if (data) {
    content = <div>
      <ArticleTitle article={data}/>
      {renderBlocks}
    </div>
  }

  return (
    <DynamicModuleLoader reducerKey='articleDetails' reducer={articleDetailsReducer}>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetails) 
