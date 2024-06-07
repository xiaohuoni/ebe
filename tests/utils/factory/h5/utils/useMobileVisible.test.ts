import useMobileVisible from '../../../../../src/utils/factory/h5/utils/useMobileVisible';

describe('useMobileVisible', () => {
  test('should return false for undefined visible with specific component names', () => {
    const visible = undefined;
    const comName = 'Calendar';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(false);
  });

  test('should return true for boolean visible', () => {
    const visible = true;
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(true);
  });

  test('should return true for string visible with value "1"', () => {
    const visible = '1';
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(true);
  });

  test('should return false for string visible with value "2"', () => {
    const visible = '2';
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(false);
  });

  test('should return false for string visible with value "false"', () => {
    const visible = 'false';
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(false);
  });

  test('should return true for string visible with value "true"', () => {
    const visible = 'true';
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(true);
  });

  test('should return true for number visible with value 1', () => {
    const visible = 1;
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(true);
  });

  test('should return false for number visible with value 2', () => {
    const visible = 2;
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(false);
  });

  test('should return false for number visible with value 0', () => {
    const visible = 0;
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(false);
  });

  test('should return true for any other value of visible', () => {
    const visible = 'other';
    const comName = 'SomeComponent';
    const result = useMobileVisible(visible, comName);
    expect(result).toBe(true);
  });
});
