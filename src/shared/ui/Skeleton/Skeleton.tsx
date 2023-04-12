
import { memo } from 'react'
import s from './Skeleton.module.scss'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

interface Props {
  width?: number | string,
  height?: number | string,
  border?: number
  className?: string
}

function Skeleton (props: Props) {

  const {
    width,
    height,
    border,
    className
  } = props

  const style = {
    width,
    height,
    borderRadius: `${border || 0}px`
  }

  return (
    <div style={style} className={classNames(s.skeleton, {}, [className])}/>
  )
}

export default memo(Skeleton)
