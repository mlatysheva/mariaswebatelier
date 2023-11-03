import { FC, lazy } from 'react';
import { AddCommentProps } from './AddComment';

export const AddCommentAsync = lazy<FC<AddCommentProps>>(() => import('./AddComment'));
