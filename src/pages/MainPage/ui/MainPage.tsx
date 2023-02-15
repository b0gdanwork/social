import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t, i18n } = useTranslation();

  return (
    <div>{t('Главная страница')}</div>
  )
}
