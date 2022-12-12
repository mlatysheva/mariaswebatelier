/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {t('article_details')}
    </div>
  );
};

export default memo(ArticleTextBlockComponent);
