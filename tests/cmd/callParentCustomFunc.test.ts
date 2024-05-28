import { callParentCustomFunc } from '../../src/cmd/callParentCustomFunc';
import { expectValue } from '../utils';

describe('callParentCustomFunc', () => {
  it('should generate the correct code for calling a parent custom function', () => {
    const generateParams = {
      value: {
        options: {
          params: {
            param1: 'value1',
            param2: 'value2',
          },
          customFuncName: 'myCustomFunc',
        },
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `// 调用父页面事件 \n customFuncMapping.callCustomFunc(lcdpParentRenderId, "myCustomFunc", { param1: 'value1', param2: 'value2' })`;

    const result = callParentCustomFunc(generateParams);

    expectValue(result, expectedCode);
  });
});
