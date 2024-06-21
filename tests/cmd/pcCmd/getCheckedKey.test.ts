import { getCheckedKey } from '../../../src/cmd/pcCmd/getCheckedKey';
import { expectValue } from '../../utils';

describe('getCheckedKey', () => {
  it('should generate the correct code for get tree checked key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '700279',
        },
      },
    };

    const expectedCode = `
    // 树形控件·获取复选框选中值
    asyncGetValue('Tree_717662', 'checkedKeys')
  `;

    const result = getCheckedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
