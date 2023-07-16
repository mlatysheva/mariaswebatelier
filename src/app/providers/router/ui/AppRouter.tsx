import {
  memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { AppRoutesProps, routeConfig } from 'shared/config/routerConfig/routerConfig';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  /**
   * @description: for protected routes redirect the user to home page
   */
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
