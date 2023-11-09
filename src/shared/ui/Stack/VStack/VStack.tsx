import cls from './VStack.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

interface VStackProps {
  className?: string;
}

export const VStack = (props: VStackProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.VStack, {}, [className])} />
  );
};
