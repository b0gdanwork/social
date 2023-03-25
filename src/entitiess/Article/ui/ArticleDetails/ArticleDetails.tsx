import { fetchArticleById } from 'entitiess/Article/model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from 'entitiess/Article/model/slice/articleSlice'
import { memo, useEffect } from 'react'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { useSelector } from 'react-redux'
import { getArticleDetailError } from '../../model/selectors/getArticleDetailError/getArticleDetailError'
import { getArticleDetailIsLoading } from '../../model/selectors/getArticleDetailIsLoading/getArticleDetailIsLoading'
import { getArticleDetailData } from '../../model/selectors/getArticleDetailData/getArticleDetailData'
import { Divider, Loader, Skeleton } from 'shared/ui'

interface Props {
  id?: string | number 
}

function ArticleDetails ({ id }: Props) {

  console.log('ArticleDetails ', id)

  const dispatch = useAppDispath()
  
  const data = useSelector(getArticleDetailData)
  const error = undefined
  // const error = useSelector(getArticleDetailError)
  // const isLoading = useSelector(getArticleDetailIsLoading)
  const isLoading = true

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
    content = (
      <div>
        <Skeleton  
          width={80}
          height={80}
          border={50}
        />
        <Divider mobileSize='m-20' desctopSize='d-30'/>
        <Skeleton  
          width={200}
          height={60}
        />
        <Divider mobileSize='m-20' desctopSize='d-10'/>
        <Skeleton  
          width={400}
          height={60}
        />
        <Divider mobileSize='m-20' desctopSize='d-10'/>
        <Skeleton  
          width={600}
          height={80}
        />
      </div>
    )
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
