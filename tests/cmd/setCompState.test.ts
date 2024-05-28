import { setCompState } from '../../src/cmd/setCompState';
import { expectValue } from '../utils';

describe('setCompState', () => {
  it('should generate the correct code for setting component state', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'table1',
          paramsObj: {
            prop1: 'value1',
            prop2: 'value2',
          },
        },
      },
    };

    const expectedCode = `
  callComponentMethod(
    "table1",
    "setCompPropMapState",
    {prop1: "value1",prop2: "value2"}
  )
  `;

    const result = setCompState(generateParams);

    expectValue(result, expectedCode);
  });
});
