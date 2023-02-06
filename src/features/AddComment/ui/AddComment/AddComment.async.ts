import { lazy } from 'react';

export const AddCommentAsync = lazy(() => new Promise((resolve) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // Delete the following line in an actual app
  setTimeout(() => resolve(import('./AddComment')), 1500);
}));
