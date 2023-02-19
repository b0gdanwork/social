import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';
import { type RouteObject } from 'react-router';

export enum PathsAppT {
  MAIN = '/',
  ABOUT = '/about',
}

const AppRoutesList: RouteObject[] = [
  {
    path: PathsAppT.MAIN,
    element: <MainPage />
  },
  {
    path: PathsAppT.ABOUT,
    element: <AboutPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
];

export default AppRoutesList
