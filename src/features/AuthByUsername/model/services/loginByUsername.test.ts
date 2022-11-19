import axios from 'axios';
import { Dispatch } from 'react';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { userActions } from '../../../../entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername test', () => {
  let dispatch: Dispatch<any>;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('should return successful login', async () => {
    const userData = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const action = loginByUsername({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('should return login error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('incorrect_login_error');
  });
});
