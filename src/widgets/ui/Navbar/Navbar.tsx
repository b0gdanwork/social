import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn"
import { AppLink } from "shared/ui"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import s from './Navbar.module.scss'

type NavbarProps = {
  className?: string,
}

const Navbar = (props: NavbarProps) => {

  const {
    className
  } = props

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink className={s.link} to="/about">about</AppLink>
        <AppLink className={s.link} to="/main">main</AppLink>
      </div>
      <ToggleThemeBtn />
    </div>
  )
}

export default Navbar