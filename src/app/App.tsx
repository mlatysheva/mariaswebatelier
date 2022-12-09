import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../entities/User/model/slice/userSlice';
import { getUserMounted } from '../entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme || 'app_light_theme'])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          { mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
