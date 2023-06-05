/* eslint-disable eqeqeq */
import DynamicModuleLoader from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"

import { PageLayout } from "@/pages/PageLayout"
import ProfilePageInner from "./ProfilePageInner/ProfilePageInner"

import { profileReducer } from "@/entitiess/Profile"

export default function ProfilePage() {
	return (
		<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
			<PageLayout>
				<ProfilePageInner />
			</PageLayout>
		</DynamicModuleLoader>
	)
}
