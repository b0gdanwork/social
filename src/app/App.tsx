
import './styles/index.scss';

import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import { Navbar, SideBar } from '../widgets/ui/index';
import AppRoutes from './providers/AppRoutes/AppRoutes';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const {theme} = useTheme()

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className={classNames('social-app', {}, [theme])}>
       <Suspense fallback='dsf'>
      <button onClick={()=> changeLanguage('ru')}>changeLanguage ru</button>
      <button onClick={()=> changeLanguage('en')}>changeLanguage en</button>
      <h1>{t('first')}</h1>

    </Suspense>
      <Navbar/>
      <div className={'content-page'}>
        <SideBar/>
        <AppRoutes />
      </div>
  </div>
  )
  
}
