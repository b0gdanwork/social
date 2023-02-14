
import './styles/index.scss'
import { Link } from 'react-router-dom';
import {useTheme} from 'shared/config/theme';
import { className } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';

export default function App() {
  const {theme, toogleTheme} = useTheme()
  
  return (
    <div className={className('', {}, [theme])}>
      <button onClick={toogleTheme}>theme</button>
      <Link  to="/about" >about</Link>
      <Link to="/main">main</Link>
      <AppRouter/>
  </div>
  )
}
