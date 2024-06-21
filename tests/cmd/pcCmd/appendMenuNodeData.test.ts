import { appendMenuNodeData } from '../../../src/cmd/pcCmd/appendMenuNodeData';
import { expectValue } from '../../utils';

describe('appendMenuNodeData', () => {
  it('should generate the correct code for append menu node data to tree', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Tree_717662',
          compLib: 'comm',
          pageJsonId: '5048447',
          compName: 'Tree',
          id: '984844',
          data: '$data_267373$',
          title: 'title1',
          key: 'key',
          childrenKey: 'children',
        },
      },
    };

    const expectedCode = `
    // 树形控件·加载菜单子项数据
    if(key){
      asyncCallComponentMethod(
        'Tree_717662',
        'setRightMenuData',
        {
          valueKey: "key",
          titleKey: "title1",
          children: "children",
          dataSource:data_267373,
          treeKey: key,
        }
      )
     }
  `;

    const result = appendMenuNodeData(generateParams);

    expectValue(result, expectedCode);
  });
});
