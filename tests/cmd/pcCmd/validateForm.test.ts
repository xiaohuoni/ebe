import { validateForm } from '../../../src/cmd/pcCmd/validateForm';
import { expectValue } from '../../utils';

describe('validateForm', () => {
  it('should generate the correct code for validating a form', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'myForm',
        },
      },
    };

    const expectedCode = `
    // 获取表单值
    validateForm("myForm").catch(() => {});
  `;

    const result = validateForm(generateParams);

    expectValue(result, expectedCode);
  });
});
