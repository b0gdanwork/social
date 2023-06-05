import { classNames } from "@/shared/lib/helpers/classNames/classNames"

import { useMemo, memo } from "react"
import { AppButton } from "@/shared/ui"
import { AppButtonTheme } from "@/shared/ui/AppButton/AppButton"
import { useTranslation } from "react-i18next"

import s from "./ProfilePageHeader.module.scss"

interface ProfilePageHeaderProps {
	isEditingBlock: boolean
	readOnly: boolean
	offReadonly: () => void
	changeSave: () => void
	changeReset: () => void
}

function ProfilePageHeader(props: ProfilePageHeaderProps) {
	const { readOnly, changeSave, offReadonly, changeReset, isEditingBlock } = props

	const { t } = useTranslation()

	const renderButtons = useMemo(() => {
		if (isEditingBlock) {
			return <></>
		}

		if (readOnly) {
			return (
				<AppButton theme={AppButtonTheme.PRIMARY} onClick={offReadonly}>
					{t("Редактировать")}
				</AppButton>
			)
		}
		return (
			<>
				<div className={s.btns}>
					<AppButton theme={AppButtonTheme.PRIMARY} onClick={changeSave}>
						{t("Сохранить")}
					</AppButton>
					<AppButton theme={AppButtonTheme.SECONDARY} onClick={changeReset}>
						{t("Отменить")}
					</AppButton>
				</div>
			</>
		)
	}, [isEditingBlock, readOnly, changeSave, t, changeReset, offReadonly])

	return (
		<div className={classNames(s.header)}>
			<h2 className={classNames(s.title)} onClick={offReadonly}>
				{t("Профиль")}
			</h2>
			<div className={classNames(s.btns)}>{renderButtons}</div>
		</div>
	)
}

export default memo(ProfilePageHeader)
