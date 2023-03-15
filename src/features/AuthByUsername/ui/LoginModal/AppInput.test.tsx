import { render } from '@testing-library/react'
import LoginModal from './LoginModal'

describe('test AppInput render', () => {
  test('', () => {
    render(<LoginModal isOpen={true}/>)
  })
})
