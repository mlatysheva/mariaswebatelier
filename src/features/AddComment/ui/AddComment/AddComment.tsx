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
  onSendComment: (text: string) => void,
}

const reducers: ReducersList = {
  addComment: addCommentReducer,
};

const AddComment = memo((props: AddCommentProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentText);
  const error = useSelector(getAddCommentError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddComment, {}, [className || ''])}>
        <Input
          className={cls.input}
          placeholder={t('add_comment')}
          value={text}
          onChange={onCommentTextChange}
        />

        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          { t('send') }
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddComment;
