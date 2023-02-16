import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface PropsAppLink extends LinkProps {
  children?: any
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<PropsAppLink> = (props) => {
  
  const {
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...anyProps
  } = props

  return (
    <Link {...anyProps} className={classNames(s.link, {}, [className, theme])}>
      {children}
    </Link>
  )
}

export default AppLink