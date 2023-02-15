import React from 'react'
import { AppButton } from 'shared/ui'
import { useTranslation } from 'react-i18next';

type ToggleLanguageBtnProps = {}

function ToggleLanguageBtn({}: ToggleLanguageBtnProps) {

  const { t, i18n } = useTranslation();

  const toggleLaguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru' );
  };

  return (
    <AppButton onClick={toggleLaguage}>ru/en</AppButton>
  )
}

export default ToggleLanguageBtn