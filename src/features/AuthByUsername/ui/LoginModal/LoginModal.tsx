import { classNames } from 'shared/lib/helpers/classNames/classNames'
import Modal, { type ModalProps } from 'shared/ui/Modal/Modal'
import LoginForm from '../LoginForm/LoginForm'

import s from './LoginModal.module.scss'

interface PropsLoginModal extends ModalProps {
  className?: string
}

export default function LoginModal (props: PropsLoginModal) {

  const { 
    className,
    ...anyProps
  } = props

  return (
    <Modal {...anyProps} className={classNames(s.loginModal, {}, [className])} >
      <LoginForm /> 
    </Modal>
  )
}