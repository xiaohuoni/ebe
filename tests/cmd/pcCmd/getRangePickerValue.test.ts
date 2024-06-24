import { getRangePickerValue } from '../../../src/cmd/pcCmd/getRangePickerValue';
import { expectValue } from '../../utils';

describe('getRangePickerValue', () => {
  it('should generate the correct code for get range picker value for start and end', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'RangePicker_3252822',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'RangePicker',
          id: '335667',
        },
      },
    };

    const expectedCode = `
    // 时间段选择·获取起止时间
    asyncGetValue('RangePicker_3252822')
  `;

    const result = getRangePickerValue(generateParams);

    expectValue(result, expectedCode);
  });
});
