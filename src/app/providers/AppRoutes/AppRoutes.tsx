import { Suspense } from 'react'
import { type RouteObject, useRoutes } from 'react-router-dom'
import AppRoutesList from 'shared/config/routes/routes'
import Loader from 'shared/ui/Loader/Loader'

const AppRoutes = () => {
  
  const element = useRoutes(AppRoutesList as RouteObject[])

  return (
    <Suspense fallback={<Loader />}>
      {element}
    </Suspense>
  )
}

export default AppRoutes
