import { AppInput, Form } from 'shared/ui'
import { type ProfileT, type ProfileSchema } from 'entitiess/Profile'
import { useMemo } from 'react'

import s from './ProfileCard.module.scss'
import { CountrySelect } from 'entitiess/Country'
import { type ActionMeta, type SingleValue } from 'react-select'

type ProfileSchemaForProps = Partial<Omit<ProfileSchema, 'data'>>

interface ProfileCardProps extends ProfileSchemaForProps {
  data: ProfileT | undefined
  readonly: boolean
  createFunChange: (key: keyof ProfileT) => (value: string) => void 
} 

export const ProfileCard = (props: ProfileCardProps) => {

  const {
    data,
    error,
    readonly,
    isLoading,
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

  const renderCountry = useMemo(() => {
    const newFunc = (newValue: string | null) => {
      if (!newValue) return null
      createFunChange('country')(newValue)
    }

    return <CountrySelect value={data?.country || undefined} onChange={newFunc} label={'country'} readOnly={readonly}/>
  }, [createFunChange, data?.country, readonly])

  if (error) {
    return <>{error}</>
  }
  
  return (
    <Form error={error} isLoading={isLoading} className={s.profile}>
      {renderFirstname}
      {renderLastname}
      {renderCity}
      {renderUsername}
      {renderAvatar}
      {renderCountry}
    </Form>
  )
}
