import { startVerificationCodeCountdown } from '../../../src/cmd/pcCmd/startVerificationCodeCountdown';
import { expectValue } from '../../utils';

describe('startVerificationCodeCountdown', () => {
  it('should generate the correct code for start verificationcode count down', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'VerificationCode_081282',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'VerificationCode',
          id: '203754',
        },
      },
    };

    const expectedCode = `
    // 验证码·开始倒计时
    asyncCallComponentMethod('VerificationCode_081282', 'startVerificationCodeCountdown',new Date())
    `;

    const result = startVerificationCodeCountdown(generateParams);

    expectValue(result, expectedCode);
  });
});
