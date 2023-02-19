/* eslint-disable i18next/no-literal-string */
import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppButton } from 'shared/ui';
import CreateErrorBtn from '../CreateErrorBtn/CreateErrorBtn';
import ToggleLanguageBtn from '../ToggleLanguageBtn/ToggleLanguageBtn';
import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';

import s from './SideBar.module.scss';

interface Props {}

function SideBar ({}: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={classNames(s.sidebar, { [s.open]: isOpen }, [])}>
      <ToggleThemeBtn />
      <ToggleLanguageBtn />
      <AppButton onClick={onToggle}>
        Открыть
      </AppButton>
    </div>
  )
}

export default SideBar