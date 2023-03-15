import { useSelector } from 'react-redux'
import { getProfileData, getProfileIsLoading, getProfileError } from 'entitiess/Profile'

interface ProfileCardProps {
} 

export const ProfileCard = (props: ProfileCardProps) => {
  // const data = useSelector(getProfileData)
  // const error = useSelector(getProfileError) 
  // const isLoading = useSelector(getProfileIsLoading)

  return (
    <div>ProfileCard</div>
  )
}
