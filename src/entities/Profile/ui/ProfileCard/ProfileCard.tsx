import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { Currency, CurrencySelect } from '../../../Currency';
import { Country, CountrySelect } from '../../../Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('profile_loading_error')}
          text={t('reload_page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          className={cls.input}
          value={data?.firstname}
          placeholder={t('your_name')}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('your_lastname')}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('your_age')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('your_city')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('enter_username')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('enter_avatar')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
