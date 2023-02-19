import s from './PageError.module.scss';
import { useTranslation } from 'react-i18next';

interface PropsPageError {}

export default function PageError ({}: PropsPageError) {

  const { t } = useTranslation();

  return (
    <div className={s.wrapper}>
      {t('Непредвиденная ошибка')}
    </div>
  )
}