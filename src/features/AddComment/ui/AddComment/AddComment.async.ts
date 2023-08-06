import { FC, lazy } from 'react';
import { AddCommentProps } from './AddComment';

export const AddCommentAsync = lazy<FC<AddCommentProps>>(() => new Promise((resolve) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // Delete the following line in an actual app
  setTimeout(() => resolve(import('./AddComment')), 1500);
}));
