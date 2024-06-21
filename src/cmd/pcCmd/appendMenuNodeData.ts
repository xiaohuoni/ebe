import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function appendMenuNodeData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, key, title, childrenKey } = options;
  const code = `
   // 树形控件·加载菜单子项数据
   if(key){
    asyncCallComponentMethod(
      ${parse2Var(compId)},
      'setRightMenuData',
      {
        valueKey: ${parse2Var(key)},
        titleKey: ${parse2Var(title)},
        children: ${parse2Var(childrenKey)},
        dataSource:${parse2Var(options.data)},
        treeKey: key,
      }
    )
   }
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default appendMenuNodeData;
