
import { Suspense } from 'react';
import './styles/index.scss'
import {
  Route, Routes,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import AboutPageAsync from './components/AboutPage/AboutPageAsync';
import MainPageAsync from './components/MainPage/MainPageAsync';
import useTheme from './theme/useTheme';
import { className } from './heloers/classNames/classNames';

export default function App() {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <div className={className('', {}, [theme])}>
      <button onClick={toogleTheme}>theme</button>
      <Link  to="/about" >about</Link>
      <Link to="/main">main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync/>}/>
          <Route path='/main' element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
  </div>
  )
}
