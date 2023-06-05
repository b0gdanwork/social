export { getProfileError } from "./model/selectors/getProfileError/getProfileError"
export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData"
export { profileActions, profileReducer } from "./model/slice/profileSlice"
export { type ProfileSchema, type ProfileT } from "./model/types/profileSchema"
export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading"
export { getProfileData } from "./model/selectors/getProfileData/getProfileData"
export { ProfileCard } from "./ui/ProfileCard"
export { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly"
export { updateProfileData } from "./model/services/updateProfileData/updateProfileData"

// export { ProfileCard, profileActions, profileReducer, type ProfileSchema, type ProfileT, updateProfileData, fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly }
