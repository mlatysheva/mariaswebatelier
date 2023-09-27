import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comments';

interface CommentListProps {
  comments?: Comment[];
  className?: string;
  isLoading?: boolean;
}

export const CommentList = (props:CommentListProps) => {
  const { comments, className, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            key={comment.id}
            comment={comment}
          />
        ))
        : <Text text={t('no_comments')} />}
    </div>
  );
};
