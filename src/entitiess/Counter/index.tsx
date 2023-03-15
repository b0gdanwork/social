import { getCounter } from './model/selectors/getCounter/getCounter'
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue'
import { counterReducer } from './model/slice/counterSlice'
import { type CounterSchema } from './model/types/counterSchema'
import Counter from './ui/Counter'

export { type CounterSchema, Counter, counterReducer, getCounter, getCounterValue }
