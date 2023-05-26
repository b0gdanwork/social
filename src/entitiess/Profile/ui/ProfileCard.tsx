import { AppInput, Form } from '@/shared/ui'
import { type ProfileT, type ProfileSchema } from '@/entitiess/Profile'
import { useMemo } from 'react'

import s from './ProfileCard.module.scss'
import { CountrySelect } from '@/entitiess/Country'
import { CurrencySelect } from '@/entitiess/Currency'
import { type ErrorsValidateProfile } from '../model/types/profileSchema'

type ProfileSchemaForProps = Partial<Omit<ProfileSchema, 'data'>>

interface ProfileCardProps extends ProfileSchemaForProps {
  data: ProfileT | undefined
  readonly: boolean
  validateErrors?: ErrorsValidateProfile[]
  createFunChange: (key: keyof ProfileT) => (value: string) => void 
} 

export const ProfileCard = (props: ProfileCardProps) => {

  const {
    data,
    error,
    readonly,
    isLoading,
    validateErrors,
    createFunChange
  } = props 

  const renderInput = (value: string | number | undefined, onChange: any, key: string) => {
    
    return (
      <AppInput 
        key={key}
        label={key}
        value={value} 
        onChange={onChange}
        readonly={readonly}
      />
    )
  }

  const renderFirstname = useMemo(() => {
    const func = createFunChange('first')
    return renderInput(data?.first, func, 'first')
  }, [createFunChange, data?.first, readonly])

  const renderLastname = useMemo(() => {
    const func = createFunChange('lastname')
    return renderInput(data?.lastname, func, 'lastname')
  }, [createFunChange, data?.lastname, readonly])

  const renderCity = useMemo(() => {
    const func = createFunChange('city')
    return renderInput(data?.city, func, 'city')
  }, [createFunChange, data?.city, readonly])

  const renderUsername = useMemo(() => {
    const func = createFunChange('username')
    return renderInput(data?.username, func, 'username')
  }, [createFunChange, data?.username, readonly])

  const renderAvatar = useMemo(() => {
    const func = createFunChange('avatar')
    return renderInput(data?.avatar, func, 'avatar')
  }, [createFunChange, data?.avatar, readonly])

  const renderAge = useMemo(() => {
    const func = createFunChange('age')
    return renderInput(data?.age, func, 'age')
  }, [createFunChange, data?.age, readonly])

  const renderCountry = useMemo(() => {
    const newFunc = (newValue: string | null) => {
      if (!newValue) return null
      createFunChange('country')(newValue)
    }

    return <CountrySelect value={data?.country || undefined} onChange={newFunc} label={'country'} readOnly={readonly}/>
  }, [createFunChange, data?.country, readonly])

  const renderCurrency = useMemo(() => {
    const newFunc = (newValue: string | null) => {
      if (!newValue) return null
      createFunChange('currency')(newValue)
    }

    return <CurrencySelect value={data?.currency || undefined} onChange={newFunc} label={'currency'} readOnly={readonly}/>
  }, [createFunChange, data?.currency, readonly])

  if (error) {
    return <>{error}</>
  }
  
  return (
    <Form error={validateErrors} isLoading={isLoading} className={s.profile}>
      {renderFirstname}
      {renderLastname}
      {renderAge}
      {renderCity}
      {renderUsername}
      {renderAvatar}
      {renderCountry}
      {renderCurrency}
    </Form>
  )
}
