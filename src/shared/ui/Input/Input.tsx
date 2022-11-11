import { ReadonlyActionMatcherDescriptionCollection } from '@reduxjs/toolkit/dist/createReducer';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...other
  } = props;

  const caretStartPosition = 0;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(caretStartPosition);
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length + caretStartPosition);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className || ''])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder} >`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          // ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...other}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 8}px` }}
          />
        )}
      </div>
    </div>
  );
});
