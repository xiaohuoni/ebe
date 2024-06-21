import { getTreeSelectedKey } from '../../../src/cmd/pcCmd/getTreeSelectedKey';
import { expectValue } from '../../utils';

describe('getTreeSelectedKey', () => {
  it('should generate the correct code for get tree selected key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '245312',
        },
      },
    };

    const expectedCode = `
    // 树形控件·获取选中节点key
    asyncGetValue('Tree_717662', 'selectedKeys')
  `;

    const result = getTreeSelectedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
