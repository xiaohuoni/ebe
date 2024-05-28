import { okCallbackData } from '../../src/cmd/okCallbackData';
import { expectValue } from '../utils';

describe('okCallbackData', () => {
  it('should generate the correct code for ok callback data', () => {
    const generateParams = {
      value: {
        options: {
          params: 'data',
        },
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `
    // 弹窗确认回掉
    fatherOnOk && fatherOnOk("data")
  `;

    const result = okCallbackData(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for ok callback data without params', () => {
    const generateParams = {
      value: {
        options: {},
      },
      platform: 'web',
      config: {},
    };

    const expectedCode = `
    // 弹窗确认回掉
    fatherOnOk && fatherOnOk()
  `;

    const result = okCallbackData(generateParams);

    expectValue(result, expectedCode);
  });
});
