import { RequareAuth } from 'app/providers/StoreProvider'
import { AboutPage } from 'pages/AboutPage'
import { ArticleCreatePage } from 'pages/ArticleCreatePage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
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
  ARTICLE_CREATE = '/article/new',
  ARTICLE_EDIT = '/article/:id/edit'
}

export type CustomRouteObject = RouteObject & {
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
        path: PathsAppT.ARTICLE_CREATE,
        element: <RequareAuth><ArticleCreatePage /></RequareAuth>
      },
      {
        path: PathsAppT.ARTICLE_EDIT,
        element: <RequareAuth><ArticleEditPage /></RequareAuth>
      },
      {
        path: '/article/:id', 
        element: <RequareAuth><ArticleDetailsPage /></RequareAuth>
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
] 

export default AppRoutesList 
