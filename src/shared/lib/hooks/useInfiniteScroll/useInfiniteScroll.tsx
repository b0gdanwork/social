import { useEffect } from 'react'

interface Props {
  callback?: () => void,
  refTrigger: React.MutableRefObject<any>,
  refWrapper: React.MutableRefObject<any>,
}

export default function useInfiniteScroll ({ callback, refTrigger, refWrapper }: Props) {

  const options = {
    root: refWrapper.current,
    // rootMargin: '0px',
    threshold: 0.9
  }

  useEffect(() => {
    let observer: IntersectionObserver
    if (callback) {
      const callbackLocal: IntersectionObserverCallback = ([entry], observer) => {
        if (entry.isIntersecting) {
          callback()
        }
      }
      
      observer = new IntersectionObserver(callbackLocal, options)
      observer.observe(refTrigger.current)
  
    }
    return () => {
      if (observer) {
        observer.unobserve(refTrigger.current)
      }
    }
  }, [callback])

}
