import { fetchArticleById } from 'entitiess/Article/model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from 'entitiess/Article/model/slice/articleSlice'
import { memo, useEffect } from 'react'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticleDetailError } from '../../model/selectors/getArticleDetailError/getArticleDetailError'
import { getArticleDetailIsLoading } from '../../model/selectors/getArticleDetailIsLoading/getArticleDetailIsLoading'
import { getArticleDetailData } from '../../model/selectors/getArticleDetailData/getArticleDetailData'
import { Loader } from 'shared/ui'

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

  if (!id) {
    return <>Not found</>
  }

  let content
  
  if (error) {
    content = <div>error</div>
  } else if (isLoading) {
    content = <div><Loader/></div>
  } else {
    content = <div>ArticleDetails</div>
  }

  return (
    <DynamicModuleLoader reducerKey='articleDetails' reducer={articleDetailsReducer}>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetails)
