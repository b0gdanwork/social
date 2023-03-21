import { useMemo } from 'react'
import Select, { type SingleValue, type ActionMeta, type GroupBase, type OptionsOrGroups } from 'react-select'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

import s from './AppSelect.module.scss'

interface Option {value: string, label: string}

export interface PropsAppSelect {
  [x: string]: any
  label?: string
  readOnly?: boolean
  className?: string
  value?: string | undefined
  options?: OptionsOrGroups<string, GroupBase<string>> | any
  onChange?: ((newValue: string | null) => void) | undefined
  
}

export default function AppSelect (props: PropsAppSelect) {

  const {
    label,
    value,
    options,
    readOnly,
    className,
    onChange,
    ...anyProps
  } = props

  const onChangeFunc = (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
    if (!onChange) return
    if (!newValue) {
      onChange(null)
    } else {
      onChange(newValue.value)
    }
  }

  const localValue = useMemo(() => {
    if (options) {
      const option = options.filter((option: Option) => option.value === value)
      if (option) {
        return option
      }
    }
    return undefined
  }, [value, options])

  if (readOnly) {
    return (
      <div className={classNames(s.readonly)}>
        <div className={s.readonlyLabel}>
          {label}
        </div>
        <div className={s.readonlyValue}>
          {value}
        </div>
      </div>
    )
  }
  
  return (
    <Select 
      value={localValue} 
      options={options}
      onChange={onChangeFunc}
      className={classNames('', {}, [className])}
      // inputValue={''}
      // onInputChange={emptyFunc}
      // onMenuOpen={emptyFunc} 
      // onMenuClose={emptyFunc} 
      />
  )
}
