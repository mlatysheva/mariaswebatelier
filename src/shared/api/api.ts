import axios, { Axios, AxiosRequestConfig } from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

export const apiInstance = axios.create({
  baseURL: __API__,
});

apiInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
});
