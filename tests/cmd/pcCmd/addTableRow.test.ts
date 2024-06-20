import { addTableRow } from '../../../src/cmd/pcCmd/addTableRow';
import { expectValue } from '../../utils';

describe('addTableRow', () => {
  it('should generate the correct code for adding a table row', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          inlineeditnow: true,
        },
      },
    };

    const expectedCode = `
    // 表格·新增一行空白数据
    callComponentMethod('table1', 'addTableEmptyRow', updateData, true);
  `;

    const result = addTableRow(generateParams);

    expectValue(result, expectedCode);
  });
});
