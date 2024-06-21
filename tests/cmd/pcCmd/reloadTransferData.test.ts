import { reloadTransferData } from '../../../src/cmd/pcCmd/reloadTransferData';
import { expectValue } from '../../utils';

describe('reloadTransferData', () => {
  it('should generate the correct code for reloading transfer data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Transfer_160313',
          compLib: 'comm',
          pageJsonId: '671236',
          compName: 'Transfer',
          id: '4653632',
          data: '$data_7974065$',
        },
      },
    };

    const expectedCode = `
    // 传索框·加载数据
     asyncCallComponentMethod('Transfer_160313', 'setDataSource', data_7974065)
    `;

    const result = reloadTransferData(generateParams);

    expectValue(result, expectedCode);
  });
});
