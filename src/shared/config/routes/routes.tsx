import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteObject } from "react-router";

export enum PathsAppT {
  MAIN = "/",
  ABOUT = "/about",
}

const AppRoutesList: RouteObject[] = [
  {
    path: PathsAppT.MAIN,
    element: <MainPage />,
  },
  {
    path: PathsAppT.ABOUT,
    element: <AboutPage />,
  },
];

export default AppRoutesList
