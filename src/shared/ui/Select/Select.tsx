/* eslint-disable i18next/no-literal-string */
import { SelectorMatcherOptions } from '@testing-library/react';
import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
  } = props;

  const optionsList = useMemo(() => options?.map((item: SelectOption<T>) => (
    <option
      className={cls.option}
      value={item.value}
      key={item.value}
    >
      {item.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const mods: Mods = {};

  return (
    <div
      className={classNames(cls.Wrapper, mods, [className])}
    >
      {label && (
        <span className={cls.label}>{`${label}`}</span>
      )}
      <select
        className={cls.select}
        value={value}
        disabled={readonly}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
