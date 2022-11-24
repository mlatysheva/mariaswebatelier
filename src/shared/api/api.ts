import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../constants/localStorage';

export const apiInstance = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});
