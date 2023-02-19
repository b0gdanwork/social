import { classNames } from './classNames';

describe('classNames', () => {
  test('', () => {
    expect(classNames('main', { hover: true, active: false }, ['main--test']))
      .toBe('main hover main--test');
  });

  test('', () => {
    expect(classNames('main'))
      .toBe('main');
  });

  test('', () => {
    expect(classNames('main', {}, ['main--test', 'main--test2']))
      .toBe('main main--test main--test2');
  });
})