import React from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text
        theme={TextTheme.HERO}
        title={t('profile')}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.editBtn}
      >
        {t('edit')}
      </Button>
    </div>
  );
};
