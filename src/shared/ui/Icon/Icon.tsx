import React, { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.Icon, {}, [className || ''])} />;
});
