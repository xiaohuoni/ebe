import { customActionCode } from '../../src/cmd/customActionCode';
import { expectValue } from '../utils';

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

    const expectedCode = `;(async () => {
    console.log("Origin Code");
    // 自定义代码块
    return new Promise((resolve, reject) => {
      main(data, state, resolve, reject);
    })
  })()`;

    const result = customActionCode(generateParams);

    expectValue(result, expectedCode);
  });
});
