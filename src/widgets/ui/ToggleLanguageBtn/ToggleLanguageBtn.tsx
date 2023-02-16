import React from 'react'
import { AppButton } from 'shared/ui'
import { useTranslation } from 'react-i18next';

interface ToggleLanguageBtnProps {}

function ToggleLanguageBtn ({}: ToggleLanguageBtnProps) {

  const { i18n } = useTranslation();

  const toggleLaguage = async () => {
    const newLeng = i18n.language === 'ru' ? 'en' : 'ru'
    await i18n.changeLanguage(newLeng);
  };

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <AppButton onClick={ toggleLaguage }>ru/en</AppButton>
  )
}

export default ToggleLanguageBtn