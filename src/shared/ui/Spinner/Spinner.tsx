import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
  <div className={classNames('lds-spinner', {}, [className || ''])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
