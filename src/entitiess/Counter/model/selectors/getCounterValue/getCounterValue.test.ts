import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from '@/app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounter', () => {
  test('selector counter', () => {

    const state: DeepPartial<StoreSchema> = {
      counter: { value: 10 }
    }

    expect(getCounterValue(state as StoreSchema)).toEqual(10)
  })
})
