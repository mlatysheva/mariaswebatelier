import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../types/profile';
import { getValidateProfileErrors } from './getValidateProfileErrors';

describe('getValidateProfileErrors.test', () => {
  test('should return error', () => {
    const validateErrors = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_USER_DATA,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getValidateProfileErrors(state as StateSchema)).toEqual(['Please enter correct age', 'Please select country from the list', 'Please enter first and last names']);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined);
  });
});
