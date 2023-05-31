import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppRoutesList from './config/routes'
import Loader from '@/shared/ui/Loader/Loader'

const AppRoutes = () => {
  
  const element = useRoutes(AppRoutesList)

  return (
    <Suspense fallback={<Loader />}>
      {element}
    </Suspense>
  )
}

export default AppRoutes
