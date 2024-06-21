import { clearTreeSelectedKey } from '../../../src/cmd/pcCmd/clearTreeSelectedKey';
import { expectValue } from '../../utils';

describe('clearTreeSelectedKey', () => {
  it('should generate the correct code for clear tree ckeck key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '534983',
        },
      },
    };

    const expectedCode = `

  // 树形控件·清空选中项
  callComponentMethod("Tree_717662", 'setSelectedKeys',[]);
  `;

    const result = clearTreeSelectedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
