import { validateCurrentForm } from '../../../src/cmd/pcCmd/validateCurrentForm';
import { expectValue } from '../../utils';

describe('validateCurrentForm', () => {
  it('should generate the correct code for validating the current form', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'form1',
        },
      },
    };

    const expectedCode = `
    // 获取表单值
    validateForm("form1").catch(() => {});
  `;

    const result = validateCurrentForm(generateParams);

    expectValue(result, expectedCode);
  });
});
