/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'
import { PathsAppT } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton, AppLink } from 'shared/ui'
import Logo from 'shared/assets/icons/men.svg'
import s from './Navbar.module.scss'
import Modal from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

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
  
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

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
        <AppButton onClick={openAuthModal} theme={AppButtonTheme.TRANSPARENT}>
          Войти
        </AppButton>
      </div>
      <Modal isOpen={isOpenAuthModal} onClose={closeCallback}>
        sdfsdfsdfasdfsadfsdf
      </Modal>
    </div>
  )
}

export default Navbar