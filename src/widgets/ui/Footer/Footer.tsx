/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'

import { BsTelegram } from 'react-icons/bs'

import s from './Footer.module.scss'

function Footer () {
  return (
    <div className={s.footer}>
      <a href="mail: b0gdanwork@ya.ru">
        b0gdanwork@ya.ru
      </a>
      <a href="t.me/b0gdanwork">
        <BsTelegram />
      </a>
    </div>
  )
}

export default memo(Footer)
