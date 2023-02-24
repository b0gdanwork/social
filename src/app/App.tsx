
import './styles/index.scss';

import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import { Navbar, SideBar } from '../widgets/ui/index';
import AppRoutes from './providers/AppRoutes/AppRoutes';
import { useEffect } from 'react';

const body: any = document.querySelector('body')

export default function App () {

  const { theme } = useTheme()

  useEffect(() => {
    if (!body) return
    body.className = theme
  }, [theme])

  return (
    <div className={classNames('social-app')}>
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
