
import { Suspense } from 'react';
import './styles/index.scss'
import {
  Route, Routes,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import AboutPageAsync from './components/AboutPage/AboutPageAsync';
import MainPageAsync from './components/MainPage/MainPageAsync';
import useTheme from './theme/useTheme';
import { ThemesT } from './theme/ThemeContext';

export default function App() {
  const {theme, setTheme} = useTheme()
  
  const themeToggle = () => {
    if (theme ===ThemesT.BLUE_THEME) {
      setTheme(ThemesT.DARK_THEME)
    }
    if (theme ===ThemesT.DARK_THEME) {
      setTheme(ThemesT.BLUE_THEME)
    }
  }
  
  return (
    <div className={theme}>
      <button onClick={themeToggle}>theme</button>
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
