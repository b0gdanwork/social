/* eslint-disable i18next/no-literal-string */
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import Divider from './Divider';

describe('test AppButton', () => {

  test('', async () => {
    const { container } = render(<Divider />);

    expect(container.getElementsByClassName('divider')[0]).toBeInTheDocument()
  });
  
});
