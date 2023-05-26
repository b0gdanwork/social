import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'

import { type NotificationFeatureSchema } from '../types'
import { type StoreSchema } from '@/app/providers/StoreProvider'
import { type NotificationT } from '@/entitiess/Notification/types/Notification'

const recomendationsAdapter = createEntityAdapter<NotificationT>({
  selectId: (notif) => notif.id
})

export const getNotifications = recomendationsAdapter.getSelectors<StoreSchema>(
  (state) => state.notificationFeature || recomendationsAdapter.getInitialState()
)

const notificationFeatureSlice = createSlice({
  name: 'notificationFeature',
  initialState: recomendationsAdapter.getInitialState<NotificationFeatureSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {
    
  },
  extraReducers: (builder) => {
    // builder.addCase(featchnotificationFeature.pending, (state) => {
    //   state.isLoading = true
    //   state.error = undefined
    //   recomendationsAdapter.removeAll(state)
    // })
    // builder.addCase(featchnotificationFeature.fulfilled, (state, action) => {
    //   state.isLoading = false
    //   state.error = undefined
    //   recomendationsAdapter.setAll(state, action.payload)

    // })
    // builder.addCase(featchnotificationFeature.rejected, (state, action) => {
    //   state.isLoading = false
    //   state.error = action.error.message
    // })    
  }
})

export const { reducer: notificationFeatureReducer, actions: notificationFeatureActions } = notificationFeatureSlice
