import { Country, Currency } from 'shared/constants/common';

export interface Profile {
  firstname: string;
  lastname: string;
  age: 45;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: Boolean;
  error?: string;
  readonly: Boolean;
}
