import { type ArticleListViewT, type ArticleT } from 'entitiess/Article/model/types/articleSchema'

import { AppButton, Avatar } from 'shared/ui'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

import { FaRegEye } from 'react-icons/fa'

import s from './ArticleListItem.module.scss'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

interface ArticleListItemProps {
  article: ArticleT
  view: ArticleListViewT
}

export default function ArticleListItem ({ article, view }: ArticleListItemProps) {

  const [isHover, bindHover] = useHover()
  console.log('isHover', isHover)
  const renderTags = () => {
    if (article.type?.length) {
      return (<div className={s.articleTitleTags}>
        {article.type.map((tag) => <div className={s.tag} key={tag}>{tag}</div>)}
      </div>)
    } else {
      return null
    }
  }

  if (view === 'grid') {
    return (<div className={classNames(s.article, { [s.articleHover]: isHover })} {...bindHover}>
      <div className={s.articleGridImg}>
        <img src={article.img} alt="" />
        <data>{article.createdAt}</data>
      </div>
      <div className={s.articleGridFooter}>
        <div className={s.articleGridFooterTop}>
          {renderTags()}
          <div className={s.articleFotterViews}>
            {article.views}
            <FaRegEye size={20}/>
          </div>
        </div>
        <span>{article.title}</span>
      </div>
    </div>)
  }

  return (
    <div className={classNames(s.article, { [s.articleHover]: isHover })} {...bindHover}>
      <div className={s.articleTitle}>
        <div className={s.articleTitleLeft}>
          <div className={s.articleTitleUser}>
            <Avatar width={40} height={40} src={article.user.avatar}/>
            <span>{article.user.username}</span>
          </div>
          <h3>{article.title}</h3>
          {renderTags()}
        </div>
        <div>
          <data>{article.createdAt}</data>
        </div>
      </div>
      {article.img ? <div className={s.articleImg}><img src={article.img}/></div> : null}
      <div className={s.text}>
        {article.subtitle}
      </div>
      <div className={s.articleFotter}>
        <AppButton theme={AppButtonTheme.SECONDARY}>Подробнее</AppButton>
        <div className={s.articleFotterViews}>
          {article.views}
          <FaRegEye size={20}/>
        </div>
      </div>
    </div>
  )
}
