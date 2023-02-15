import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './SideBar.module.scss';

type Props = {}

function SideBar({}: Props) {

  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => {
    setIsOpen(prev=> !prev)
  }

  return (
    <div className={classNames(s.sidebar, {[s.open]: isOpen}, [])}>
      <button onClick={onToggle}>
        Открыть
      </button>
    </div>
  )
}

export default SideBar