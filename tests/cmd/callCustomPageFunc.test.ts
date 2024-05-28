import { callCustomPageFunc } from '../../src/cmd/callCustomPageFunc';
import { expectValue } from '../utils';

describe('callCustomPageFunc', () => {
  it('should generate the correct code for calling a custom page function', () => {
    const generateParams = {
      value: {
        options: {
          params: {
            param1: 'value1',
            param2: 'value2',
          },
          customFuncName: 'myCustomFunction',
          pageId: 'page1',
          pathname: '/path/to/page1',
        },
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `// 调用/path/to/page1页面事件
    customFuncMapping.callPageCustomFunc("/path/to/page1", "myCustomFunction", {param1: "value1",param2: "value2"})
    `;

    const result = callCustomPageFunc(generateParams);

    expectValue(result, expectedCode);
  });
});
