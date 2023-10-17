import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('test with one param', () => {
    const params = {
      test: 'value',
    };
    expect(getQueryParams(params)).toBe('?test=value');
  });

  test('test with multiple param', () => {
    const params = {
      test: 'value',
      test2: 'value2',
    };
    expect(getQueryParams(params)).toBe('?test=value&test2=value2');
  });

  test('test with undefined', () => {
    const params = {
      test: 'value',
      test2: undefined,
    };
    expect(getQueryParams(params)).toBe('?test=value');
  });
});
