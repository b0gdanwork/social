import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { Loader, Modal } from 'shared/ui'
import { type ModalProps } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import LoginFormAsync from '../LoginForm/LoginForm.async'

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
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync /> 
      </Suspense>
    </Modal>
  )
}
