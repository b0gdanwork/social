import { fetchProfileData, profileReducer } from 'entitiess/Profile'
import { ProfileCard } from 'entitiess/Profile'
import { useEffect } from 'react'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispath } from 'shared/lib/hooks/useAppDispath/useAppDispath'

export default function ProfilePage () {

  const dispatch = useAppDispath()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducerKey='profile' reducer={profileReducer}>
      <ProfileCard />
    </DynamicModuleLoader>
  )
}
