import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton, AppInput, Form } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

import s from './LoginForm.module.scss'
import { loginActions } from '../../model/slice/loginSlice'
import { type ThunkDispatch } from '@reduxjs/toolkit'

export interface PropsLoginForm {
  className?: string
}

function LoginForm (props: PropsLoginForm) {

  const { 
    className
  } = props

  const dispath = useDispatch<ThunkDispatch<any, any, any>>()
  const { password, username, isLoading, error } = useSelector(getLoginState)

  const onChangePassword = useCallback((value: string) => {
    dispath(loginActions.setPassword(value))
  }, [dispath])
  
  const onChangeUsername = useCallback((value: string) => {
    dispath(loginActions.setUsername(value))
  }, [dispath])

  const onLoginClick = useCallback(() => {
    const data = { password, username } 
    return dispath(loginByUsername(data))
  }, [dispath, password, username])

  return (
    <Form className={classNames(s.loginForm, {}, [className])} isLoading={isLoading} error={error}>
      <AppInput value={username} label='Username' className={s.input} onChange={onChangeUsername}/>
      <AppInput value={password} label='Password' className={s.input} onChange={onChangePassword}/>
      <AppButton theme={AppButtonTheme.TRANSPARENT} onClick={onLoginClick}>
        Войти
      </AppButton>
    </Form>
  )
}

export default LoginForm