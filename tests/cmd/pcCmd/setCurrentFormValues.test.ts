import { setCurrentFormValues } from '../../../src/cmd/pcCmd/setCurrentFormValues';
import { expectValue } from '../../utils';

describe('setCurrentFormValues', () => {
  it('should generate the correct code for setting current form values', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'form1',
          paramsObj: { name: 'John', age: 30 },
          params: 'object',
        },
      },
    };

    const expectedCode = 'setFormValues("form1", {name: "John",age: 30})';

    const result = setCurrentFormValues(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for setting current form values with params as string', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'form2',
          params: '$name, age$',
        },
      },
    };

    const expectedCode = 'setFormValues("form2", name, age)';

    const result = setCurrentFormValues(generateParams);

    expectValue(result, expectedCode);
  });
});
