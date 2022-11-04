import React from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const mods: Record<string, boolean> = {
  };

  return (
    <div
      className={classNames(
        cls.Modal,
        mods,
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
