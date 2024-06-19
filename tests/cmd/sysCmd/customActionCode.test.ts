import { customActionCode } from '../../../src/cmd/sysCmd/customActionCode';
import { expectValue } from '../../utils';

describe('customActionCode', () => {
  it('should generate the correct custom action code', () => {
    const generateParams = {
      value: {
        options: {
          code: 'console.log("Hello, World!");',
          originCode: 'console.log("Origin Code");',
          id: '123',
        },
      },
    };

    const expectedCode = `
    // 自定义代码块
    new Promise((resolve, reject) => {
      try {
        console.log("Origin Code");
        main(data, state, resolve, reject);
      } catch (error) {}
    })
`;

    const result = customActionCode(generateParams);

    expectValue(result, expectedCode);
  });
});
