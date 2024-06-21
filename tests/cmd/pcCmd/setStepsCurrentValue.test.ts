import { setStepsCurrentValue } from '../../../src/cmd/pcCmd/setStepsCurrentValue';
import { expectValue } from '../../utils';

describe('setStepsCurrentValue', () => {
  it('should generate the correct code for set current step', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Steps_028633',
          compLib: 'antd',
          pageJsonId: '671236',
          compName: 'Steps',
          id: '5488492',
          current: '3',
        },
      },
    };

    const expectedCode = `
    // 步骤条·设置当前步骤
    asyncCallComponentMethod(
      'Steps_028633', 
      'setCurrent',
      '3'
    )
  `;

    const result = setStepsCurrentValue(generateParams);

    expectValue(result, expectedCode);
  });
});
