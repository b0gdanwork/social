import { type Country, type Currency } from 'shared/const/common'

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
  error: string | undefined;
  readonly: boolean;
  isLoading: boolean;
}
