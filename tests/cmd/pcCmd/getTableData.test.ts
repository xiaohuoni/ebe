import { getTableData } from '../../../src/cmd/pcCmd/getTableData';
import { expectValue } from '../../utils';

describe('getTableData', () => {
  it('should generate the correct code for getting table data', () => {
    const generateParams = {
      value: {
        options: {
          id: '1',
          compId: 'table1',
        },
      },
    };

    const expectedCode = `
  // 表格·获取表格数据
  asyncCallComponentMethod('table1', 'getTableData');
  `;

    const result = getTableData(generateParams);

    expectValue(result, expectedCode);
  });
});
