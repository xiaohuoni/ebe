import { returnCmd } from '../../src/cmd/return';
import { expectValue } from '../utils';

describe('returnCmd', () => {
  it('should generate the correct code for returning a success value', () => {
    const generateParams = {
      value: {
        options: {
          returnValue: 'successValue',
          returnType: 'success',
        },
      },
    };

    const expectedCode = `
    // 退出事件 
    resolve("successValue");
    `;

    const result = returnCmd(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for returning a failure value', () => {
    const generateParams = {
      value: {
        options: {
          returnValue: 'failureValue',
          returnType: 'failure',
        },
      },
    };

    const expectedCode = `
    // 退出事件 
    reject("failureValue");
    `;

    const result = returnCmd(generateParams);

    expectValue(result, expectedCode);
  });
});
