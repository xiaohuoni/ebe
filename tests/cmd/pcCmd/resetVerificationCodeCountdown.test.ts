import { resetVerificationCodeCountdown } from '../../../src/cmd/pcCmd/resetVerificationCodeCountdown';
import { expectValue } from '../../utils';

describe('resetVerificationCodeCountdown', () => {
  it('should generate the correct code for reset verificationcode count down', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'VerificationCode_081282',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'VerificationCode',
          id: '8374137',
        },
      },
    };

    const expectedCode = `
    // 验证码·重置倒计时
    asyncCallComponentMethod('VerificationCode_081282', 'resetVerificationCodeCountdown',new Date())
    `;

    const result = resetVerificationCodeCountdown(generateParams);

    expectValue(result, expectedCode);
  });
});
