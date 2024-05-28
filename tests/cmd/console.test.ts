import { getConsole } from '../../src/cmd/console';

describe('getConsole', () => {
  it('should return the correct console statement', () => {
    const value = {
      options: {
        value: ['option1', 'option2'],
      },
      type: 'log',
      dataId: '123',
    };
    const expected = `// 打印日志
 console.log(\`option1\`,\`option2\`);`;
    const result = getConsole({ value });
    expect(result).toEqual(expected);
  });

  it('should handle JS variables correctly', () => {
    const value = {
      options: {
        value: ['option1', 'option2', '$var1$', 'var2'],
      },
      type: 'log',
      dataId: '123',
    };
    const expected = `// 打印日志
 console.log(\`option1\`,\`option2\`,var1,\`var2\`);`;
    const result = getConsole({ value });
    expect(result).toEqual(expected);
  });

  it('should handle empty options correctly', () => {
    const value = {
      options: {
        value: [],
      },
      type: 'log',
      dataId: '123',
    };
    const expected = `// 打印日志
 console.log();`;
    const result = getConsole({ value });
    expect(result).toEqual(expected);
  });
});
