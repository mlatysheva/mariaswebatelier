import React, { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { text } from 'stream/consumers';
import { useNavigate } from 'react-router-dom';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { Text } from '../../../../shared/ui/Text/Text';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg';
import { Icon } from '../../../../shared/ui/Icon/Icon';
import { Card } from '../../../../shared/ui/Card/Card';
import { useHover } from '../../../../shared/lib/hooks/useHover';
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from '../../../../shared/config/routerConfig/routerConfig';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view = ArticleView.TILE,
    target,
  } = props;
  const { t } = useTranslation();
  const [isHovered, bindHover] = useHover();

  const types = <Text className={cls.types} text={article.type.join(', ')} />;
  const views = (
    <>
      <Text className={cls.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <Text text={article.title} className={cls.title} />
          { types }
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={RoutePath.article_details + article.id}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t('readMore')}
              </Button>
            </AppLink>
            { views }
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      {...bindHover}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          { types }
          { views }

        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
