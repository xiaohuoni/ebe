import { setTransferLeftTitle } from '../../../src/cmd/pcCmd/setTransferLeftTitle';
import { expectValue } from '../../utils';

describe('setTransferLeftTitle', () => {
  it('should generate the correct code for set transfer left title', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Transfer_160313',
          compLib: 'comm',
          pageJsonId: '671236',
          compName: 'Transfer',
          id: '1212946',
          value: '左标题',
        },
      },
    };

    const expectedCode = `
    // 传索框·设置左边标题
     asyncCallComponentMethod('Transfer_160313', 'setTransferLeftTitle', '左标题')
    `;

    const result = setTransferLeftTitle(generateParams);

    expectValue(result, expectedCode);
  });
});
