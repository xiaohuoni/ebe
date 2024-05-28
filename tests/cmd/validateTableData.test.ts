import { validateTableData } from '../../src/cmd/validateTableData';
import { expectValue } from '../utils';

describe('validateTableData', () => {
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
  // 表格·获取表格数据并校验
  new Promise<void>((resolve, reject) => {
    if (refs["table1"].validateTableData) {
      refs["table1"].validateTableData("table1",(err: any, dataSource: any)=>{
        if (!err) {
          resolve(dataSource);
        } else {
          reject(dataSource);
        }
      });
    }
  })
  `;

    const result = validateTableData(generateParams);

    expectValue(result, expectedCode);
  });
});
