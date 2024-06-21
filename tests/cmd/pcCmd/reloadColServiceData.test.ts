import { reloadColServiceData } from '../../../src/cmd/pcCmd/reloadColServiceData';
import { expectValue } from '../../utils';

describe('reloadColServiceData', () => {
  it('should generate the correct code for reload col service data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Description_032318',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Description',
          id: '191717',
          colName: 'hourlyCook',
          data: '$reply_496616$',
        },
      },
    };

    const expectedCode = `
    // 加载字段翻译数据
    callComponentMethod('Description_032318', 'addColServiceData',{
      hourlyCook:reply_496616
    });
  `;

    const result = reloadColServiceData(generateParams);

    expectValue(result, expectedCode);
  });
});
