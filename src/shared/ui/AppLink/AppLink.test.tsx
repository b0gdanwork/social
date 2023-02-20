/* eslint-disable i18next/no-literal-string */
import '@testing-library/jest-dom/extend-expect'
import AppLink from './AppLink';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('test AppLink', () => {

  test('test render AppLink', () => {
    render(<BrowserRouter><AppLink to={'/'}>Hi</AppLink></BrowserRouter>);

    expect(screen.getByText('Hi')).toBeInTheDocument()
  });

  test('test click AppLink', async () => {
    const newUrl = '/newUrl'
    const user = userEvent.setup()

    render(<BrowserRouter><AppLink to={newUrl}>Hi</AppLink></BrowserRouter>);
    await user.click(screen.getByText(/Hi/i))
    expect(window.location.href).toMatch(newUrl)
  });

});
