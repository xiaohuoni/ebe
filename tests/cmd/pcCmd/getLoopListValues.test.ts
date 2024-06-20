import { getLoopListValues } from '../../../src/cmd/pcCmd/getLoopListValues';
import { expectValue } from '../../utils';

describe('getLoopListValues', () => {
  it('should generate the correct code for getting loop list values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          id: '1',
        },
      },
    };

    const expectedCode = `
  // 循环列表获取选中值
  asyncCallComponentMethod('table1', 'getValues');
  `;

    const result = getLoopListValues(generateParams);

    expectValue(result, expectedCode);
  });
});
