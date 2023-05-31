/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { AppButton, AppLink } from '@/shared/ui'
import ToggleLanguageBtn from '../ToggleLanguageBtn/ToggleLanguageBtn'
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn'

import { TbArrowBarToRight } from 'react-icons/tb'

import s from './SideBar.module.scss'
import AppRoutesList from '@/shared/config/routes/routes'
import { useSelector } from 'react-redux'
import { getUser, isUserAdmin } from '@/entitiess/User'
import { useTranslation } from 'react-i18next'
import { PathsAppT } from '@/shared/config/routes/types'

interface Props {}

function SideBar ({}: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const { t } = useTranslation()
  const user = useSelector(getUser)
  const isAdmin = useSelector(isUserAdmin)

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const renderLinks = useMemo(() => {
    const list = AppRoutesList.map((route, ind) => {
      if (!route.path || !route.name || (!user && route.authOnly) || route.rules) return <></>
      
      return <AppLink key={`${route.path}${ind}`} className={s.link} to={route.path} Icon={route.icon} isOpen={isOpen} colorIcon='var(--navbar-color)'>{t(route.name)}</AppLink>
    })

    if (isAdmin) {
      const route = AppRoutesList.find(item => item.path === PathsAppT.ADMIN_PANEL)
      if (!route?.path || !route.name || (!user && route.authOnly)) return 
      list.push(<AppLink key={route.path} className={classNames(s.link, {}, [s.admin])} to={route.path} Icon={route.icon} isOpen={isOpen} colorIcon='var(--navbar-color)'>{t(route.name)}</AppLink>)
    }

    return list
  }, [isAdmin, isOpen, t, user])

  return (
    <div className={classNames(s.sidebar, { [s.open]: isOpen }, [])}>
      <div className={s.sidebarTop}>
        <div className={s.links}>
          {renderLinks}
        </div>
      </div>
      <div className={s.sidebarBottom}>
        <ToggleThemeBtn className={s.iconBtn} size={25} color={'var(--sidebar-color)'}/>
        <ToggleLanguageBtn className={s.iconBtn} size={25} color={'var(--sidebar-color)'}/>
        <AppButton onClick={onToggle} className={classNames(s.iconBtn)} baseClass={false}>
          <TbArrowBarToRight size={25} className={classNames(s.iconToggle, { [s.openIcon]: isOpen })} color={'var(--sidebar-color)'}/>
        </AppButton>
      </div>
    </div>
  )
}

export default memo(SideBar)
