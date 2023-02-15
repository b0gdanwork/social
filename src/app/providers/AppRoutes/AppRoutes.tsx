import React, { Suspense } from 'react';
import { createBrowserRouter, Routes, useRoutes } from 'react-router-dom';
import AppRoutesList from 'shared/config/routes/routes';

type Props = {}


const AppRoutes = ({}: Props) => {
  
  let element = useRoutes(AppRoutesList);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
  )
}

export default AppRoutes