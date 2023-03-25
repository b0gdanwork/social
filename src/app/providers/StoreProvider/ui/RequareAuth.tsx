import { useMemo, type ReactNode } from 'react'
import { Provider, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'

import { createReduxStore } from '../config/reduxConfig'

import type StoreSchema from '../config/StoreSchema'
import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'
import { PathsAppT } from 'shared/config/routes/routes'
import { getUserInit } from 'entitiess/User/model/selectors/getUserInit/getUser'
import { Loader } from 'shared/ui'

interface PropsT {
  children: ReactNode,
}

const RequareAuth = ({ children }: PropsT) => {

  const user = useSelector(getUser)
  const userInit = useSelector(getUserInit)

  if (!user && userInit) {
    // eslint-disable-next-line no-debugger
    debugger
    return <Navigate to={PathsAppT.MAIN}/>
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
