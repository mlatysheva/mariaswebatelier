import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation();

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', mods, [className])}
      label={t('indicate_country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
