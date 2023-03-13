import { type Country, type Currency } from 'shared/const/common';

export interface ProfileT {
  first: string;
  lastname: string;
  age: 22,
  currency: Currency,
  country: Country
  city: string,
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: ProfileT;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}