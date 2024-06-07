import { appendTreeNode } from '../../../src/cmd/pcCmd/appendTreeNode';
import { expectValue } from '../../utils';

describe('appendTreeNode', () => {
  it('should return the correct code when nodeKey is provided', () => {
    const generateParams = {
      value: {
        options: {
          nodeKey: 'myNodeKey',
          data: 'myData',
          compId: 'myCompId',
          selectable: 'mySelectable',
          key: 'myKey',
          title: 'myTitle',
        },
      },
    };

    const expectedCode = `// 加载树形控件子节点数据 \n const newData = refs?.['myCompId']?.dataSource.filter((e: any) => e) || [];
     const odata = 'myData';
     // 调用树形控件设置数据
     callComponentMethod('myCompId', 'setDataSource', updateNodeChildren('myNodeKey', odata, newData, 'myKey', 'myTitle', 'mySelectable'))
    `;

    expectValue(appendTreeNode(generateParams), expectedCode);
  });

  it('should return the correct code when nodeKey is not provided', () => {
    const generateParams = {
      value: {
        options: {
          data: 'myData',
          compId: 'myCompId',
          selectable: 'mySelectable',
          key: 'myKey',
          title: 'myTitle',
        },
      },
    };

    const expectedCode = `// appendTreeNode \\ console.error('数据异常：appendTreeNode 中的nodeKey未空')`;

    expectValue(appendTreeNode(generateParams), expectedCode);
  });
});
