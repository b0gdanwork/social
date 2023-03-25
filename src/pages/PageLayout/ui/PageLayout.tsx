import React, { type ReactNode } from 'react'
import s from './PageLayout.module.scss'

interface Props {
  children: ReactNode
}

export default function PageLayout ({ children }: Props) {
  return (
    <div className={s.layout}>
      {children}
    </div>
  )
}
