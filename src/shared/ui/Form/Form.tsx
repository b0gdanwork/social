import { type FormEvent, type FormHTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import Loader from '../Loader/Loader'

import s from './Form.module.scss'

type HTMLFormProps = Omit<FormHTMLAttributes<any>, | 'onSubmit'>

interface PropsForm extends HTMLFormProps {
  error: undefined | string
  onSubmit?: any
  isLoading?: boolean
  className?: string
  children?: ReactNode
}

export default function Form (props: PropsForm) {

  const {
    error,
    children,
    onSubmit,
    className,
    isLoading,
    ...anyProps
  } = props
  
  const changeFunc = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form 
      {...anyProps} 
      onSubmit={changeFunc}
      className={classNames(s.form, {}, [className])}
    >
      <div className={classNames(s.overlay, { [s.open]: isLoading }, [className])}>
        <Loader />
      </div>
      { error && <div className={s.error}>
        {error}
      </div>}
      {children}
    </form>
  )
}