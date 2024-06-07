import { setPageSrc } from '../../../src/cmd/sysCmd/setPageSrc';
import { expectValue } from '../../utils';

describe('setPageSrc', () => {
  it('should generate the correct code for setting page source', () => {
    const generateParams = {
      value: {
        options: {
          pathname: '/path/to/page',
          paramsObj: { param1: 'value1', param2: 'value2' },
          compId: 'component1',
        },
      },
    };

    const expectedCode = `// 设置页面地址
  callComponentMethod("component1", 'setPageSrc', "/path/to/page", {param1: "value1",param2: "value2"})
  `;

    const result = setPageSrc(generateParams);

    expectValue(result, expectedCode);
  });
});
