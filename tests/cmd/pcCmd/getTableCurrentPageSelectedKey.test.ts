import { getTableCurrentPageSelectedKey } from '../../../src/cmd/pcCmd/getTableCurrentPageSelectedKey';
import { expectValue } from '../../utils';

describe('getTableCurrentPageSelectedKey', () => {
  it('should generate the correct code for get table current page select key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '6236834',
        },
      },
    };

    const expectedCode = `
  // 表格·获取当前页选中行主键
  asyncCallComponentMethod('Table_3606536', 'getTableCurrentPageSelectedKey')
  `;

    const result = getTableCurrentPageSelectedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
