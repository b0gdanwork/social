import { FC, Suspense } from 'react'
import {createBrowserRouter, Routes } from 'react-router-dom'
import { RouteConfigApp } from 'shared/config/routeConfig/routeConfig'

interface Props {
}

const AppRouter = () => {

  const router = createBrowserRouter(RouteConfigApp)
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={router}/>
    </Suspense>
  )
}

 export default AppRouter
