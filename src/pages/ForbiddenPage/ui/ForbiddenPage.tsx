import { PageLayout } from "pages/PageLayout";

import s from './ForbiddenPage.module.scss'

export default function ForbiddenPage () {
  return (
    <PageLayout>
      <div className={s.wrapper}>
        <h2>Недостаточно прав</h2>
      </div>
    </PageLayout>
  )
}
