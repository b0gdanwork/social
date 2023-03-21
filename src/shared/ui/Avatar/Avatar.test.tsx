/* eslint-disable i18next/no-literal-string */
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Avatar from './Avatar'

describe('test Avatar', () => {

  test('', async () => {
    const { container } = render(<Avatar />)

    expect(container.getElementsByTagName('img')[0]).toBeInTheDocument()
  })
  
})
