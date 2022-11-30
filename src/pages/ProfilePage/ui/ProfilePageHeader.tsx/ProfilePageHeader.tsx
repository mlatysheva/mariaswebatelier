import React, { useCallback } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <h1 className="hero-text">{t('profile')}</h1>

      { readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          size={ButtonSize.L}
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          size={ButtonSize.L}
          onClick={onCancelEdit}
        >
          {t('cancel')}
        </Button>
      )}
    </div>
  );
};
