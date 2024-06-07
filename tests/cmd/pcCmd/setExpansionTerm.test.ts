import { setExpansionTerm } from '../../../src/cmd/pcCmd/setExpansionTerm';
import { expectValue } from '../../utils';
describe('setExpansionTerm', () => {
  it('should generate the correct method call', () => {
    const value = {
      options: {
        expansionkey: 'expansionKey',
        compId: 'componentId',
        type: 'expansionType',
      },
    };

    const expected = `callComponentMethod(
      "componentId",
      "setExpansionTerm",
      "expansionType",
      "expansionKey"
    )`;

    const result = setExpansionTerm({ value });
    expectValue(result, expected);
  });

  it('should generate the correct method call without params', () => {
    const value = {
      options: {
        expansionkey: 'expansionKey',
        compId: 'componentId',
        type: 'expansionType',
      },
    };

    const expected = `callComponentMethod(
      "componentId",
      "setExpansionTerm",
      "expansionType",
      'expansionKey',
    )`;

    const result = setExpansionTerm({ value });
    expectValue(result, expected);
  });
});
