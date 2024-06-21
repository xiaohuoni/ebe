import { closeExpandedKey } from '../../../src/cmd/pcCmd/closeExpandedKey';
import { expectValue } from '../../utils';

describe('closeExpandedKey', () => {
  it('should generate the correct code for close tree expanded key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '938055',
          value: '1',
        },
      },
    };

    const expectedCode = `
    // 树形控件·收起指定节点
    callComponentMethod("Tree_717662", 'setCloseExpandedKey',"1"?.replace(/\[|]/g, '')?.split(',')?.filter((v: any) => !!v));
  `;

    const result = closeExpandedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
