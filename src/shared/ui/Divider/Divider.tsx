import { classNames } from 'shared/lib/helpers/classNames/classNames'

type MobileStatuses = 'm-5' | 'm-10' | 'm-15' | 'm-20' | 'm-25' | 'm-30' | 'm-35' | 'm-40' | 'm-45' | 'm-50';
type DesctopStatuses = 'd-5' | 'd-10' | 'd-15' | 'd-20' | 'd-25' | 'd-30' | 'd-35' | 'd-40' | 'd-45' | 'd-50';

interface Props {
  mobileSize?: MobileStatuses 
  sectopSize?: DesctopStatuses
}

export default function Divider ({ mobileSize, sectopSize }: Props) {
  return (
    <div className={classNames('divider', { mobileSize: !!mobileSize, sectopSize: !!sectopSize })}></div>
  )
}
