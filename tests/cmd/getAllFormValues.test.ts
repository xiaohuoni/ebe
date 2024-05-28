import { getAllFormValues } from '../../src/cmd/getAllFormValues';
import { GeneratorCallbackWithThenCatch } from '../../src/cmd/utils';
import { expectValue } from '../utils';

describe('getAllFormValues', () => {
  it('should generate the correct code for getting all form values', () => {
    const generateParams = {
      value: {
        options: {
          callback1: ['allFormValues'],
          callback2: ['errors'],
        },
      },
    };

    const expectedCode = `
    // 获取所有表单值
    ${GeneratorCallbackWithThenCatch(`getAllFormValues()`, generateParams, {
      params: {
        callback1: ['allFormValues'],
        callback2: ['errors'],
      },
    })};
  `;

    const result = getAllFormValues(generateParams);

    expectValue(result, expectedCode);
  });
});
