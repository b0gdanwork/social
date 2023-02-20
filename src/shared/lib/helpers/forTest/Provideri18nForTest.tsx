import { type ReactNode, type FC } from 'react'
import 'shared/config/i18n/i18nForTest';

interface Props {
  children: ReactNode,
}

const Provideri18nForTest: FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Provideri18nForTest