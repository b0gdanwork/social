import { userActions } from 'entitiess/User'
import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Logo from 'shared/assets/icons/men.svg'
import { PathsAppT } from 'shared/config/routes/routes'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { AppButton, Avatar, Dropdawn } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

import s from './Navbar.module.scss'
import { useNavigate } from 'react-router'
import { type DropdawnItem } from 'shared/ui/Dropdawn/Dropdawn'

interface NavbarProps {
  className?: string
}

const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation()

  const {
    className
  } = props
  
  const dispath = useAppDispath()
  const navigete = useNavigate()
  const user = useSelector(getUser)
  
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

  useEffect(() => {
    if (user) {
      setIsOpenAuthModal(false)
    }
  }, [dispath, user])
  
  const logout = useCallback(() => {
    const confirResult = confirm('Вы действительно хотитей выйти?')
    if (!confirResult) return
    dispath(userActions.logoutAuthData())
  }, [dispath])

  const openAuthModal = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [setIsOpenAuthModal])

  const closeCallback = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [setIsOpenAuthModal])

  const createNewArticle = useCallback(() => {
    navigete(PathsAppT.ARTICLE_CREATE)
  }, [navigete])

  const toProfile = useCallback(() => {
    if (!user) return
    navigete(`${PathsAppT.PROFILE}/${user.id}`)
  }, [navigete, user])

  const dropdawnnList = useMemo<DropdawnItem[]>(() => [
    {
      children: <div className={s.newArticle} key={1}>
        {t('Профиль')}
      </div>,
      onClick: toProfile
    },
    {
      children: <button className={s.newArticle} key={2}>
        {t('Создать статью')}
      </button>,
      onClick: createNewArticle
    },
    {
      children: <button className={s.newArticle} key={3}>
        {t('Выйти')}
      </button>,
      onClick: logout, 
      styleActive: { backgroundColor: 'var(--red)' }
    }
    
  ], [createNewArticle, logout, t, toProfile])
  
  const renderLogin = () => {
    if (!user) return
    return <>
      <Dropdawn 
        menuItems={dropdawnnList}
        innerButton={<Avatar src={user.avatar} width={30} height={30}/>}
      />
    </>
  }

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={s.links}>
      </div>
      <div className={s.right}>
        {user
          ? renderLogin()
          : <>
            <AppButton onClick={openAuthModal} theme={AppButtonTheme.TRANSPARENT}>
              {t('Войти')}
            </AppButton>
            <LoginModal isOpen={isOpenAuthModal} onClose={closeCallback}/>
          </>
        }
      </div>
    </div>
  )
}

export default memo(Navbar)
