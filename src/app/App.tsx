
import './styles/index.scss'
import 'rc-tooltip/assets/bootstrap.css'

import { userActions } from 'entitiess/User'
import { useEffect } from 'react'
import { useTheme } from 'shared/config/theme'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

import { useAppDispath } from '../shared/lib/hooks/useAppDispath/useAppDispath'
import { Navbar, SideBar } from '../widgets/ui/index'
import AppRoutes from './providers/AppRoutes/AppRoutes'

const body: any = document.querySelector('body')

export default function App () {

  const { theme } = useTheme()
  const dispath = useAppDispath()

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
