import Counter from './Counter'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProviderTest from 'shared/lib/helpers/forTest/componentRender'

describe('Counter raact test', () => {
  test('', async () => {
    render(<ProviderTest initialState={{ counter: { value: 10 } }}><Counter /></ProviderTest>)

    await userEvent.click(screen.getByTestId('increment'))
    expect(screen.getByTestId('value')).toHaveTextContent('value:11')
    await userEvent.click(screen.getByTestId('decrement'))
    expect(screen.getByTestId('value')).toHaveTextContent('value:10')
  })
})
