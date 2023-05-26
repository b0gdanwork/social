import { type NotificationT } from '@/entitiess/Notification'
import { rtkApi } from '@/shared/api/rtkApi'

const extendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<NotificationT[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  }),
  overrideExisting: false
})

export const useNotifications = extendedApi.useGetNotificationsQuery
