import { clearTableSelected } from '../../../src/cmd/pcCmd/clearTableSelected';
import { expectValue } from '../../utils';

describe('clearTableSelected', () => {
  it('should generate the correct code for clear table select data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '315806',
        },
      },
    };

    const expectedCode = `
    // 表格·清除选中数据
    callComponentMethod('Table_3606536', 'clearTableSelected');
  `;

    const result = clearTableSelected(generateParams);

    expectValue(result, expectedCode);
  });
});
