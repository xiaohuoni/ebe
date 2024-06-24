import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function reloadChildData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const {
    compName,
    data,
    parentKey,
    nodeValueKey = 'value',
    labelKey = 'title',
    selectable = 'disabled',
    childrenKey = 'children',
  } = options;
  let code = '// 该控件暂无加载子节点数据指令';
  if (['Cascader'].includes(compName)) {
    code = `
    // 级联选择·加载子节点数据
    // 根据key组装数据
    if (Array.isArray(${parse2Var(data)}) && ${parse2Var(parentKey)}) {
      // 根据配置的key组装好数组
      const nodeKeysMap = {
        key: ${parse2Var(nodeValueKey)},
        title: ${parse2Var(labelKey)},
        selectable: ${parse2Var(selectable)},
        children: ${parse2Var(childrenKey)},
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
      const finalData = resloveData(${parse2Var(data)});
      // 更新子节点数据
      ${GeneratorCallbackWithThenCatch(
        `asyncCallComponentMethod(
        ${parse2Var(options.compId)}, 
        'setChildOptions',
        {
          key:  ${parse2Var(parentKey)},
          options: finalData,
        }
      )
      `,
        generateParams,
        {
          params: {
            callback1: [],
          },
        },
      )}
    }
    `;
  }

  return code;
}

export default reloadChildData;
