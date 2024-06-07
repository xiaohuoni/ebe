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
  new Promise<void>((resolve, reject) => {
    if (refs["table1"].getTableSelectedKey) {
      const values = refs["table1"].getTableSelectedKey();
      if (values) {
        resolve(values)
      }else{
        reject([])
      }
    }
  })
  `;

    const result = getTableSelectedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
