import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer, type ProfileT } from 'entitiess/Profile'
import { ProfileCard } from 'entitiess/Profile'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'

import s from './ProfilePage.module.scss'
import { Avatar } from 'shared/ui'

export default function ProfilePage () {

  const dispatch = useAppDispath()

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError) 
  const readonly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const createFunChange = useCallback((key: keyof ProfileT) => {
    return (value: string) => {
      dispatch(profileActions.savePropData({ key, value: value as never }))
    }
  }, [dispatch])
  
  const offReadonly = useCallback(() => {
    dispatch(profileActions.offReadonly())
  }, [dispatch])
  
  const changeSave = useCallback(() => {
    // dispatch(profileActions.)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const changeReset = useCallback(() => {
    console.log('offReadonly')

    dispatch(profileActions.resetData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducerKey='profile' reducer={profileReducer}>
      <div className={s.page}>
        <ProfilePageHeader readOnly={readonly as boolean} offReadonly={offReadonly} changeSave={changeSave} changeReset={changeReset}/>
        <div className={s.card}>
          <Avatar src={data?.avatar} width={200} height={200}/>
          <ProfileCard data={data} error={error} isLoading={isLoading} createFunChange={createFunChange} readonly={!!readonly}/>
        </div>
      </div>
    </DynamicModuleLoader>
  )
}
