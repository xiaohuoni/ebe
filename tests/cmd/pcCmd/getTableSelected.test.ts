import { getTableSelected } from '../../../src/cmd/pcCmd/getTableSelected';
import { expectValue } from '../../utils';

describe('getTableSelected', () => {
  it('should generate the correct code for getting selected table rows', () => {
    const generateParams = {
      value: {
        options: {
          id: '1',
          compId: 'table1',
        },
      },
    };

    const expectedCode = `
  // 表格·获取选中行
  asyncCallComponentMethod('table1', 'getTableSelected');
  `;

    const result = getTableSelected(generateParams);

    expectValue(result, expectedCode);
  });
});
