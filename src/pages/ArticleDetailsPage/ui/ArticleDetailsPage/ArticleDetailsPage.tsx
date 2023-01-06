/* eslint-disable max-len */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.ARticleDetailsPage, {}, [className])}>
        {t('article_not_found')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentTitle} title={t('comments')} />
      <CommentList
        isLoading
        comments={[]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
