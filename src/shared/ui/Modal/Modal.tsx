import { useEffect, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import Portal from '../Portal/Portal'

import s from './Modal.module.scss'

export interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean,
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {

  const {
    isOpen,
    children,
    className,
    onClose = () => {}
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
        <div className={classNames('contentModal', { contentModalOpen: isOpen })} onClick={contentClick}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
