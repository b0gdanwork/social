import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteObject } from "react-router"

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const RouteConfigApp: RouteObject[] = [
  {
    path: AppRoutes.MAIN,
    element: <MainPage />
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage />
  },
]