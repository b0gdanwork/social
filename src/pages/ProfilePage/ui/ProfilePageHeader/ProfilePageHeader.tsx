
import { classNames } from 'shared/lib/helpers/classNames/classNames'

import s from './ProfilePageHeader.module.scss'
import { useMemo } from 'react'
import { AppButton } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

interface ProfilePageHeaderProps {
  isEditingBlock: boolean
  readOnly: boolean
  offReadonly: () => void
  changeSave: () => void
  changeReset: () => void
}

export default function ProfilePageHeader (props: ProfilePageHeaderProps) {
  
  const {
    readOnly,
    changeSave,
    offReadonly,
    changeReset,
    isEditingBlock
  } = props

  const renderButtons = useMemo(() => {

    if (isEditingBlock) {
      return <></>
    }

    if (readOnly) {
      return <AppButton theme={AppButtonTheme.PRIMARY} onClick={offReadonly}>Редактировать</AppButton>
    }
    return (
      <>
        <AppButton theme={AppButtonTheme.PRIMARY} onClick={changeSave}>Сохранить</AppButton>
        <AppButton theme={AppButtonTheme.SECONDARY} onClick={changeReset}>Отменить</AppButton>
      </>
    )
  }, [readOnly, changeReset, offReadonly, changeSave])

  return (
    <div className={classNames(s.header)}>    
      <h2 className={classNames(s.title)} onClick={offReadonly}>
        Профиль
      </h2>
      <div className={classNames(s.btns)}>
        {renderButtons}
      </div>
    </div>    
  )
}
