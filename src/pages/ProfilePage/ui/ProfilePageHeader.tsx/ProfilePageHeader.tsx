import { useCallback } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

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
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
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
        <>
          <Button
            theme={ButtonTheme.OUTLINE_ACCENT}
            className={cls.editBtn}
            size={ButtonSize.L}
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.saveBtn}
            size={ButtonSize.L}
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
