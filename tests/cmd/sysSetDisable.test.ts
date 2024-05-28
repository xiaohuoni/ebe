import { sysSetDisable } from '../../src/cmd/sysSetDisable';
import { expectValue } from '../utils';

describe('sysSetDisable', () => {
  it('should generate the correct code for setting control disable', () => {
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
 setDisabled('input1', true)`;

    const result = sysSetDisable(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for setting multiple controls disable', () => {
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
  setDisabled({input1: true,input2: false})`;

    const result = sysSetDisable(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an empty string if compId is not provided', () => {
    const generateParams = {
      value: {
        options: {
          compValueList: {
            input1: true,
          },
        },
      },
    };

    const expectedCode = '';

    const result = sysSetDisable(generateParams);

    expectValue(result, expectedCode);
  });
});
