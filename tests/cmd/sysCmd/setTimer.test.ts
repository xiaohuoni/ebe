import { setTimer } from '../../../src/cmd/sysCmd/setTimer';
import { expectValue } from '../../utils';

describe('setTimer', () => {
  it('should generate the correct code for setting a timer', () => {
    const generateParams = {
      value: {
        options: {
          timername: 'myTimer',
          type: 'interval',
          interval: 1000,
          callback1: 'myCallback',
        },
      },
    };

    const expectedCode = `// 定时器
  addActionTimer("interval", "myTimer", ()=>{ console.log("这里找不到参数/？")}, 1000);
  `;

    const result = setTimer(generateParams);

    expectValue(result, expectedCode);
  });
});
