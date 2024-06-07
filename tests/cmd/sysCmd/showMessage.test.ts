import { showMessage } from '../../../src/cmd/sysCmd/showMessage';
import { expectValue } from '../../utils';

describe('showMessage', () => {
  it('should generate the correct code for showing a message', () => {
    const generateParams = {
      value: {
        options: {
          type: 'success',
          value: 'Hello, world!',
        },
      },
    };

    const expectedCode = `// 提示消息 \n messageApi('success', "Hello, world!") `;

    const result = showMessage(generateParams);

    expectValue(result, expectedCode);
  });
});
