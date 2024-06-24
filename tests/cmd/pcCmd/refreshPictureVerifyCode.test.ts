import { refreshPictureVerifyCode } from '../../../src/cmd/pcCmd/refreshPictureVerifyCode';
import { expectValue } from '../../utils';

describe('refreshPictureVerifyCode', () => {
  it('should generate the correct code for refresh picture verifycode', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'PictureVerifyCode_515567',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'PictureVerifyCode',
          id: '707507',
        },
      },
    };

    const expectedCode = `
    // 图形验证码·刷新验证码
    asyncCallComponentMethod("PictureVerifyCode_515567", 'refreshPictureVeriryCode')
    `;

    const result = refreshPictureVerifyCode(generateParams);

    expectValue(result, expectedCode);
  });
});
