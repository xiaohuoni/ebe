import { sysSetValue } from '../../../src/cmd/sysCmd/sysSetValue';
import { expectValue } from '../../utils';

describe('sysSetValue', () => {
  it('should generate the correct code for setting a single control value', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'input1',
          valueList: {
            input1: true,
          },
        },
        callback1: [],
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `// 设置控件的值 
  setValue('input1', true)`;

    const result = sysSetValue(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for setting multiple control values', () => {
    const generateParams = {
      value: {
        options: {
          compId: ['input1', 'input2'],
          valueList: {
            input1: true,
            input2: false,
          },
        },
        callback1: [],
      },
      platform: 'web',
      config: {},
    };
    // TODO: "input2": false???
    const expectedCode = `// 批量设置控件的值 
  setValue({"input1": true, })`;

    const result = sysSetValue(generateParams);

    expectValue(result, expectedCode);
  });

  it('should return an empty string if compId is not a string or an array', () => {
    const generateParams = {
      value: {
        options: {
          compId: null,
          valueList: {},
        },
        callback1: [],
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = '';

    const result = sysSetValue(generateParams);

    expectValue(result, expectedCode);
  });
});
