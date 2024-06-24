import { setBadgeValue } from '../../../src/cmd/pcCmd/setBadgeValue';
import { expectValue } from '../../utils';

describe('setBadgeValue', () => {
  it('should generate the correct code for set badge value', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'TabPane_4532156',
          compLib: 'comm',
          pageJsonId: '981285',
          compName: 'TabPane',
          id: '2865587',
          value: '10',
        },
      },
    };

    const expectedCode = `
    // 静态标签页·设置选项卡内容
    asyncCallComponentMethod(
      'TabPane_4532156', 
      'setBadge',
      '10'
    )
  `;

    const result = setBadgeValue(generateParams);

    expectValue(result, expectedCode);
  });
});
