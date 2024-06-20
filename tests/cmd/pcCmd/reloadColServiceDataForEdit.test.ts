import { reloadColServiceDataForEdit } from '../../../src/cmd/pcCmd/reloadColServiceDataForEdit';
import { expectValue } from '../../utils';

describe('reloadColServiceDataForEdit', () => {
  it('should generate the correct code for reload table data for edit by service', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Table_3606536',
          compLib: 'comm',
          pageJsonId: '727598',
          compName: 'Table',
          id: '3100503',
          colNameForEdit: 'name',
          data: '$reply_726766$',
        },
      },
    };

    const expectedCode = `
  // 表格·加载字段数据
  asyncCallComponentMethod(
    'Table_3606536',
    'addColServiceDataForEdit', 
    {
      name:reply_726766
    }
  )
  `;

    const result = reloadColServiceDataForEdit(generateParams);

    expectValue(result, expectedCode);
  });
});
