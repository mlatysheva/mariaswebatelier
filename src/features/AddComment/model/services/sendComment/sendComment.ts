import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from '../../../../../entities/Comment';
import { getAddCommentText } from '../../selectors/addCommentSelectors';
import {
  getArticleDetailsData,
} from '../../../../../entities/Article/model/selectors/articleDetails';
import { addCommentActions } from '../../slices/addCommentSlice';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
  'addComment/sendComment',
  async (_, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkApi;
    const userData = getUserAuthData(getState());
    const text = getAddCommentText(getState());
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

      dispatch(addCommentActions.setText(''));

      return response.data;
    } catch (e) {
      return rejectWithValue('Incorrect comment error');
    }
  },
);
