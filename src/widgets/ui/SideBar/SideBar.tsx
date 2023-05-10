/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton, AppLink } from 'shared/ui'
import ToggleLanguageBtn from '../ToggleLanguageBtn/ToggleLanguageBtn'
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn'

import { TbArrowBarToRight } from 'react-icons/tb'

import s from './SideBar.module.scss'
import AppRoutesList from 'shared/config/routes/routes'
import { useSelector } from 'react-redux'
import { getUser } from 'entitiess/User'
import { useTranslation } from 'react-i18next'

interface Props {}

function SideBar ({}: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const { t } = useTranslation()
  const user = useSelector(getUser)

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const renderLinks = useMemo(() => {
    return AppRoutesList.map((key, ind) => {
      if (!key.path || !key.name || (!user && key.authOnly)) return <></>
      return <AppLink key={key.path + key.name} className={s.link} to={key.path} Icon={key.icon} isOpen={isOpen}>{t(key.name)}</AppLink>
    })
  }, [isOpen, t, user])

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
