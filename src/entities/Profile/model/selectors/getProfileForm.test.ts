import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return profile form data', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should return undefined for an empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
