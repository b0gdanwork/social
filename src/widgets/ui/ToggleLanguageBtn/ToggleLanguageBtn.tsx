import React from 'react'
import { AppButton } from 'shared/ui'
import { useTranslation } from 'react-i18next';

import { MdLanguage } from "react-icons/md";

interface ToggleLanguageBtnProps {
  size?: number
  [x:string]: any;
}

function ToggleLanguageBtn (props: ToggleLanguageBtnProps) {
  
  const {
    size,
    color,
    ...anyProps
  } = props

  const { i18n } = useTranslation();

  const toggleLaguage = async () => {
    const newLeng = i18n.language === 'ru' ? 'en' : 'ru'
    await i18n.changeLanguage(newLeng);
  };

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <AppButton {...anyProps} onClick={ toggleLaguage } baseClass={false}>
        <MdLanguage size={size} color={color}/>
    </AppButton>
  )
}

export default ToggleLanguageBtn