import { useTranslation } from 'react-i18next'
import { PathsAppT } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton, AppLink } from 'shared/ui'
import { useEffect } from 'react'
import Logo from 'shared/assets/icons/men.svg'
import s from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entitiess/User'
import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'

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
  
  const dispath = useDispatch()
  const user = useSelector(getUser)
  
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

  useEffect(() => {
    if (user) {
      setIsOpenAuthModal(false)
    }
  }, [dispath, user])
  
  const logout = useCallback(() => {
    dispath(userActions.logoutAuthData())
  }, [dispath])

  const openAuthModal = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [setIsOpenAuthModal])

  const closeCallback = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [setIsOpenAuthModal])

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
        {user
          ? <AppButton onClick={logout} theme={AppButtonTheme.TRANSPARENT}>
            Выйти
          </AppButton>
          : <AppButton onClick={openAuthModal} theme={AppButtonTheme.TRANSPARENT}>
            Войти
          </AppButton>
        }
      </div>
      <LoginModal isOpen={isOpenAuthModal} onClose={closeCallback}/>
    </div>
  )
}

export default Navbar