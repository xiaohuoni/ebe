import { resetForm } from '../../../src/cmd/pcCmd/resetForm';
import { expectValue } from '../../utils';

describe('resetForm', () => {
  it('should generate the correct code for resetting form values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'myForm',
        },
      },
    };

    const expectedCode = `
    // 重置表单值
    resetForm("myForm");
  `;

    const result = resetForm(generateParams);

    expectValue(result, expectedCode);
  });
});
