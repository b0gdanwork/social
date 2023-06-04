import { useLayoutEffect, useState } from 'react'
import s from './AppImage.module.scss'
import Skeleton from '../Skeleton/Skeleton'

interface Props {
  src?: string
  alt?: string
  className?: string

}

export default function AppImage (props: Props) {

  const {
    src,
    alt,
    className
  } = props

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useLayoutEffect(() => {
    if (src) {
      const img = new Image()

      img.src = src
      img.onload = () => {
        setIsLoading(true)
        setIsError(false)
      }

      img.onerror = () => {
        setIsLoading(false)
        setIsError(true)
      }
    }

  }, [src])

  if (isLoading) {
    return (
      <div className={className}>
        <Skeleton className={s.img}/>
      </div>
    )
  }

  if (isError) {
    return (<div className={className}>
      <span className={s.error}>
        Error
      </span>
    </div>)
  }

  return (
    <div className={className}>
      <img alt={alt || ''} src={src || ''} className={s.img} />
    </div>
  )
}
