/* eslint-disable i18next/no-literal-string */
import { useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton } from 'shared/ui'
import ToggleLanguageBtn from '../ToggleLanguageBtn/ToggleLanguageBtn'
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn'

import { TbArrowBarToRight } from 'react-icons/tb'

import s from './SideBar.module.scss'

interface Props {}

function SideBar ({}: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={classNames(s.sidebar, { [s.open]: isOpen }, [])}>
      <div className={s.sidebarTop}>

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

export default SideBar
