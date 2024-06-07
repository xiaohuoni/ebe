import { clearValue } from '../../../src/cmd/sysCmd/clearValue';
import { expectValue } from '../../utils';

describe('clearValue', () => {
  it('should generate the correct code for clearing a value', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'input1',
        },
      },
    };

    const expectedCode = `
    // 清除value字段
    clearValue("input1");
  `;

    const result = clearValue(generateParams);

    expectValue(result, expectedCode);
  });
});
