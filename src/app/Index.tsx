import './styles/index.scss';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeProvider } from './providers/ThemeProvider/index';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { Loader } from 'shared/ui';
import { ErrorBoundary } from './providers/ErrorBoundary';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
};

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Index />);
