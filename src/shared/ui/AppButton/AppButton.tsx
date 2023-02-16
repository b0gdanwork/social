import React, { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './AppButton.module.scss';

export enum AppButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppBattonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: any,
  theme?: AppButtonTheme,
  type?: 'button' | 'submit' | 'reset',
}

const AppButton: FC<AppBattonProps> = (props) => {

  const {
    theme = AppButtonTheme.PRIMARY,
    children,
    className,
    ...anyProps
  } = props

  return (
    <button {...anyProps} className={classNames(s.btn, {}, [className, theme])}>{children}</button>
  )
}

export default AppButton
