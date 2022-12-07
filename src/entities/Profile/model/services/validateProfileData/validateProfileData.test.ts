import { ValidateProfileError } from 'entities/Profile';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { validateProfileData } from './validateProfileData';

const profileData = {
  username: 'latysma',
  age: 45,
  country: Country.Russia,
  firstname: 'Maria',
  lastname: 'Latysheva',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('validateProfileData test', () => {
  test('should validate profile successfully', async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('should return validate error for no first or last name', async () => {
    const result = validateProfileData({ ...profileData, firstname: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('should return validate error for out of range age', async () => {
    const result = validateProfileData({ ...profileData, age: 4 });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE_RANGE,
    ]);
  });

  test('should return validate error for out of incorrect age', async () => {
    const result = validateProfileData({ ...profileData, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('should return validate error for incorrect country', async () => {
    const result = validateProfileData({ ...profileData, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('should return validate errors for an empty profile', async () => {
    const result = validateProfileData({ });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
