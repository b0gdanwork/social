/* eslint-disable react/jsx-props-no-spreading */
import React, { type InputHTMLAttributes, useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import s from './AppInput.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface PropsAppInput extends HTMLInputProps {
  label?: string
  value: string
  onChange?: (value: string) => void
  className?: string
}

function AppInput (props: PropsAppInput) {

  const {
    label,
    onChange,
    className,
    type = 'text',
    value: valueParent,
    ...anyProps
  } = props

  const [value, setValue] = useState(valueParent)

  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value

    setValue(value)
    onChange?.(value)
  }

  return (
    <div className={s.wrapper}>
      {label ? <div className={classNames(s.label, { focus: !!value }, [])}>{label}</div> : null}
      <input {...anyProps} type={type} className={classNames(s.input, {}, [className])} value={value} onChange={changeFunc}/>
    </div>
  )
}

export default React.memo(AppInput)
