import { reloadTableData } from '../../src/cmd/reloadTableData';
import { expectValue } from '../utils';

describe('reloadTableData', () => {
  it('should generate the correct code for reloading table data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          data: [],
          total: 0,
          current: 1,
        },
      },
    };

    const expectedCode = `
    asyncCallComponentMethod('table1', 'setTableData', {
      dataSource: [],
      total: 0,
      current: 1,
    })
    `;

    const result = reloadTableData(generateParams);

    expectValue(result, expectedCode);
  });
});
