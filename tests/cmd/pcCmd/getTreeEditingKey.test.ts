import { getTreeEditingKey } from '../../../src/cmd/pcCmd/getTreeEditingKey';
import { expectValue } from '../../utils';

describe('getTreeEditingKey', () => {
  it('should generate the correct code for get tree edition key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '591262',
        },
      },
    };

    const expectedCode = `
    // 树形控件·获取当前操作的节点key
    asyncGetValue('Tree_717662', 'editingKey')
  `;

    const result = getTreeEditingKey(generateParams);

    expectValue(result, expectedCode);
  });
});
