import { clearData } from '../../../src/cmd/pcCmd/clearData';
import { expectValue } from '../../utils';

describe('clearData', () => {
  it('should generate the correct code for clear data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Description_032318',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Description',
          id: '813927',
        },
      },
    };

    const expectedCode = `
    // 清空数据
    callComponentMethod("Description_032318", 'clearData');
  `;

    const result = clearData(generateParams);

    expectValue(result, expectedCode);
  });
});
