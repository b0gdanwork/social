import React, { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './AppButton.module.scss';

export enum AppButtonTheme {
  PRIMARY = 'btn--primary',
  SECONDARY = 'btn--secondary',
  TRANSPARENT = 'btn--transparent'
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
    <button {...anyProps} className={classNames('btn', { className: className !== undefined }, [theme])}>{children}</button>
  )
}

export default AppButton
