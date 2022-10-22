import React from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from "shared/ui/Button/Button";
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
  const { t } = useTranslation();

  const goHome = () => {
    window.location.href = '/';
  };

  const reloadPage = () => {
    window.location.reload();
  };
  
  return (
    <div className={classNames(cls.PageError, {}, [className || ''])}>
      <p>{ t ('unforseenError') }</p>
      <Button
        onClick={reloadPage}
      >
        { t ('reloadPage') }
      </Button>
    </div>
  )
};