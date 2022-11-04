import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

interface ModalProps {
  className?: string;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
  } = props;

  return (
    <div
      className={classNames(
        cls.Modal,
        {},
        [className || ''],
      )}
    />
  );
};
