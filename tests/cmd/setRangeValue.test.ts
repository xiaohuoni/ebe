import { setRangeValue } from '../../src/cmd/setRangeValue';
import { expectValue } from '../utils';

describe('setRangeValue', () => {
  it('should generate the correct code for setting a range value', () => {
    const generateParams = {
      value: {
        options: {
          startVal: '2022-01-01',
          endVal: '2022-12-31',
          compId: 'datePicker1',
        },
      },
    };

    const expectedCode = `
  // 设置时间段区间
    if (refs["datePicker1"].setValue) {
      refs["datePicker1"].setValue(["2022-01-01","2022-12-31"]);
    }
  `;

    const result = setRangeValue(generateParams);

    expectValue(result, expectedCode);
  });
});
