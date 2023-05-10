import { RequareAuth } from 'app/providers/StoreProvider'
import { type RulesT } from 'entitiess/User'
import { AboutPage } from 'pages/AboutPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlePage } from 'pages/ArticlePage'
import { MainPage } from 'pages/MainPage'
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteObject } from 'react-router'

export enum PathsAppT {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile',
  ARTICLE = '/article',
  ARTICLE_DETAILS = '/article',
  ADMIN_PANEL = '/admin'
}

export type CustomRouteObject = RouteObject & {
  name?: string 
  path?: string
  authOnly?: boolean,
  rules?: RulesT[]
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
    children: [
      {
        index: true,
        element: <RequareAuth><ProfilePage /></RequareAuth>
      },
      {
        path: PathsAppT.PROFILE + '/:id', 
        element: <RequareAuth><ProfilePage /></RequareAuth>
      }
    ]
  },
  {
    name: 'Cтатьи',
    authOnly: true,
    path: PathsAppT.ARTICLE,
    children: [
      {
        index: true,
        element: <RequareAuth><ArticlePage /></RequareAuth>
      },
      {
        path: '/article/:id', 
        element: <RequareAuth><ArticleDetailsPage /></RequareAuth>
      }
    ]
  },
  {
    name: 'Админка',
    authOnly: true,
    path: PathsAppT.ADMIN_PANEL,
    rules: ['ADMIN', 'MANAGER'],
    children: [
      {
        index: true,
        element: <RequareAuth><AdminPanelPage /></RequareAuth>
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
] 

export default AppRoutesList 
