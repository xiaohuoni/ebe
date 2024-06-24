import { mediaControl } from '../../../src/cmd/pcCmd/mediaControl';
import { expectValue } from '../../utils';

describe('mediaControl', () => {
  it('should generate the correct code for control media', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Animation_3660294',
          compLib: '@/components',
          pageJsonId: '645776',
          compName: 'Animation',
          id: '13253045',
          updateMediaState: 'toggle',
        },
      },
    };

    const expectedCode = `
    // 动画容器·动画控制
    callComponentMethod(
      'Animation_3660294', 
      'onOperationAudio',
      'toggle'
    )
  `;

    const result = mediaControl(generateParams);

    expectValue(result, expectedCode);
  });
});
