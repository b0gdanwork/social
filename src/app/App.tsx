
import { Suspense } from 'react';
import './styles/index.scss'
import {
  Route, Routes,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import {useTheme} from 'shared/config/theme';
import { className } from 'shared/lib/helpers/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export default function App() {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <div className={className('', {}, [theme])}>
      <button onClick={toogleTheme}>theme</button>
      <Link  to="/about" >about</Link>
      <Link to="/main">main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </Suspense>
  </div>
  )
}
