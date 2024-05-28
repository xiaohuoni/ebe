import { getResetCurrentForm } from '../../src/cmd/resetCurrentForm';
import { expectValue } from '../utils';

describe('getResetCurrentForm', () => {
  it('should generate the correct code for resetting the current form', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'form1',
        },
      },
    };

    const expectedCode = `
    resetForm("form1")
  `;

    const result = getResetCurrentForm(generateParams);

    expectValue(result, expectedCode);
  });
});
