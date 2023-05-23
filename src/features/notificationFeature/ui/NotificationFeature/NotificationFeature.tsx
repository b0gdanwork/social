import { NotificationList } from 'entitiess/Notification'
import { IoIosNotifications } from 'react-icons/io'
import { Loader, Popover } from 'shared/ui'

import { useNotifications } from '../../model/api'
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { notificationFeatureReducer } from '../../model/slices/articleDetailsRecommendationsSlice'

import s from './NotificationFeature.module.scss'

interface Props {}

export default function NotificationFeature ({}: Props) {

  const { isError, data, isLoading } = useNotifications(null, {
    pollingInterval: 5000
  })
  
  const renderContent = () => {
    if (isLoading) {
      return <Loader />
    }

    if (isError || !data) {
      return <>Error</>
    }

    return <NotificationList list={data}/>
  }

  return (
    <DynamicModuleLoader reducer={notificationFeatureReducer} reducerKey='notificationFeature'>
      <div className={s.notification}>
        <Popover btn={<IoIosNotifications size={23} />}>
          {renderContent()}
        </Popover>
      </div>
    </DynamicModuleLoader>
  )
}
