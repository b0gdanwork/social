import { useTranslation } from 'react-i18next';
import IconTheme from 'shared/assets/icons/theme.svg';
import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppButton } from 'shared/ui';

import s from './ToggleThemeBtn.module.scss';

type NavbarProps = {
  className?: string,
}

const ToggleThemeBtn = (props: NavbarProps) => {

  const {
    className
  } = props

  const { t, i18n } = useTranslation();
  const {theme, toogleTheme} = useTheme()
  
  return (
    <AppButton className={classNames(s.btn, {}, [className])} onClick={toogleTheme}>
      <IconTheme className={s.icon}/>
      {t('Сменить тему')}
    </AppButton>
  )
}

export default ToggleThemeBtn