import { validateTableRowData } from '../../../src/cmd/pcCmd/validateTableRowData';
import { expectValue } from '../../utils';

describe('validateTableRowData', () => {
  it('should generate the correct code for validating table data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          id: '1',
        },
      },
    };

    const expectedCode = `
  // 表格·获取表格当前行数据并校验
  new Promise<void>((resolve, reject) => {
    if (refs["table1"].validateTableRowData) {
      refs["table1"].validateTableRowData("table1",(err: any)=>{
        if (!err) {
          resolve();
        } else {
          reject();
        }
      });
    }
  })
  `;

    const result = validateTableRowData(generateParams);

    expectValue(result, expectedCode);
  });
});
