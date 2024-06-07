import { getTableData } from '../../../src/cmd/pcCmd/getTableData';
import { expectValue } from '../../utils';

describe('getTableData', () => {
  it('should generate the correct code for getting table data', () => {
    const generateParams = {
      value: {
        options: {
          id: '1',
          compId: 'table1',
        },
      },
    };

    const expectedCode = `
  // 表格·获取表格数据
  new Promise<void>((resolve, reject) => {
    if (refs["table1"].getTableData) {
      const values = refs["table1"].getTableData();
      if (values) {
        resolve(values)
      }else{
        reject([])
      }
    }
  })
  `;

    const result = getTableData(generateParams);

    expectValue(result, expectedCode);
  });
});
