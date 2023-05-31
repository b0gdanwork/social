import React, { useRef, type ReactNode, useEffect, useCallback } from 'react'
import s from './PageLayout.module.scss'
import useInfiniteScroll from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { getPageLayoutScroll } from '../model/selectors/PageLayoutSelectors'
import { useAppDispath } from '@/shared/lib/hooks/useAppDispath/useAppDispath'
import { pageLayoutActions } from '../model/slice/pageLayoutSlice'
import throttle from 'lodash/throttle'

interface Props {
  children: ReactNode,
  saveScrollPosition?: boolean
  onScrollEnd?: () => void
}

export default function PageLayout ({ children, saveScrollPosition = false, onScrollEnd }: Props) {

  const dispatch = useAppDispath()
  const location = useLocation()
  const scrollList = useSelector(getPageLayoutScroll)
  
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  
  useEffect(() => {
    if (!saveScrollPosition) return 
    if (location.pathname in scrollList) {
      wrapperRef.current.scrollTop = scrollList[location.pathname]
    } else {
      dispatch(pageLayoutActions.setPositionScroll({ scroll: 0, path: location.pathname }))
    }
  }, [dispatch, location, saveScrollPosition, scrollList, wrapperRef])

  const onScroll = useCallback(throttle((event: any) => {
    dispatch(pageLayoutActions.setPositionScroll({ scroll: event.target.scrollTop, path: location.pathname }))
  }, 500), [location])

  useInfiniteScroll({
    refTrigger: triggerRef,
    refWrapper: wrapperRef,
    callback: onScrollEnd 
  })
  
  return (
    <div className={s.layout} ref={wrapperRef} onScroll={saveScrollPosition ? onScroll : undefined}>
      {children}
      <div ref={triggerRef} className={s.trigger}></div>
    </div> 
  )
}
