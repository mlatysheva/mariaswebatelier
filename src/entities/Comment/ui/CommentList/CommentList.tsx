import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comments';
import { VStack } from '../../../../shared/ui/Stack';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props:CommentListProps) => {
  const { comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack max align="start">
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack max align="start" gap="16">
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            key={comment.id}
            comment={comment}
          />
        ))
        : <Text text={t('no_comments')} />}
    </VStack>
  );
};
