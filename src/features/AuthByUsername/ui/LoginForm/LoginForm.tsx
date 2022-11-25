import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
