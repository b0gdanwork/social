import { RequareAuth } from 'app/providers/StoreProvider'
import { AboutPage } from 'pages/AboutPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { ArticleCreatePage } from 'pages/ArticleCreatePage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlePage } from 'pages/ArticlePage'
import { MainPage } from 'pages/MainPage'
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

import { BiHomeAlt } from 'react-icons/bi'
import { BiGame } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { RiArticleLine, RiAdminLine } from 'react-icons/ri'
import { ForbiddenPage } from 'pages/ForbiddenPage'
import { CustomRouteObject, PathsAppT } from './types'

const AppRoutesList: CustomRouteObject[] = [
  {
    name: 'Профиль',
    authOnly: true,
    path: PathsAppT.PROFILE,
    icon: CgProfile,
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
    name: 'Игры',
    path: PathsAppT.ABOUT,
    element: <AboutPage />,
    icon: BiGame
  },
  {
    name: 'Главная страница',
    path: PathsAppT.MAIN,
    element: <MainPage />,
    icon: BiHomeAlt
  },
  {
    name: 'Статьи',
    authOnly: true,
    path: PathsAppT.ARTICLE,
    icon: RiArticleLine,
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
    name: 'Админка',
    icon: RiAdminLine,
    authOnly: true,
    path: PathsAppT.ADMIN_PANEL,
    rules: ['ADMIN', 'MANAGER'],
    children: [
      {
        index: true,
        element: <RequareAuth rules={['ADMIN', 'MANAGER']}><AdminPanelPage /></RequareAuth>
      }
    ]
  },
  {
    path: PathsAppT.FORBIDDEN,
    element: <ForbiddenPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
] 

export default AppRoutesList 
