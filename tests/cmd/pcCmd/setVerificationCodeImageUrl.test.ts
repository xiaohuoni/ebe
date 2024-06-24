import { setVerificationCodeImageUrl } from '../../../src/cmd/pcCmd/setVerificationCodeImageUrl';
import { expectValue } from '../../utils';

describe('setVerificationCodeImageUrl', () => {
  it('should generate the correct code for set verificationcode image url', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'VerificationCode_233072',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'VerificationCode',
          id: '384389',
          verificationCodeUrl:
            'http://172.21.72.205:10000/lcdp-app/assets/images/layout/img-avatar.png',
        },
      },
    };

    const expectedCode = `
    // 验证码·设置图片地址
    asyncCallComponentMethod('VerificationCode_233072', 'setVerificationCodeImageUrl','http://172.21.72.205:10000/lcdp-app/assets/images/layout/img-avatar.png')
    `;

    const result = setVerificationCodeImageUrl(generateParams);

    expectValue(result, expectedCode);
  });
});
