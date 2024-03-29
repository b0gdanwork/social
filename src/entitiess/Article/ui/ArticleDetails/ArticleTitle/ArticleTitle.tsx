import { memo } from "react"

import { AppImage, Divider, Skeleton } from "@/shared/ui"
import { type ArticleT } from "@/entitiess/Article/model/types/articleSchema"

import { FaRegEye } from "react-icons/fa"
import { AiTwotoneCalendar } from "react-icons/ai"

import s from "./ArticleTitle.module.scss"

interface Props {
	isLoading?: boolean
	article?: ArticleT
}

function ArticleTitle({ article, isLoading }: Props) {
	if (isLoading) {
		return (
			<div>
				<Skeleton width={80} height={80} border={50} />
				<Divider mobileSize="m-20" desctopSize="d-30" />
				<Skeleton width={200} height={60} />
				<Divider mobileSize="m-20" desctopSize="d-10" />
				<Skeleton width={400} height={60} />
				<Divider mobileSize="m-20" desctopSize="d-10" />
				<Skeleton width={600} height={80} />
			</div>
		)
	}

	if (!article) {
		return <></>
	}

	return (
		<div className={s.wrapper}>
			<div className={s.info}>
				<div className={s.info__top}>
					<h2>{article.title}</h2>
					<p>{article.subtitle}</p>
				</div>
				<div className={s.stats}>
					<div>
						<FaRegEye size={20} />
						{article.views}
					</div>
					<div>
						<AiTwotoneCalendar size={20} />
						{article.createdAt}
					</div>
				</div>
			</div>
			<div className={s.img}>
				<div
					className={s.bg}
					style={{
						backgroundImage: `url(${article.img || ""})`,
					}}
				/>
				<AppImage src={article.img} alt="" />
			</div>
		</div>
	)
}

export default memo(ArticleTitle)
