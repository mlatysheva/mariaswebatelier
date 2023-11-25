import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comments';
import cls from './CommentCard.module.scss';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';
import { RoutePath } from '../../../../shared/config/routerConfig/routerConfig';
import { HStack, VStack } from '../../../../shared/ui/Stack';

interface CommentCardProps {
  comment?: Comment;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard = (props:CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        max
        gap="8"
        align="start"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <HStack align="center" gap="8" max>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} />
        </HStack>
        <Skeleton width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max align="start" gap="8" className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        <Avatar size={30} src={comment.user.avatar} />
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
};
