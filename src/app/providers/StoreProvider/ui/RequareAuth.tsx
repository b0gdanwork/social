import { useMemo, type ReactNode } from 'react'
import { Provider, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'

import { createReduxStore } from '../config/reduxConfig'

import type StoreSchema from '../config/StoreSchema'
import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'
import { PathsAppT } from 'shared/config/routes/routes'

interface PropsT {
  children: ReactNode,
}

const RequareAuth = ({ children }: PropsT) => {

  const user = useSelector(getUser)

  if (!user) {
    return <Navigate to={PathsAppT.MAIN}/>
  }
  
  return (
    <>
      {children}
    </>
  )
}

export default RequareAuth
