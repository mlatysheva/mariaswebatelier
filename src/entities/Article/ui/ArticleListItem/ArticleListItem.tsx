import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { Text } from '../../../../shared/ui/Text/Text';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg';
import { Icon } from '../../../../shared/ui/Icon/Icon';
import { Card } from '../../../../shared/ui/Card/Card';
import { useHover } from '../../../../shared/lib/hooks/useHover';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view = ArticleView.TILE } = props;
  const { t } = useTranslation();
  const [isHovered, bindHover] = useHover();
  console.log(isHovered);

  if (view === ArticleView.TILE) {
    return (
      <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <img src={article.img} alt={article.title} className={cls.img} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <div className={cls.infoWrapper}>
            <Text className={cls.types} text={article.type.join(', ')} />
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </div>
    );
  }

  return (
    <div>{article.title}</div>
  );
});
