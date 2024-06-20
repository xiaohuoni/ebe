import { restoreInlineRow } from '../../../src/cmd/pcCmd/restoreInlineRow';
import { expectValue } from '../../utils';

describe('restoreInlineRow', () => {
  it('should generate the correct code for restore table inline row', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '34221',
        },
      },
    };

    const expectedCode = `
    // 表格·撤销全部行内编辑行
    callComponentMethod('Table_3606536', 'restoreInlineRow');
  `;

    const result = restoreInlineRow(generateParams);

    expectValue(result, expectedCode);
  });
});
