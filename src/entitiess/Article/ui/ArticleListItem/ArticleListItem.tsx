/* eslint-disable react/jsx-props-no-spreading */
import { type ArticleListViewT, type ArticleT } from '@/entitiess/Article/model/types/articleSchema'

import { AppButton, AppImage, Avatar, Skeleton } from '@/shared/ui'
import { AppButtonTheme } from '@/shared/ui/AppButton/AppButton'

import { FaRegEye } from 'react-icons/fa'

import s from './ArticleListItem.module.scss'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { PathsAppT } from '@/shared/const/routingTypes'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { Link } from 'react-router-dom'

interface ArticleListItemProps {
  isLoading?: boolean
  article?: ArticleT
  view: ArticleListViewT
  target?: HTMLAttributeAnchorTarget
}

function ArticleListItem ({ article, view, isLoading, target = '_parent' }: ArticleListItemProps) {

  const [isHover, bindHover] = useHover()

  const renderTags = () => {
    if (!article) return 
    if (article.type?.length) {
      return (<div className={s.articleTitleTags}>
        {article.type.map((tag) => <div className={s.tag} key={tag}>{tag}</div>)}
      </div>)
    } else {
      return null
    }
  }

  if (isLoading || !article) {

    if (view === 'grid') {
      return (<div className={classNames(s.article, { [s.articleHover]: isHover })} {...bindHover} >
        <div className={s.articleGridImg}>
          <Skeleton className={s.articleGridImgSkel} width={'100%'} height={'100%'}/>
        </div>
        <div className={s.articleGridFooter}>
          <div className={s.articleGridFooterTop}>
            <Skeleton width={'40%'} height={20}/>
            <div className={s.articleFotterViews}>
              <Skeleton width={'40px'} height={20}/>
              <FaRegEye size={20}/>
            </div>
          </div>
          <Skeleton width={'100%'} height={20}/>
        </div>
      </div>)
    }

    return (<div className={classNames(s.article, { [s.articleHover]: isHover })} {...bindHover}>

      <div className={s.articleTitle}>
        <div className={s.articleTitleLeft}>
          <div className={s.articleTitleUser}>
            <Skeleton width={40} height={40} border={4}/>
            <Skeleton width={80} height={20}/>
          </div>
          <Skeleton width={'60%'} height={40} border={0}/>
          <Skeleton width={'30%'} height={20} border={4}/>
        </div>
        <div>
          <Skeleton width={30} height={20} border={4}/>
        </div>
      </div>
      <Skeleton className={s.articleImg}/>
      <div className={s.text}>
        <Skeleton width={'100%'} height={20}/>
      </div>
      <div className={s.articleFotter}>
        <AppButton theme={AppButtonTheme.SECONDARY} disabled={true}>Подробнее</AppButton>
        <div className={s.articleFotterViews}>
          <Skeleton width={'40px'} height={20}/>
          <FaRegEye size={20}/>
        </div>
      </div>
    </div>)
  }

  if (view === 'grid') {
    return (<div className={classNames(s.article, { [s.articleHover]: isHover })} {...bindHover}>
      <Link to={`${PathsAppT.ARTICLE_DETAILS}/${article?.id}`} className={s.link} target={target}></Link>

      <div className={s.articleGridImg}>
        <AppImage src={article.img} alt="" />
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
    <div className={classNames(s.article, { [s.articleHover]: isHover })} {...bindHover} >
      <Link to={`${PathsAppT.ARTICLE_DETAILS}/${article?.id}`} className={s.link} target={target}></Link>
      <div className={s.articleTitle}>
        <div className={s.articleTitleLeft}>
          <div className={s.articleTitleUser}>
            <Avatar width={40} height={40} src={article.user?.avatar}/>
            <span>{article.user?.username}</span>
          </div>
          <h3>{article.title}</h3>
          {renderTags()}
        </div>
        <div>
          <data>{article.createdAt}</data>
        </div>
      </div>
      {article.img ? <div className={s.articleImg}><AppImage src={article.img}/></div> : null}
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

export default memo(ArticleListItem)
