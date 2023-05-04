/* eslint-disable eqeqeq */
import { useCallback, useEffect, memo } from 'react'

import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, updateProfileData, type ProfileT } from 'entitiess/Profile'
import { ProfileCard } from 'entitiess/Profile'
import { useSelector } from 'react-redux'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'

import { Avatar } from 'shared/ui'
import { useParams } from 'react-router'
import { getUser } from 'entitiess/User/model/selectors/getUser/getUser'
import ProfilePageHeader from '../ProfilePageHeader/ProfilePageHeader'
import { getProfileValidateErrors } from 'entitiess/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors'

import s from './ProfilePageInner.modele.scss'

function ProfilePageInner () {

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
    <>
      <ProfilePageHeader isEditingBlock={!!isEditingBlock} readOnly={!!readonly} offReadonly={offReadonly} changeSave={changeSave} changeReset={changeReset}/>
      <div className={s.card}>
        <Avatar src={data?.avatar} width={200} height={200}/>
        <ProfileCard data={data} error={error} isLoading={isLoading} validateErrors={validateErrors} createFunChange={createFunChange} readonly={!!readonly}/>
      </div>
    </>
  )
}

export default memo(ProfilePageInner)
