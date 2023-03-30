/* eslint-disable eqeqeq */
import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer, type ProfileT } from 'entitiess/Profile'
import { ProfileCard } from 'entitiess/Profile'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'

import s from './ProfilePage.module.scss'
import { Avatar } from 'shared/ui'
import { updateProfileData } from '../../../entitiess/Profile/model/services/updateProfileData/updateProfileData'
import { getProfileValidateErrors } from '../../../entitiess/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { PageLayout } from 'pages/PageLayout'
import { useParams } from 'react-router'
import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'

export default function ProfilePage () {

  const dispatch = useAppDispath()

  const user = useSelector(getUser)
  const data = useSelector(getProfileData)
  const { id } = useParams<{ id: string }>()
  const error = useSelector(getProfileError) 
  const readonly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)
  const isEditingBlock = user && data && +user.id !== +data.id 
  const validateErrors = useSelector(getProfileValidateErrors)

  const idProfile = id || user?.id || undefined

  useEffect(() => {
    if (!idProfile) return
    dispatch(fetchProfileData(String(idProfile)))
  }, [dispatch, idProfile])

  const createFunChange = useCallback((key: keyof ProfileT) => {
    return (value: string) => {
      dispatch(profileActions.savePropData({ key, value: value as never }))
    }
  }, [dispatch])
  
  const offReadonly = useCallback(() => {
    dispatch(profileActions.offReadonly())
  }, [dispatch])
  
  const changeSave = useCallback(() => {
    if (!data) return
    dispatch(updateProfileData(data))
  }, [dispatch, data])

  const changeReset = useCallback(() => {
    dispatch(profileActions.resetData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducerKey='profile' reducer={profileReducer}>
      <PageLayout>
        <ProfilePageHeader isEditingBlock={!!isEditingBlock} readOnly={!!readonly} offReadonly={offReadonly} changeSave={changeSave} changeReset={changeReset}/>
        <div className={s.card}>
          <Avatar src={data?.avatar} width={200} height={200}/>
          <ProfileCard data={data} error={error} isLoading={isLoading} validateErrors={validateErrors} createFunChange={createFunChange} readonly={!!readonly}/>
        </div>
      </PageLayout>
    </DynamicModuleLoader>
  )
}
