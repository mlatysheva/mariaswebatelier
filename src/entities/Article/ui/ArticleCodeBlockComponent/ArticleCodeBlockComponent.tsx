/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      {t('article_details')}
    </div>
  );
};

export default memo(ArticleCodeBlockComponent);
