import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router'

export enum PathsAppT {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile'
}

type CustomRouteObject = RouteProps & {
  name?: string 
  path?: string
  authOnly?: boolean
}

const AppRoutesList: CustomRouteObject[] = [
  {
    name: 'Главная страница',
    path: PathsAppT.MAIN,
    element: <MainPage />
  },
  {
    name: 'О компании',
    path: PathsAppT.ABOUT,
    element: <AboutPage />
  },
  {
    name: 'Профиль',
    authOnly: true,
    path: PathsAppT.PROFILE,
    element: <ProfilePage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
] 

export default AppRoutesList 
