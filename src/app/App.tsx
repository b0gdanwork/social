
import './styles/index.scss';

import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import { Navbar, SideBar } from '../widgets/ui/index';
import AppRoutes from './providers/AppRoutes/AppRoutes';

export default function App() {
  const {theme} = useTheme()
  
  return (
    <div className={classNames('social-app', {}, [theme])}>
      <Navbar/>
      <div className={'content-page'}>
        <SideBar/>
        <div className={'contant-page__inner'}>
          <AppRoutes />
        </div>
      </div>
  </div>
  )
  
}
