import { AppButton, AppInput, Modal, StarRating } from '@/shared/ui'
import s from './RatingCard.module.scss'
import { type StarT } from '../model/types'
import { memo, useCallback, useEffect, useState } from 'react'
import { AppButtonTheme } from '@/shared/ui/AppButton/AppButton'

interface Props {
  title?: string,
  onChange: (value: StarT, text?: string) => void,
  selectedStars: StarT | null
}

function RatingCard ({ title, onChange, selectedStars }: Props) {

  const [valueInput, setValueInput] = useState('')
  const [isOpenMoadal, setIsOpenMoadal] = useState(false)
  const [valueRating, setValueRating] = useState<StarT | null>(selectedStars || null) 

  useEffect(() => {
    setValueRating(valueRating)
  }, [valueRating])
  
  const closeMoadal = useCallback(() => {
    setIsOpenMoadal(false)
  }, [])

  const changeInput = useCallback((value: string) => {
    setValueInput(value)
  }, [])

  const changeStars = useCallback((value: StarT) => {
    if (selectedStars) return
    setValueRating(value)
    setIsOpenMoadal(true)
  }, [selectedStars])

  const sendChange = useCallback(() => {
    if (!valueRating) return
    onChange(valueRating, valueInput)
    closeMoadal()
  }, [closeMoadal, onChange, valueInput, valueRating])

  const resetChange = useCallback(() => {
    closeMoadal()
    setValueInput('')
    setValueRating(null)
  }, [closeMoadal])

  return (
    <div className={s.wrapper}>
      { title && !selectedStars
        ? <h3 className={s.title}>
          {title}
        </h3>
        : null}
      { title && selectedStars
        ? <h3 className={s.title}>
          Спасибо за отзыв!
        </h3>
        : null}
      <StarRating 
        onSelect={changeStars}
        selectedStars={valueRating}
      />
      <Modal isOpen={isOpenMoadal} onClose={closeMoadal} >
        <div className={s.modal}>
          { title ? <h3 className={s.title}> {title}</h3> : null}
          <AppInput 
            value={valueInput}
            onChange={changeInput}
            label='Описание'
            className={s.input}
        />
          <div className={s.moadlBtns}>
            <AppButton 
              onClick={sendChange}
              theme={AppButtonTheme.PRIMARY}
              disabled={!valueInput.length}
            >
              Отправить
            </AppButton>
            <AppButton
              onClick={resetChange}
              theme={AppButtonTheme.SECONDARY}
            >
              Отменить
            </AppButton>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default memo(RatingCard)
