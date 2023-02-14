import React, { useState } from 'react'
import s from './SideBar.module.scss'
import { classNames } from 'shared/lib/helpers/classNames/classNames';

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