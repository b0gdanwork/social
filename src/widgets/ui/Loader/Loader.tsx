import React from 'react'

import s from './Loader.module.scss'

type PropsLoader = {}

export default function Loader({ }: PropsLoader) {
  return (
    <div>
      <div className={s.spiner}>
        <div className={s.spinnerInner}>
          <div>
          </div>
          <div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}