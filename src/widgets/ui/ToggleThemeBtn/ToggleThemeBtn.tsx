import { useTranslation } from 'react-i18next';
import { useTheme } from 'shared/config/theme';
import { AppButton } from 'shared/ui';

import { IoMdColorPalette } from "react-icons/io";


interface NavbarProps {
  size?: number
  [x:string]: any;
}

const ToggleThemeBtn = (props: NavbarProps) => {

  const {
    size,
    color,
    ...anyProps
  } = props

  const { t } = useTranslation();
  const { toogleTheme } = useTheme()
  
  return (
    <AppButton {...anyProps} onClick={toogleTheme} baseClass={false}>
      <IoMdColorPalette size={size} color={color}/>
    </AppButton>
  )
}

export default ToggleThemeBtn