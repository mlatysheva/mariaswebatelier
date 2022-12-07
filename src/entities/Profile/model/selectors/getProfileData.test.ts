import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
      username: 'latysma',
      age: 45,
      country: Country.Russia,
      firstname: 'Maria',
      lastname: 'Latysheva',
      city: 'Moscow',
      currency: Currency.RUB,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should return undefined for an empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
