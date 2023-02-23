import { useTranslation } from 'react-i18next'
import { PathsAppT } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppLink } from 'shared/ui'
import Logo from 'shared/assets/icons/men.svg'
import s from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Routes: Record<PathsAppT, string> = {
  [PathsAppT.MAIN]: 'Главная страница',
  [PathsAppT.ABOUT]: 'О компании' 
}

const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation();

  const {
    className
  } = props
  
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={s.links}>
        {Object.entries(Routes).map((key) => {
          return <AppLink key={key[0]} className={s.link} to={key[0]}>{t(key[1])}</AppLink>
        })}
      </div>
      <div className={s.right}>
        
      </div>
    </div>
  )
}

export default Navbar