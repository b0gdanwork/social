import { type EntityState } from '@reduxjs/toolkit'
import { type NotificationT } from '@/entitiess/Notification/types/Notification'

export interface NotificationFeatureSchema extends EntityState<NotificationT> {
  error: string | undefined,
  isLoading: boolean,
}
