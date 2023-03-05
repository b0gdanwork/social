
import './styles/index.scss';

import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import { Navbar, SideBar } from '../widgets/ui/index';
import AppRoutes from './providers/AppRoutes/AppRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entitiess/User';

const body: any = document.querySelector('body')

export default function App () {

  const { theme } = useTheme()
  const dispath = useDispatch()

  useEffect(() => {
    if (!body) return
    body.className = theme
  }, [theme])

  useEffect(() => {
    dispath(userActions.initAuthData())
  }, [dispath])

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
