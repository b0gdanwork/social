import { ErrorsValidateProfile, type ProfileT } from "../../types/profileSchema"

const validateProfileData = (profile: Readonly<ProfileT> | undefined) => {
	const errors: ErrorsValidateProfile[] = []

	if (!profile) {
		errors.push(ErrorsValidateProfile.ERROR_USER_DATA)
		return errors
	}

	if (!profile.first || !profile.lastname) {
		errors.push(ErrorsValidateProfile.ERROR_USER_DATA)
	}

	if (!profile.age || /[a-zа-яё]/i.test(profile.age)) {
		errors.push(ErrorsValidateProfile.ERROR_AGE)
	}

	return errors
}

export default validateProfileData
