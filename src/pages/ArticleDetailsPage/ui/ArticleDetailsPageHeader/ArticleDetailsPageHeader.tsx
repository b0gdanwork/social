import React, { memo } from 'react'

import { AppButton } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { useNavigate } from 'react-router'
import { PathsAppT } from 'shared/config/routes/routes'

import s from './ArticleDetailsPageHeader.module.scss'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle'

interface Props {}

function ArticleDetailsPageHeader ({}: Props) {

  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = () => {
    navigate(PathsAppT.ARTICLE)
  }

  const changeEdit = () => {

  }

  return (
    <div className={s.wrapper}>
      <AppButton theme={AppButtonTheme.PRIMARY} onClick={onBackToList}>
        {t('К статьям')}
      </AppButton>
      {canEdit
        ? <AppButton theme={AppButtonTheme.PRIMARY} onClick={changeEdit}>
          {t('Редактировать')}
        </AppButton>
        : null}

    </div>
  )
}

export default memo(ArticleDetailsPageHeader)
