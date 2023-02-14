import React, { Suspense } from 'react'
import { createBrowserRouter, Routes, useRoutes } from 'react-router-dom'
import AppRoutes from 'shared/config/routes/routes'

type Props = {}


const AppRoutesProvider = ({}: Props) => {
  
  let element = useRoutes(AppRoutes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
  )
}

export default AppRoutesProvider