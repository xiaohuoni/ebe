import { goTo } from '../../../src/cmd/pcCmd/goTo';
import { expectValue } from '../../utils';

describe('goTo', () => {
  it('should generate the correct code for go to swiper item', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Swiper_953784',
          compLib: 'comm',
          pageJsonId: '981285',
          compName: 'Swiper',
          id: '047149',
          value: '2',
        },
      },
    };

    const expectedCode = `
    // 轮播图·去第几页
    const values = ('2' || '').split(',');
    values.forEach((value: any) => {
      callComponentMethod('Swiper_953784', 'goTo',Number(value)||0)
    });
  `;

    const result = goTo(generateParams);

    expectValue(result, expectedCode);
  });
});
