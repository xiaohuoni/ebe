import { hideMessage } from '../../../src/cmd/sysCmd/hideMessage';
import { expectValue } from '../../utils';

describe('hideMessage', () => {
  it('should generate the correct code for hiding a message', () => {
    const generateParams = {
      value: {
        platform: 'web',
        config: {},
      },
    };

    const expectedCode = `// 隐藏弹窗
   messageApi.destroy && messageApi.destroy()`;

    const result = hideMessage(generateParams);

    expectValue(result, expectedCode);
  });
});
