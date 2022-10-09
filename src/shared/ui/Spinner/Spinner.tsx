import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({className}: SpinnerProps) => {
  return (
    <div className={classNames('lds-spinner', {}, [className ? className : ''])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};