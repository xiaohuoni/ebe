import { sysSetRequired } from '../../../src/cmd/sysCmd/sysSetRequired';
import { expectValue } from '../../utils';

describe('sysSetRequired', () => {
  it('should generate the correct code for setting a single control as required', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'input1',
          compValueList: {
            input1: true,
          },
        },
      },
    };

    const expectedCode = `// 设置控件必填 
 setRequired('input1', true)`;

    const result = sysSetRequired(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for setting multiple controls as required', () => {
    const generateParams = {
      value: {
        options: {
          compId: ['input1', 'input2'],
          compValueList: {
            input1: true,
            input2: false,
          },
        },
      },
    };

    const expectedCode = `// 批量设置控件必填
 setRequired({input1: true,input2: false})`;

    const result = sysSetRequired(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an empty string when compId is not a string or an array', () => {
    const generateParams = {
      value: {
        options: {
          compId: null,
          compValueList: {},
        },
      },
    };

    const expectedCode = '';

    const result = sysSetRequired(generateParams);

    expectValue(result, expectedCode);
  });
});
