import { memo, type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

import s from './AppLink.module.scss'

// export enum AppLinkTheme {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary',
// }

interface PropsAppLink extends LinkProps {
  children?: any
  className?: string
}

const AppLink: FC<PropsAppLink> = (props) => {
  
  const {
    children,
    className,
    ...anyProps
  } = props

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...anyProps} className={classNames(s.link, {}, [className])}>
      {children}
    </Link>
  )
}

export default memo(AppLink)
