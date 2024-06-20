import { getPageNum } from '../../../src/cmd/pcCmd/getPageNum';
import { expectValue } from '../../utils';

describe('getPageNum', () => {
  it('should generate the correct code for get table current page', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '387284',
        },
      },
    };

    const expectedCode = `
    // 表格·获取当前页
    asyncCallComponentMethod('Table_3606536', 'getPageNum')
  `;

    const result = getPageNum(generateParams);

    expectValue(result, expectedCode);
  });
});
