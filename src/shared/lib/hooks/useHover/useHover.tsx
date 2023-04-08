import { useCallback, useMemo, useState } from 'react'

interface ReturnFuncs {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverResultT = [boolean, ReturnFuncs]

export const useHover = (): UseHoverResultT => {

  const [iseHover, setIseHover] = useState(false)

  const onMouseEnter = useCallback(() => { setIseHover(true) }, [])
  const onMouseLeave = useCallback(() => { setIseHover(false) }, [])

  return useMemo(() => [iseHover, { onMouseEnter, onMouseLeave }], [iseHover, onMouseEnter, onMouseLeave])
}
