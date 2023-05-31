import { memo, type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'

import s from './AppLink.module.scss'
import { type IconBaseProps } from 'react-icons'

interface PropsAppLink extends LinkProps {
  Icon?: FC<IconBaseProps>
  children?: any
  className?: string
  isOpen?: boolean
  colorIcon?: string
}

const AppLink: FC<PropsAppLink> = (props) => {
  
  const {
    Icon,
    isOpen,
    children,
    className,
    colorIcon,
    ...anyProps
  } = props

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...anyProps} className={classNames(s.link, { [s.active]: isOpen }, [className])}>
      {Icon ? <Icon size={20} color={colorIcon}/> : null}
      {isOpen ? children : null}
    </Link>
  )
}

export default memo(AppLink)
