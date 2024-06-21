import { setSelectAll } from '../../../src/cmd/pcCmd/setSelectAll';
import { expectValue } from '../../utils';

describe('setSelectAll', () => {
  it('should generate the correct code for set tree select key', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '543714',
        },
      },
    };

    const expectedCode = ` 
    // 树形控件·设置全部选中
    asyncCallComponentMethod('Tree_717662', 'setSelectAll', true)
  
  `;

    const result = setSelectAll(generateParams);

    expectValue(result, expectedCode);
  });
});
