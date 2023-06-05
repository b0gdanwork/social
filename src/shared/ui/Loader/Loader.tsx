import { memo } from "react"
import s from "./Loader.module.scss"

interface PropsLoader {}

function Loader({}: PropsLoader) {
	return (
		<div className={s.wrapper}>
			<div className={s.spiner}>
				<div className={s.spinnerInner}>
					<div></div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(Loader)
