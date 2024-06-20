import { saveInlineRow } from '../../../src/cmd/pcCmd/saveInlineRow';
import { expectValue } from '../../utils';

describe('saveInlineRow', () => {
  it('should generate the correct code for save table inline row', () => {
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
    // 表格·保存当前行内编辑行
    callComponentMethod('Table_3606536', 'saveInlineRow');
  `;

    const result = saveInlineRow(generateParams);

    expectValue(result, expectedCode);
  });
});
