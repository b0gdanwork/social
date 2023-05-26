
import { memo } from 'react'
import s from './Tabs.module.scss'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { type ArticleType } from '@/entitiess/Article'

interface Props {
  value: ArticleType,
  className?: string,
  callback: (value: ArticleType) => void
  data: Array<{ value: ArticleType, label: string }>,
}

function Tabs (props: Props) {

  const {
    data,
    value,
    callback,
    className
  } = props

  const onChange = (changeValue: ArticleType) => {
    callback(changeValue)
  }

  const renderTabs = () => {
    return data.map(item => {
      return (<div className={classNames(s.tab, { [s.active]: value === item.value }, [])} key={item.value} onClick={() => { onChange(item.value) }}>
        {item.label}
      </div>)
    })
  }

  return (
    <div className={classNames(s.tabs, {}, [className])}>
      {renderTabs()}
    </div>
  )
}

export default memo(Tabs)
