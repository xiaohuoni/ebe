import { setInterval } from '../../../src/cmd/sysCmd/setInterval';
import { expectValue } from '../../utils';

describe('setInterval', () => {
  it('should generate the correct code for setting an interval', () => {
    const generateParams = {
      value: {
        options: {
          timername: 'myTimer',
          interval: 1000,
          callback1: 'myCallback',
        },
      },
    };

    const expectedCode = `
    // 定时器
    addActionTimer('interval', 'myTimer', () => {
      console.log('这里找不到参数/？');
      }, 1000);
    `;

    const result = setInterval(generateParams);

    expectValue(result, expectedCode);
  });
});
