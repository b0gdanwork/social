import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { type ProfileSchema, type ProfileT } from './model/types/profileSchema'
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { ProfileCard } from './ui/ProfileCard'

export { ProfileCard, profileActions, profileReducer, type ProfileSchema, type ProfileT, fetchProfileData, getProfileData, getProfileError, getProfileIsLoading }
