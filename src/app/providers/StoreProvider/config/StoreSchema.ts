import { type CounterSchema } from 'entitiess/Counter';
import { type UserSchema } from 'entitiess/User';

export default interface StoreSchema {
  counter: CounterSchema,
  user: UserSchema
}