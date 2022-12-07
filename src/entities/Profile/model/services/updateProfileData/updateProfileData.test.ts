import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const profileData = {
  username: 'latysma',
  age: 45,
  country: Country.Russia,
  firstname: 'Maria',
  lastname: 'Latysheva',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('updateProfileData test', () => {
  test('should update profile successfully', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('should return profile update server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('should return profile update validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profileData, lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
