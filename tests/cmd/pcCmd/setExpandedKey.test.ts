import { setExpandedKey } from '../../../src/cmd/pcCmd/setExpandedKey';
import { expectValue } from '../../utils';

describe('setExpandedKey', () => {
  it('should generate the correct code for set tree expanded key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '6416214',
          value: '1',
        },
      },
    };

    const expectedCode = ` 
    // 树形控件·展开指定节点
    callComponentMethod('Tree_717662', 'setExpandedKey',"1"?.replace(/\[|]/g, '')?.split(',')?.filter((v: any) => !!v));
  
  `;

    const result = setExpandedKey(generateParams);

    expectValue(result, expectedCode);
  });
});
