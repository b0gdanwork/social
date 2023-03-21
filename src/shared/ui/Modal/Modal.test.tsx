/* eslint-disable i18next/no-literal-string */
import { render } from '@testing-library/react'
import Modal from './Modal'

describe('test Modal render', () => {
  test('', () => {
    render(<Modal isOpen={true}>Modal</Modal>)
  })
})
