import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppButton, AppInput, Form } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

import s from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { type ThunkDispatch } from '@reduxjs/toolkit'
import { StoreSchemaWithManager } from 'app/providers/StoreProvider/config/StoreSchema'
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginPassword'
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginUsername'
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginIsLoading'
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginError'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface PropsLoginForm {
  className?: string
}

function LoginForm (props: PropsLoginForm) {

  const { 
    className
  } = props

  const dispath = useDispatch<ThunkDispatch<any, any, any>>()

  const password = useSelector(getLoginPassword)
  const username = useSelector(getLoginUsername)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)
  
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
    <DynamicModuleLoader reducer={loginReducer} reducerKey={'loginForm'}>
      <Form className={classNames(s.loginForm, {}, [className])} isLoading={isLoading} error={error}>
        <AppInput value={username} label='Username' className={s.input} onChange={onChangeUsername}/>
        <AppInput value={password} label='Password' className={s.input} onChange={onChangePassword}/>
        <AppButton theme={AppButtonTheme.TRANSPARENT} onClick={onLoginClick}>
          Войти
        </AppButton>
      </Form>
    </DynamicModuleLoader>
  )
}

export default LoginForm