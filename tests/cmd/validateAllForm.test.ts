import { GeneratorCallbackWithThenCatch } from '../../src/cmd/utils';
import { validateAllForm } from '../../src/cmd/validateAllForm';
import { expectValue } from '../utils';

describe('validateAllForm', () => {
  it('should generate the correct code for validating all form values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'form1',
        },
      },
    };

    const expectedCode = `
    // 获取表单值
    ${GeneratorCallbackWithThenCatch(`validateAllForm()`, generateParams, {
      params: {
        callback1: [`allFormValues_form1`],
        callback2: [`error_form1`],
      },
      funcTops: {
        callback1: `const allFormValues = allFormValues_form1`,
        callback2: `const allFormValues = error_form1`,
      },
      alwayCatch: true,
      sync: true,
    })};
  `;

    const result = validateAllForm(generateParams);

    expectValue(result, expectedCode);
  });
});
