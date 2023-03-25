
import { memo } from 'react'
import s from './Skeleton.module.scss'

interface Props {
  width?: number | string,
  height?: number | string,
  border?: number
}

function Skeleton (props: Props) {

  const {
    width,
    height,
    border   
  } = props

  const style = {
    width,
    height,
    borderRadius: `${border || 0}px`
  }

  return (
    <div style={style} className={s.skeleton}/>
  )
}

export default memo(Skeleton)
