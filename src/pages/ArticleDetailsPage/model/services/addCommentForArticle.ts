import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from '../../../../entities/Comment';
import { getArticleDetailsData } from '../../../../entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { addCommentActions } from '../../../../features/AddComment/model/slices/addCommentSlice';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkApi;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('Incorrect comment error');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData?.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('Incorrect comment error');
    }
  },
);
