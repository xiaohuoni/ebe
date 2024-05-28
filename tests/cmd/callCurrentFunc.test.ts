import { callCurrentFunc } from '../../src/cmd/callCurrentFunc';
import { expectValue } from '../utils';

describe('callCurrentFunc', () => {
  it('should generate the correct code for calling a current function', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          id: '1',
          paramsObj: { param1: 'value1', param2: 'value2' },
          customFuncParams: 'object',
          customFuncName: 'onButtonClick',
        },
      },
    };

    const expectedCode = `// 调用组件table1的自定义事件
  refs?.['table1']?.customActionMap?.onButtonClick({param1: "value1",param2: "value2"})`;

    const result = callCurrentFunc(generateParams);

    expectValue(result, expectedCode);
  });
});
