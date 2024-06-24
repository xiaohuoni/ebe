import { setSelectAllValues } from '../../../src/cmd/pcCmd/setSelectAllValues';
import { expectValue } from '../../utils';

describe('setSelectAllValues', () => {
  it('should generate the correct code for select all value', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Cascader_992191',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'Cascader',
          id: '384302',
        },
      },
    };

    const expectedCode = `
    // 级联选择·全部选中
      asyncCallComponentMethod(
        'Cascader_992191', 
        'selectAll'
      )
  `;

    const result = setSelectAllValues(generateParams);

    expectValue(result, expectedCode);
  });
});
