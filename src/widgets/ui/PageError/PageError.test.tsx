/* eslint-disable i18next/no-literal-string */
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import Provideri18nForTest from 'shared/lib/helpers/forTest/Provideri18nForTest';
import PageError from './PageError';

describe('test AppButton', () => {

  test('', async () => {
    const { container } = render(<Provideri18nForTest><PageError /></Provideri18nForTest>);

    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument()
  });
  
});
