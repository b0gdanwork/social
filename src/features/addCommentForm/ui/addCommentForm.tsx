import React, { memo, useCallback } from 'react'

import s from './addCommentForm.module.scss'
import { AppButton, AppTextarea } from 'shared/ui'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

export interface AddCommentFormProps {
  onSendComment: (text: string) => void
}

const AddCommentForm = ({ onSendComment }: AddCommentFormProps) => {

  const dispath = useAppDispath()
  const valueStateText = useSelector(getAddCommentFormText)
  
  const changeFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispath(addCommentFormActions.setText(e.target.value))
  }

  const sendFunc = useCallback(() => {
    dispath(addCommentFormActions.setText(''))
    onSendComment(valueStateText || '')
  }, [dispath, onSendComment, valueStateText])

  return (
    <DynamicModuleLoader reducerKey='addCommentForm' reducer={addCommentFormReducer}>
      <div className={s.wrapper}>
        <AppTextarea onChange={changeFunc} value={valueStateText} className={s.textarea}/>
        <AppButton onClick={sendFunc} theme={AppButtonTheme.PRIMARY}>Добавить</AppButton>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
