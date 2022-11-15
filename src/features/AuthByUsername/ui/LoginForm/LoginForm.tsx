import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState) || {};

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    if (username && password) {
      dispatch(loginByUsername({ username, password }));
    }
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className || ''])}>
      <Text title={t('authorisation_form')} />
      { error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t('enter_name')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('enter_password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        { t('login') }
      </Button>
    </div>
  );
});
