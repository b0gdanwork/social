import { useEffect, useState, type ReactNode } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import Portal from '../Portal/Portal'

import s from './Modal.module.scss'

interface NavbarProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean,
  onClose?: () => void;
}

const Modal = (props: NavbarProps) => {

  const {
    className,
    children,
    onClose = () => {},
    isOpen 
  } = props

  const closeModal = () => {
    onClose()
  }

  const contentClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }
  
  useEffect(() => {

    const closeModalEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', closeModalEsc)
    return () => {
      window.removeEventListener('keydown', closeModalEsc)
    }
  })

  return (
    <Portal>
      <div className={classNames(s.modal, { [s.open]: isOpen }, [className])}>
        <div className={s.overlay} onClick={closeModal}/>
        <div className={classNames(s.content, { [s.openContent]: isOpen })} onClick={contentClick}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal