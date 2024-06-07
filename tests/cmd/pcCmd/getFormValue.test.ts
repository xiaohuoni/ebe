import { getFormValue } from '../../../src/cmd/pcCmd/getFormValue';
import { expectValue } from '../../utils';

describe('getFormValue', () => {
  it('should generate the correct code for getting form values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'myForm',
        },
      },
    };

    const expectedCode = `
    // 获取表单值
    getFormValue("myForm").catch(() => {});
  `;

    const result = getFormValue(generateParams);

    expectValue(result, expectedCode);
  });
});
