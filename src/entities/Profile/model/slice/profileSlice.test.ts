import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const profileData = {
  username: 'latysma',
  age: 45,
  country: Country.Russia,
  firstname: 'Maria',
  lastname: 'Latysheva',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('profileSlice test', () => {
  test('should set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('should cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: {
        username: '',
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data: profileData,
      form: profileData,
    });
  });

  test('should update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '123',
      },
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '12345',
      }),
    )).toEqual({
      form: { username: '12345' },
    });
  });

  test('should update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('should update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profileData,
      isLoading: true,
      validateErrors: undefined,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(profileData, ''),
    )).toEqual({
      form: profileData,
      data: profileData,
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
