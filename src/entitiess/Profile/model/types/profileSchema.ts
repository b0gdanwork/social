import { type Country } from 'entitiess/Country'
import { type Currency } from 'entitiess/Currency'

export interface ProfileT {
  first: string;
  lastname: string;
  age: string,
  currency: Currency | null,
  country: Country | null,
  city: string,
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data: ProfileT;
  oldData: ProfileT | null;
  error: string | undefined;
  readonly: boolean;
  isLoading: boolean;
}
