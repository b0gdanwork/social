import { RequareAuth } from 'app/providers/StoreProvider'
import { AboutPage } from 'pages/AboutPage'
import { ArticlePage } from 'pages/ArticlePage'
import { MainPage } from 'pages/MainPage'
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router'

export enum PathsAppT {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile',
  ARTICLE = '/article',
  ARTICLE_DETAILS = '/article_details'
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
    element: <RequareAuth><ProfilePage /></RequareAuth>
  },
  {
    name: 'Cтатьи',
    authOnly: true,
    path: PathsAppT.ARTICLE,
    element: <RequareAuth><ArticlePage /></RequareAuth>
  },
  {
    authOnly: true,
    path: PathsAppT.ARTICLE_DETAILS,
    element: <RequareAuth><ArticlePage /></RequareAuth> 
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
] 

export default AppRoutesList 
