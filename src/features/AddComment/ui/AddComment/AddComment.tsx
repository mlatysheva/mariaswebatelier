/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addCommentActions, addCommentReducer } from '../../model/slices/addCommentSlice';
import cls from './AddComment.module.scss';
import { getAddCommentError, getAddCommentText } from '../../model/selectors/addCommentSelectors';

export interface AddCommentProps {
  className?: string;
}

const reducers: ReducersList = {
  addComment: addCommentReducer,
};

const initialReducers: ReducersList = {
  addComment: addCommentReducer,
};

const AddComment = memo((props: AddCommentProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentText);
  const error = useSelector(getAddCommentError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentActions.setText(value));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.AddComment, {}, [className || ''])}>
        <Input
          placeholder={t('add_comment')}
          value={text}
          onChange={onCommentTextChange}
        />

        <Button
          className={cls.commentBtn}
          theme={ButtonTheme.OUTLINE}
        >
          { t('send') }
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddComment;
