import { getTableCurrentPageSelected } from '../../../src/cmd/pcCmd/getTableCurrentPageSelected';
import { expectValue } from '../../utils';

describe('getTableCurrentPageSelected', () => {
  it('should generate the correct code for get table current page select data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '5425393',
        },
      },
    };

    const expectedCode = `
  // 表格·获取当前页选中行
  asyncCallComponentMethod('Table_3606536', 'getTableCurrentPageSelected')
  `;

    const result = getTableCurrentPageSelected(generateParams);

    expectValue(result, expectedCode);
  });
});
