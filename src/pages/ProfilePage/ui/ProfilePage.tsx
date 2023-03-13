import { profileReducer } from 'entitiess/Profile';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export default function ProfilePage () {
  const { t } = useTranslation();
  
  return (
    <DynamicModuleLoader reducerKey='profile' reducer={profileReducer}>
      <div>ProfilePage</div>
    </DynamicModuleLoader>
  )
}
