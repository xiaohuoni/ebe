import { delTableRow } from '../../../src/cmd/pcCmd/delTableRow';
import { expectValue } from '../../utils';

describe('delTableRow', () => {
  it('should generate the correct code for deleting a table row', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          params: 'rowIndex',
        },
      },
    };

    const expectedCode = `
    // 表格·删除指定行数据
    if (refs["table1"].deleteTableRow) {
      refs["table1"].deleteTableRow(_, "rowIndex");
    }
  `;

    const result = delTableRow(generateParams);

    expectValue(result, expectedCode);
  });
});
