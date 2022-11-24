import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }:ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);
  const profileError = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text
          className="hero-text"
          title={t('profile')}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={profileData?.firstname}
          placeholder={t('your_name')}
        />
        <Input
          className={cls.input}
          value={profileData?.lastname}
          placeholder={t('your_lastname')}
        />
      </div>
    </div>
  );
};
