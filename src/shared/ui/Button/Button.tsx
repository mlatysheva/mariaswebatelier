import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  let mods: Record<string, boolean> = {};
  if (theme) {
    mods = {
      ...mods,
      [cls[theme]]: true,
    };
  }
  if (square) {
    mods = {
      ...mods,
      [cls.square]: true,
    };
  }
  if (size) {
    mods = {
      ...mods,
      [cls[size]]: true,
    };
  }
  if (disabled) {
    mods = {
      ...mods,
      [cls.disabled]: disabled,
    };
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className || ''])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
