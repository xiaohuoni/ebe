import { reloadChildData } from '../../../src/cmd/pcCmd/reloadChildData';
import { expectValue } from '../../utils';

describe('reloadChildData', () => {
  it('should generate the correct code for reload children data', () => {
    const generateParams = {
      value: {
        options: {
          compId: 'Cascader_992191',
          compLib: 'comm',
          pageJsonId: '645776',
          compName: 'Cascader',
          id: '944123',
          parentKey: '2',
          data: '$data_74435$',
          labelKey: 'title',
        },
      },
    };

    const expectedCode = `
    // 级联选择·加载子节点数据
    // 根据key组装数据
    if (Array.isArray(data_74435) && "2") {
      // 根据配置的key组装好数组
      const nodeKeysMap = {
        key: 'value',
        title: 'title',
        selectable: 'disabled',
        children: 'children',
      };
      const resloveData: any = (list: any[]) => {
        return list?.map?.(item => {
          let children;
          if (Array.isArray(item[nodeKeysMap.children])) {
            children = resloveData(item[nodeKeysMap.children]);
          }
          return {
            ...item,
            value: item[nodeKeysMap.key],
            title: item[nodeKeysMap.title],
            disabled: item[nodeKeysMap.selectable],
            children,
          };
        }) || [];
      };
      const finalData = resloveData(data_74435);
      // 更新子节点数据
      asyncCallComponentMethod(
        'Cascader_992191', 
        'setChildOptions',
        {
          key: '2',
          options: finalData,
        }
      )
    }
  `;

    const result = reloadChildData(generateParams);

    expectValue(result, expectedCode);
  });
});
