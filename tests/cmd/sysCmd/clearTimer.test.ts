import { clearTimer } from '../../../src/cmd/sysCmd/clearTimer';
import { expectValue } from '../../utils';

describe('clearTimer', () => {
  it('should generate the correct code for clearing a timer', () => {
    const generateParams = {
      value: {
        options: {
          targettimer: 'timer1',
        },
      },
    };

    const expectedCode = `// 定时器
  clearActionTimer("timer1");
  `;

    const result = clearTimer(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code when targettimer is undefined', () => {
    const generateParams = {
      value: {
        options: {
          targettimer: 'undefined',
        },
      },
    };

    const expectedCode = `// 定时器
  clearActionTimer("undefined");
  `;

    const result = clearTimer(generateParams);

    expectValue(result, expectedCode);
  });
});
