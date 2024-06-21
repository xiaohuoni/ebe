import { getStepsCurrentValue } from '../../../src/cmd/pcCmd/getStepsCurrentValue';
import { expectValue } from '../../utils';

describe('getStepsCurrentValue', () => {
  it('should generate the correct code for get steps current value', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Steps_028633',
          compLib: 'antd',
          pageJsonId: '671236',
          compName: 'Steps',
          id: '967583',
        },
      },
    };

    const expectedCode = `
    // 步骤条·获取当前步骤
    asyncGetValue(
      'Steps_028633', 
      'current'
    )
  `;

    const result = getStepsCurrentValue(generateParams);

    expectValue(result, expectedCode);
  });
});
