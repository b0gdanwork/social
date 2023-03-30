import React, { type FC, useState, memo, useCallback } from 'react'

import s from './addCommentForm.module.scss'
import { AppButton } from 'shared/ui'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'

interface Props {}

const AddCommentForm: FC = ({}: Props) => {

  const dispath = useAppDispath()
  const valueStateText = useSelector(getAddCommentFormText)
  
  const changeFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispath(addCommentFormActions.setText(e.target.value))
  }

  const sendFunc = useCallback(() => {

  }, [])

  return (
    <DynamicModuleLoader reducerKey='addCommentForm' reducer={addCommentFormReducer}>
      <div className={s.wrapper}>
        <textarea onChange={changeFunc}>
          {valueStateText}
        </textarea>
        <AppButton onClick={sendFunc}>Добавить</AppButton>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
