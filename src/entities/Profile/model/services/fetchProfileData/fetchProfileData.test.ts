import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { fetchProfileData } from './fetchProfileData';

const profileData = {
  username: 'latysma',
  age: 45,
  country: Country.Russia,
  firstname: 'Maria',
  lastname: 'Latysheva',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('fetchProfileData test', () => {
  test('should fetch profile successfully', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('should return profile fetch error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
