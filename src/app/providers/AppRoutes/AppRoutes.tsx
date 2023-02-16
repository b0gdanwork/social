import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import AppRoutesList from 'shared/config/routes/routes';

const AppRoutes = () => {
  
  const element = useRoutes(AppRoutesList);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
  )
}

export default AppRoutes