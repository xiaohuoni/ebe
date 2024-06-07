import { resetAllForm } from '../../../src/cmd/pcCmd/resetAllForm';
import { expectValue } from '../../utils';

describe('resetAllForm', () => {
  it('should generate the correct code for resetting all form values', () => {
    const generateParams = {
      value: {},
    };

    const expectedCode = `
    // 重置所有表单值
    resetAllForm()
  `;

    const result = resetAllForm(generateParams);

    expectValue(result, expectedCode);
  });
});
