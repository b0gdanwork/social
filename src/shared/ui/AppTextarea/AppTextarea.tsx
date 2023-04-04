import React from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import s from './AppTextarea.module.scss'

interface Props {
  value?: string
  className?: string
  [x: string]: any
}

export default function AppTextarea (props: Props) {

  const {
    value,
    className,
    ...anyProps
  } = props

  return (
    <textarea {...anyProps} value={value} className={classNames(s.textarea, {}, [className])}/>
  )
}
