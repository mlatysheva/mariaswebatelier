import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { User } from '../../../../entities/User';
import { userActions } from '../../../../entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsername',
  async ({ username, password }: LoginByUsernameProps, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username, password,
      });

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(i18n.t('incorrect_login_error'));
    }
  },
);
