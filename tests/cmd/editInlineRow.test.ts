import { editInlineRow } from '../../src/cmd/editInlineRow';
import { expectValue } from '../utils';

describe('editInlineRow', () => {
  it('should generate the correct code for editing an inline row', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          inlineeditrow: 2,
        },
      },
    };

    const expectedCode = `
    // 表格·指定行开启行内编辑
    if (refs["table1"].editInlineRow) {
      refs["table1"].editInlineRow(2);
    }
  `;

    const result = editInlineRow(generateParams);

    expectValue(result, expectedCode);
  });
});
