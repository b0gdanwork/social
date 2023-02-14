import { Link } from "react-router-dom"
import { useTheme } from "shared/config/theme"

import s from './Navbar.module.scss'
import { classNames } from "shared/lib/helpers/classNames/classNames"
import AppLink from "shared/ui/AppLink/AppLink"

type NavbarProps = {
  className?: string,
}

const Navbar = (props: NavbarProps) => {

  const {
    className
  } = props

  const {theme, toogleTheme} = useTheme()
  
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink className={s.link} to="/about">about</AppLink>
        <AppLink className={s.link} to="/main">main</AppLink>
      </div>
      <button onClick={toogleTheme}>theme</button>
    </div>
  )
}

export default Navbar