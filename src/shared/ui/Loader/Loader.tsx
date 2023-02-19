import s from './Loader.module.scss'

interface PropsLoader {}

export default function Loader ({ }: PropsLoader) {
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