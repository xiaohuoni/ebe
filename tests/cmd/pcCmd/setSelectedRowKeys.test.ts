import { setSelectedRowKeys } from '../../../src/cmd/pcCmd/setSelectedRowKeys';
import { expectValue } from '../../utils';

describe('setSelectedRowKeys', () => {
  it('should generate the correct code for set table select key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '97519887',
          value: '$[2,3]$',
        },
      },
    };

    const expectedCode = `
    // 表格·设置选中行
    asyncCallComponentMethod(
      'Table_3606536', 
      'setSelectedRowKeys',
      [2,3]
    )
  `;

    const result = setSelectedRowKeys(generateParams);

    expectValue(result, expectedCode);
  });
});
