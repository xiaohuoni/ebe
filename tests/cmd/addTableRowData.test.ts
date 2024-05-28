import { addTableRowData } from '../../src/cmd/addTableRowData';
import { expectValue } from '../utils';

describe('addTableRowData', () => {
  it('should generate the correct code for adding a table row data', () => {
    const generateParams = {
      value: {
        dataName: 'action',
        dataId: 171644982452886940,
        todoOptions: ['params'],
        path: [171644697028194560, 171644698572324960, 171644698572327330],
        options: {
          compId: 'Table_724355',
          compLib: 'comm',
          pageJsonId: '0060614',
          compName: 'Table',
          id: '494177',
          params: '$data_994564$',
        },
        actionObjId: 'Table_724355',
        actionObjName: 'Table',
        value: 'addTableRowData',
        elseIfs: [],
        children: [],
      },
    };

    const expectedCode = `// 表格·新增一行数据
    const obj = data_994564 === 'object' ? undefined : data_994564;
    if (typeof obj !== 'object') {
      console.error("数据类型不正确")
    } else if (refs["Table_724355"].addTableRowData) {
      refs["Table_724355"].addTableRowData(obj);
    }
  `;

    const result = addTableRowData(generateParams);
    expectValue(result, expectedCode);
  });
});
