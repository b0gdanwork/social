import React, { useRef, type ReactNode } from 'react'
import s from './PageLayout.module.scss'
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface Props {
  children: ReactNode,
  onScrollEnd?: () => void
}

export default function PageLayout ({ children, onScrollEnd }: Props) {

  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    refTrigger: triggerRef,
    refWrapper: wrapperRef,
    callback: onScrollEnd 
  })
  
  return (
    <div className={s.layout} ref={wrapperRef}>
      {children}
      <div ref={triggerRef}></div>
    </div> 
  )
}
