import { callSelfFunc } from '../../src/cmd/callSelfFunc';
import { expectValue } from '../utils';

describe('callSelfFunc', () => {
  it('should generate the correct code for calling a self-defined function', () => {
    const generateParams = {
      value: {
        options: {
          paramsObj: { param1: 'value1', param2: 'value2' },
          customFuncName: 'myCustomFunction',
          customFuncParams: 'object',
          id: '123',
        },
      },
    };

    const expectedCode = `
// 调用当前页面自定义事件
  customActionMap?.myCustomFunction({ param1: "value1", param2: "value2" })`;

    const result = callSelfFunc(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for calling a self-defined function with string parameters', () => {
    const generateParams = {
      value: {
        options: {
          paramsObj: {},
          customFuncName: 'myCustomFunction',
          customFuncParams: '$param1, param2$',
          id: '456',
        },
      },
    };

    const expectedCode = `
// 调用当前页面自定义事件
  customActionMap?.myCustomFunction(param1, param2)`;

    const result = callSelfFunc(generateParams);

    expectValue(result, expectedCode);
  });
});
