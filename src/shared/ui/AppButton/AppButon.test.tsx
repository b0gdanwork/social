/* eslint-disable i18next/no-literal-string */
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import AppButton from './AppButton'
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

describe('test AppButton', () => {

  test('', async () => {
    const { container } = render(<AppButton className={'red'} theme={AppButtonTheme.PRIMARY}>Hi</AppButton>)

    expect(screen.getByText('Hi')).toBeInTheDocument()
    expect(container.getElementsByTagName('button')[0]).toBeInTheDocument()
    expect(container.getElementsByClassName(AppButtonTheme.PRIMARY)[0]).toBeInTheDocument()
  })
  
})
