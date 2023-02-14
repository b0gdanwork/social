
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

export default function App() {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <div className={classNames('social-app', {}, [theme])}>
      <Navbar/>
      <div className={'content-container'}>
        <SideBar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/main' element={<MainPage/>}/>
          </Routes>
        </Suspense>
      </div>
  </div>
  )
}
