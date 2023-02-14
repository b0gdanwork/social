import { useTheme } from "shared/config/theme"

import s from './ToggleThemeBtn.module.scss'
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { AppButton } from "shared/ui"

type NavbarProps = {
  className?: string,
}

const ToggleThemeBtn = (props: NavbarProps) => {

  const {
    className
  } = props

  const {theme, toogleTheme} = useTheme()
  
  return (
    <AppButton className={classNames(s.btn, {}, [className])} onClick={toogleTheme}>
      Сменить тему
    </AppButton>
  )
}

export default ToggleThemeBtn