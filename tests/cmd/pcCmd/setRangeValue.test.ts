import { setRangeValue } from '../../../src/cmd/pcCmd/setRangeValue';
import { expectValue } from '../../utils';

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
    // 时间段选择·设置时间段区间
    asyncCallComponentMethod(
      'datePicker1', 
      'setValue',
      ['2022-01-01', '2022-12-31']
    )
  `;

    const result = setRangeValue(generateParams);

    expectValue(result, expectedCode);
  });
});
