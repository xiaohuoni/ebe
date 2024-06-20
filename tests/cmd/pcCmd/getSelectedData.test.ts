import { getSelectedData } from '../../../src/cmd/pcCmd/getSelectedData';
import { expectValue } from '../../utils';

describe('getSelectedData', () => {
  it('should generate the correct code for getting selected data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          id: '123',
        },
      },
    };

    const expectedCode = `
  // 获取选中数据
    asyncCallComponentMethod('table1', 'getSelectedData');
  `;

    const result = getSelectedData(generateParams);

    expectValue(result, expectedCode);
  });
});
