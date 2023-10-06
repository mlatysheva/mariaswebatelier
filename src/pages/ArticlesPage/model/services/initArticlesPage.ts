import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageInitialized,
} from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const {
    getState, dispatch,
  } = thunkApi;
  const initialised = getArticlesPageInitialized(getState());
  if (!initialised) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  }
});
