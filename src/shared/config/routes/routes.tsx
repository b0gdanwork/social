import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { type RouteObject } from 'react-router';

export enum PathsAppT {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile'
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
    path: PathsAppT.PROFILE,
    element: <ProfilePage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default AppRoutesList
