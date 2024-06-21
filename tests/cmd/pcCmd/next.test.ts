import { next } from '../../../src/cmd/pcCmd/next';
import { expectValue } from '../../utils';

describe('next', () => {
  it('should generate the correct code for go to swiper next item', () => {
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
    // 轮播图·下一张
    callComponentMethod('Swiper_953784', 'next')
  `;

    const result = next(generateParams);

    expectValue(result, expectedCode);
  });
});
