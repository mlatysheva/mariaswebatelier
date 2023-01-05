import { t } from 'i18next';
import { memo, ReactNode, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import { classNames } from '../../lib/classNames/classNames';

interface CodeProps {
  text: string;
  className?: string;
}

export const Code = memo((props: CodeProps) => {
  const { text, className } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
