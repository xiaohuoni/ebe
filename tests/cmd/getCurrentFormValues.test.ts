import { getCurrentFormValues } from '../../src/cmd/getCurrentFormValues';
import { GeneratorCallbackWithThenCatch } from '../../src/cmd/utils';
import { expectValue } from '../utils';

describe('getCurrentFormValues', () => {
  it('should generate the correct code for getting current form values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'form1',
        },
      },
    };

    const expectedCode = `
    // 获取表单值
    ${GeneratorCallbackWithThenCatch('getFormValue("form1")', generateParams, {
      params: {
        callback1: ['form1'],
        callback2: ['errorMsg'],
      },
      alwayCatch: true,
      sync: true,
    })};
  `;

    const result = getCurrentFormValues(generateParams);

    expectValue(result, expectedCode);
  });
});
