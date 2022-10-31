import { classNames } from './classNames';

describe('classNames', () => {
  test('Should return class name for one param', () => {
    expect(classNames('some-class')).toBe('some-class');
  });

  test('Should return class names for additional classes', () => {
    const expected = 'some-class class1 class2';
    expect(classNames('some-class', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('Should return class names for mods', () => {
    const expected = 'some-class class1 class2 hovered scrollable';
    expect(classNames(
      'some-class',
      { hovered: true, scrollable: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('Should return class names for mods with false', () => {
    const expected = 'some-class class1 class2 hovered';
    expect(classNames(
      'some-class',
      { hovered: true, scrollable: false },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
