import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from './utils';
export function reloadData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { data: myData, compId, compName: myCompName } = options;
  const compName = parse2Var(myCompName);
  const data = parse2Var(myData);

  // 树选择加载服务移到事件中，兼容存量数据
  if (['"TreeSelect"', '"Tree"'].includes(compName)) {
    const code = `
    // 加载数据
    asyncCallComponentMethod(${parse2Var(compId)}, 'setStateMap', ${parse2Var({
      dataSource: options.data,
      treeService: {
        key: options.nodeValueKey,
        title: options.labelKey,
        selectable: options.selectable,
        children: options.childrenKey,
      },
    })})
    `;
    return GeneratorCallbackWithThenCatch(code, generateParams, {
      topFuncAsync: true,
    });
  } else if (['"Cascader"'].includes(compName)) {
    return `
    // 加载数据
    // 根据key组装数据
    const source = ${data}
    if (Array.isArray(source)) {
      // 根据配置的key组装好数组
      const nodeKeysMap = {
        key: ${parse2Var(options.nodeValueKey)} || 'value',
        title: ${parse2Var(options.labelKey)} || 'title',
        selectable: ${parse2Var(options.selectable)}||'selectable',
        children: ${parse2Var(options.childrenKey)} || 'children',
      };
      const resloveData: any = (list: any[]) => {
        return (
          list?.map?.((item: any) => {
            let children;
            if (Array.isArray(item[nodeKeysMap.children])) {
              children = resloveData(item[nodeKeysMap.children]);
            }
            // 当节点的字段编码值为布尔类型的false，或者字符串类型为'false'、 空字符串时，都认为不可选，否则认为可选
            let disabled: boolean | undefined = !item[nodeKeysMap.selectable];
            if (typeof item[nodeKeysMap.selectable] === 'string') {
              disabled =
                item[nodeKeysMap.selectable] === 'false' ? true : disabled;
            } else if (
              item[nodeKeysMap.selectable] === undefined ||
              item[nodeKeysMap.selectable] === null
            ) {
              disabled = undefined;
            }
            return {
              ...item,
              value: item[nodeKeysMap.key],
              title: item[nodeKeysMap.title],
              disabled,
              children,
            };
          }) || []
        );
      };
      const finalData = resloveData(source);
      refs[${parse2Var(compId)}]?.setOptions(finalData);
    }
    `;
  } else if (['"Steps"'].includes(compName)) {
    const code = `
    // 加载数据
    asyncCallComponentMethod(${parse2Var(compId)}, 'setStepsOptions', ${data})
    `;
    return GeneratorCallbackWithThenCatch(code, generateParams, {
      topFuncAsync: true,
    });
  } else {
    const code = `
    // 加载数据
    asyncCallComponentMethod(${parse2Var(compId)}, 'setDataSource', ${parse2Var(
      data,
    )})
    `;
    return GeneratorCallbackWithThenCatch(code, generateParams, {
      topFuncAsync: true,
    });
  }
}

export default reloadData;
