import { RouteObject } from 'react-router';
import AppRoutes, { PathsAppT } from 'shared/config/routes/routes';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink } from 'shared/ui';

import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';
import s from './Navbar.module.scss';

type NavbarProps = {
  className?: string,
}

const Routes:Record<PathsAppT, string> = {
  [PathsAppT.MAIN]: 'main',
  [PathsAppT.ABOUT]: 'about',
}

const Navbar = (props: NavbarProps) => {

  const {
    className
  } = props

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        {Object.entries(Routes).map((key)=> {
          return <AppLink className={s.link} to={key[0]}>{key[1]}</AppLink>
        })}
      </div>
      <ToggleThemeBtn />
    </div>
  )
}

export default Navbar