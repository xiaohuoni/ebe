import { clearTreeCheckedKey } from '../../../src/cmd/pcCmd/clearTreeCheckedKey';
import { expectValue } from '../../utils';

describe('clearTreeCheckedKey', () => {
  it('should generate the correct code for clear tree ckeck key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '371548',
        },
      },
    };

    const expectedCode = `
    // 树形控件·清空复选框值
  callComponentMethod("Tree_717662", 'setCheckedKeys',null);
  `;

    const result = clearTreeCheckedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
