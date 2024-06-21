import { setStep } from '../../../src/cmd/pcCmd/setStep';
import { expectValue } from '../../utils';

describe('setStep', () => {
  it('should generate the correct code for set steps step data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Steps_028633',
          compLib: 'antd',
          pageJsonId: '671236',
          compName: 'Steps',
          id: '5829997',
          stepSetting: [
            {
              key: '0_{"key":"0_{}","step":"1"}',
              step: '1',
              status: 'error',
            },
          ],
        },
      },
    };

    const expectedCode = `
    // 步骤条·设置步骤状态
    asyncCallComponentMethod(
      'Steps_028633', 
      'setStepByOptions',
      [
        { key: '0_{"key":"0_{}","step":"1"}', step: '1', status: 'error' },
      ]
    )
  `;

    const result = setStep(generateParams);

    expectValue(result, expectedCode);
  });
});
