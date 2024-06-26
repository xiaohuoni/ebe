import { setFormValues } from '../../../src/cmd/pcCmd/setFormValues';
import { expectValue } from '../../utils';

describe('setFormValues', () => {
  it('should generate the correct code for setting form values', () => {
    const generateParams = {
      value: {
        options: {
          paramsObj: { name: 'John', age: 30 },
          params: 'object',
          compId: 'form1',
        },
      },
    };

    const expectedCode = `
    // 设置表单值
    setFormValues("form1", {name: "John",age: 30})
  `;

    const result = setFormValues(generateParams);

    expectValue(result, expectedCode);
  });
});
