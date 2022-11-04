import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
  } = props;

  return (
    <div
      className={classNames(
        cls.Modal,
        {},
        [className || ''],
      )}
    >
      <div className={cls.overlay}>
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
