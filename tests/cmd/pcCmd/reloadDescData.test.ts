import { reloadDescData } from '../../../src/cmd/pcCmd/reloadDescData';
import { expectValue } from '../../utils';

describe('reloadDescData', () => {
  it('should generate the correct code for reload descript data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Description_032318',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Description',
          id: '7124585',
          data: '$data_538455$',
        },
      },
    };

    const expectedCode = `
    // 加载数据
    callComponentMethod('Description_032318', 'setDataSource',data_538455);
  `;

    const result = reloadDescData(generateParams);

    expectValue(result, expectedCode);
  });
});
