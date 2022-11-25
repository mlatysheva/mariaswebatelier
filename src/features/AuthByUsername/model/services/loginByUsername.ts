import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('incorrect_login_error');
    }
  },
);
