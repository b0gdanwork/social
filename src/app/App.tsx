
import { Suspense } from 'react';
import './styles/index.scss'
import {
  Route, Routes,
} from "react-router-dom";
import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Navbar, SideBar } from '../widgets/ui/index';
import AppRoutes from './providers/AppRoutes/AppRoutes';

export default function App() {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <div className={classNames('social-app', {}, [theme])}>
      <Navbar/>
      <div className={'content-page'}>
        <SideBar/>
        <AppRoutes />
      </div>
  </div>
  )
}
