import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'Please enter first and last names',
  INCORRECT_NAME_LENGTH = 'Name should be at least two characters long',
  INCORRECT_AGE = 'Please enter correct age',
  INCORRECT_AGE_RANGE = 'Age should be between 16 and 90 years old',
  INCORRECT_COUNTRY = 'Please select country from the list',
  NO_DATA = 'Please fill in the profile',
  SERVER_ERROR = 'Server error',
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
