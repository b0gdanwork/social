import { useMemo, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'
import { getUserInit } from 'entitiess/User/model/selectors/getUserInit/getUserInit'
import { RulesT, getUserRoles } from 'entitiess/User'

import { Loader } from 'shared/ui'
import { PathsAppT } from 'shared/config/routes/types'

interface PropsT {
  rules?: RulesT[]
  children: ReactNode,
}

const RequareAuth = ({ children, rules }: PropsT) => {

  const user = useSelector(getUser)
  const userInit = useSelector(getUserInit)
  const userRules = useSelector(getUserRoles)

  const isForbidden = useMemo(() => {
    if (!rules) return false

    if (userRules?.length && rules?.length) {
      const result = rules.some(rule => {
        return userRules.find(userRule => {
          return userRule === rule
        })
      })
      return !result
    } else {
      return true
    }

  }, [userRules])

  if (!user && userInit) {
    return <Navigate to={PathsAppT.MAIN}/>
  }

  if (isForbidden) {
    return <Navigate to={PathsAppT.FORBIDDEN}/>
  }

  if (!userInit) {
    return <><Loader/></>
  }
  
  return (
    <>
      {children}
    </>
  )
}

export default RequareAuth
