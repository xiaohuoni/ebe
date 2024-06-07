import { setTimeout } from '../../../src/cmd/sysCmd/setTimeout';
import { expectValue } from '../../utils';

describe('setTimeout', () => {
  it('should generate the correct code for setting a timeout', () => {
    const generateParams = {
      value: {
        options: {
          timername: 'myTimer',
          interval: 5000,
        },
      },
    };

    const expectedCode = `
// 定时器
  addActionTimer('timeout', "myTimer", ()=>{ console.log("这里找不到参数/？")}, 5000);`;

    const result = setTimeout(generateParams);

    expectValue(result, expectedCode);
  });
});
