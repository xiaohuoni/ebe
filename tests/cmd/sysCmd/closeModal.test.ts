import { closeModal } from '../../../src/cmd/sysCmd/closeModal';
import { expectValue } from '../../utils';

describe('closeModal', () => {
  it('should generate the correct code for closing a modal', () => {
    const generateParams = {
      value: {
        options: {
          platform: 'web',
          config: {},
        },
      },
    };

    const expectedCode = `// 关闭当前弹窗
  closeModal && closeModal();`;

    const result = closeModal(generateParams);

    expectValue(result, expectedCode);
  });
});
