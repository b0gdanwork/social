import { useEffect } from 'react'

interface Props {
  callback?: () => void,
  refTrigger: React.MutableRefObject<any>,
  refWrapper: React.MutableRefObject<any>,
}

export default function useInfiniteScroll ({ callback, refTrigger, refWrapper }: Props) {

  useEffect(() => {
    const refTriggerLocal = refTrigger.current
    const refWrapperLocal = refWrapper.current

    const options = {
      root: refWrapperLocal,
      // rootMargin: '0px',
      threshold: 0.9
    }
  
    let observer: IntersectionObserver
    if (callback && refTriggerLocal) {
      const callbackLocal: IntersectionObserverCallback = ([entry], observer) => {
        if (entry.isIntersecting) {
          callback()
        }
      }
      
      observer = new IntersectionObserver(callbackLocal, options)
      observer.observe(refTriggerLocal)
  
    }
    return () => {
      if (observer) {
        observer.unobserve(refTriggerLocal)
      }
    }
  }, [callback])

}
