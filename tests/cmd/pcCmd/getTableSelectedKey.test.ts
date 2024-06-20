import { getTableSelectedKey } from '../../../src/cmd/pcCmd/getTableSelectedKey';
import { expectValue } from '../../utils';

describe('getTableSelectedKey', () => {
  it('should generate the correct code for getting table selected key', () => {
    const generateParams = {
      value: {
        options: {
          id: '1',
          compId: 'table1',
        },
      },
    };

    const expectedCode = `
  // 表格·获取选中行主键
  asyncCallComponentMethod('table1', 'getTableSelectedKey');
  `;

    const result = getTableSelectedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
