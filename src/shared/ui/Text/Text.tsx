import React, { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;

  let mods = {};

  if (theme) {
    mods = {
      ...mods,
      [cls[theme]]: true,
    };
  }
  return (
    <div className={classNames(cls.Text, mods, [className || ''])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
