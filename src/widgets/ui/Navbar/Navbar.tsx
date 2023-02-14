import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn"
import { AppLink } from "shared/ui"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import s from './Navbar.module.scss'
import AppRoutes, { PathsAppT } from "shared/config/routes/routes"
import { RouteObject } from 'react-router';

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