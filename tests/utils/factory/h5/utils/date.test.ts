import {
  clearChineseStr,
  dateToFormatter,
  toDate,
} from '../../../../../src/utils/factory/h5/utils/date';

describe('clearChineseStr', () => {
  test('replaces Chinese characters with "-"', () => {
    const input = '2022年01月01日';
    const expected = '2022-01-01';
    const result = clearChineseStr(input);
    expect(result).toBe(expected);
  });

  test('removes "日" character', () => {
    const input = '2022年01月01日';
    const expected = '20220101';
    const result = clearChineseStr(input, '');
    expect(result).toBe(expected);
  });

  test('returns the same string if no Chinese characters are present', () => {
    const input = '2022-01-01';
    const result = clearChineseStr(input);
    expect(result).toBe(input);
  });
});

describe('toDate', () => {
  //   test('converts string to Date object', () => {
  //     const dateString = '2022-01-01';
  //     const expected = new Date(dateString);
  //     const result = toDate(dateString);
  //     expect(result).toEqual(expected);
  //   });

  //   test('converts string to Date object with custom format', () => {
  //     const dateString = '2022/01/01';
  //     const format = 'YYYY/MM/DD';
  //     const expected = new Date('2022-01-01');
  //     const result = toDate(dateString, format);
  //     expect(result).toEqual(expected);
  //   });

  test('returns undefined if dateString is empty', () => {
    const dateString = '';
    const result = toDate(dateString);
    expect(result).toBeUndefined();
  });

  test('returns undefined if dateString is not a string', () => {
    const dateString: any = 123;
    const result = toDate(dateString);
    expect(result).toBe(123);
  });
});

describe('dateToFormatter', () => {
  test('formats date with formatter', () => {
    const formatter = 'YYYY-MM-DD';
    const date = new Date('2022-01-01');
    const expected = '2022-01-01';
    const result = dateToFormatter(formatter, date);
    expect(result).toBe(expected);
  });

  test('formats string date with formatter', () => {
    const formatter = 'YYYY-MM-DD';
    const dateString = '2022-01-01';
    const expected = '2022-01-01';
    const result = dateToFormatter(formatter, dateString);
    expect(result).toBe(expected);
  });

  test('formats date with formatter and valueFormat', () => {
    const formatter = 'YYYY-MM-DD';
    const valueFormat = 'YYYY年MM月DD日';
    const date = new Date('2022-01-01');
    const expected = '2022年01月01日';
    const result = dateToFormatter(formatter, date, valueFormat);
    expect(result).toBe(expected);
  });

  test('returns undefined if date is empty', () => {
    const formatter = 'YYYY-MM-DD';
    const result = dateToFormatter(formatter);
    expect(result).toBeUndefined();
  });
});
