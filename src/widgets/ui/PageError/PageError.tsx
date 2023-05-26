import s from './PageError.module.scss'

import img404 from '@/shared/assets/img/404.png'

interface PropsPageError {}

export default function PageError ({}: PropsPageError) {

  return (
    <div className={s.wrapper}>
      <img src={img404} alt="img 404" />
    </div>
  )
}
