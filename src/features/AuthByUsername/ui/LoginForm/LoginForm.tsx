/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton, AppInput } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

import s from './LoginForm.module.scss'

interface PropsLoginForm {
  className?: string
}

export default function LoginForm (props: PropsLoginForm) {

  const { 
    className
  } = props
  
  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <AppInput value='dfsdf' label='Username' className={s.input}/>
      <AppInput value='dfsdf' label='Password' className={s.input}/>
      <AppButton theme={AppButtonTheme.TRANSPARENT}>
        Войти
      </AppButton>
    </div>
  )
}