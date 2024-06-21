import { prev } from '../../../src/cmd/pcCmd/prev';
import { expectValue } from '../../utils';

describe('prev', () => {
  it('should generate the correct code for go to swiper prev item', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Swiper_953784',
          compLib: 'comm',
          pageJsonId: '981285',
          compName: 'Swiper',
          id: '283742',
        },
      },
    };

    const expectedCode = `
    // 轮播图·上一张
    callComponentMethod('Swiper_953784', 'prev')
  `;

    const result = prev(generateParams);

    expectValue(result, expectedCode);
  });
});
