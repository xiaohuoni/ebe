import { setTransferRightTitle } from '../../../src/cmd/pcCmd/setTransferRightTitle';
import { expectValue } from '../../utils';

describe('setTransferRightTitle', () => {
  it('should generate the correct code for set transfer right title', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Transfer_160313',
          compLib: 'comm',
          pageJsonId: '671236',
          compName: 'Transfer',
          id: '93079',
          value: '右边',
        },
      },
    };

    const expectedCode = `
    // 传索框·设置左边标题
     asyncCallComponentMethod('Transfer_160313', 'setTransferRightTitle', '右边')
    `;

    const result = setTransferRightTitle(generateParams);

    expectValue(result, expectedCode);
  });
});
