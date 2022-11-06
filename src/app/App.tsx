import { Suspense, useState } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme || ''])}>
      <Suspense fallback="">
        <Navbar />
        <button
          onClick={() => setIsOpen(true)}
          type="button"
        // eslint-disable-next-line i18next/no-literal-string
        >
          Open modal
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          // eslint-disable-next-line max-len, react/no-children-prop, i18next/no-literal-string
          children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate ratione adipisci velit eum eaque saepe nesciunt, officiis deleniti! Velit est nobis eveniet numquam nam beatae adipisci dicta amet nostrum."
        />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
