import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '../../../../shared/ui/Stack';

const ArticleDetailsPageHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('article');
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [navigate, article?.id]);

  return (
    <HStack
      max
      gap="16"
      justify="between"
    >
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('back_to_articles')}
      </Button>
      { canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}
        >
          {t('edit_article')}
        </Button>
      )}
    </HStack>
  );
};

export default memo(ArticleDetailsPageHeader);
