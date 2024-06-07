import { reloadSelectData } from '../../../src/cmd/pcCmd/reloadSelectData';
import { expectValue } from '../../utils';

describe('reloadSelectData', () => {
  it('should generate the correct code for reloading select data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'select1',
          data: ['Option 1', 'Option 2', 'Option 3'],
          labelKey: 'label',
          valueKey: 'value',
        },
      },
    };

    const expectedCode = `
asyncCallComponentMethod(
    "select1",
    "setDataWithLabelAndValue",
    {dataSource: ["Option 1","Option 2","Option 3"],labelKey: "label",valueKey: "value"}
  )
`;

    const result = reloadSelectData(generateParams);

    expectValue(result, expectedCode);
  });
});
