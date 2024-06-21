import { setCheckedKey } from '../../../src/cmd/pcCmd/setCheckedKey';
import { expectValue } from '../../utils';

describe('setCheckedKey', () => {
  it('should generate the correct code for set tree checked key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '1854445',
          value: '$["1"]$',
        },
      },
    };

    const expectedCode = `
    // 树形控件·设置复选框选中值
    asyncCallComponentMethod('Tree_717662', 'setCheckedKeys', ["1"]})
  `;

    const result = setCheckedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
