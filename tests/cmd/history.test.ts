import { history } from '../../src/cmd/history';
import { expectValue } from '../utils';

describe('history', () => {
  it('should generate the correct code for history', () => {
    const generateParams = {
      value: {
        options: {
          type: 'push',
          paramsObj: {
            param1: 'value1',
            param2: 'value2',
          },
          pathname: '/example',
          routerData: {
            data1: 'data1',
            data2: 'data2',
          },
        },
      },
      config: {
        ir: {
          deps: [],
        },
      },
    };

    const expectedCode = `// 路由跳转 \n  historytool(HISTORYTYPES.push, {
    history,
    pathname:'/example',
    search:{"param1":"value1","param2":"value2"},
    state:{"data1":"data1","data2":"data2"},
  });`;

    const result = history(generateParams as any);

    expectValue(result, expectedCode);
  });
});
