import { historyGoBack } from '../../src/cmd/historyGoBack';
import { expectValue } from '../utils';

describe('historyGoBack', () => {
  it('should generate the correct code for going back in history', () => {
    const generateParams = {
      value: {
        options: {
          custParams: {
            param1: 'value1',
            param2: 'value2',
          },
        },
      },
      config: {
        ir: {
          deps: [],
        },
      },
    };

    const expectedCode = `
// 页面返回
  lcdpApi.setPageCallBackData({param1: "value1",param2: "value2"});
  history.go(-1);
  `;

    const result = historyGoBack(generateParams as any);

    expectValue(result, expectedCode);
  });
});
