import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

  const dispath = useDispatch()
  const state = useSelector(getLoginState)

  const onChangePassword = useCallback((value: string) => {
    dispath(loginActions.setPassword(value))
  }, [dispath])
  
  const onChangeUsername = useCallback((value: string) => {
    dispath(loginActions.setUsername(value))
  }, [dispath])

  const onLoginClick = useCallback(() => {

  }, [])

  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <AppInput value={state.username} label='Username' className={s.input} onChange={onChangeUsername}/>
      <AppInput value={state.password} label='Password' className={s.input} onChange={onChangePassword}/>
      <AppButton theme={AppButtonTheme.TRANSPARENT} onClick={onLoginClick}>
        Войти
      </AppButton>
    </div>
  )
}